import { NextResponse } from "next/server";
import { validateInquiry, type InquiryInput } from "@/lib/inquiry";

export const runtime = "nodejs";

// Simple per-instance rate limit (5 submissions / 10 min / IP).
const hits = new Map<string, number[]>();
const WINDOW = 10 * 60 * 1000;
const LIMIT = 5;

const entities: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => entities[c] ?? c);

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW);
  if (recent.length >= LIMIT) {
    return NextResponse.json({ ok: false, error: "Too many submissions. Please try again later." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Spam protection: honeypot + minimum fill time.
  const honeypot = String(body.company_site ?? "");
  const startedAt = Number(body.startedAt ?? 0);
  if (honeypot || !startedAt || now - startedAt < 3000) {
    // Pretend nothing happened for bots, but never claim success to a human-looking client.
    return NextResponse.json({ ok: false, error: "Submission could not be verified. Please try again." }, { status: 400 });
  }

  const str = (k: string) => (typeof body[k] === "string" ? (body[k] as string).trim() : "");
  const data: InquiryInput = {
    fullName: str("fullName"),
    brandName: str("brandName"),
    email: str("email"),
    phone: str("phone"),
    instagram: str("instagram"),
    website: str("website"),
    collabType: str("collabType"),
    budget: str("budget"),
    preferredDate: str("preferredDate"),
    description: str("description"),
    consent: body.consent === true,
  };

  const errors = validateInquiry(data);
  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, error: "Please check the highlighted fields.", errors }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO_EMAIL;
  const from = process.env.INQUIRY_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    console.error("[inquiry] Email delivery is not configured (RESEND_API_KEY / INQUIRY_TO_EMAIL / INQUIRY_FROM_EMAIL).");
    return NextResponse.json(
      { ok: false, error: "The inquiry form is temporarily unavailable. Please DM @notbetxy on Instagram." },
      { status: 503 }
    );
  }

  const rows: [string, string][] = [
    ["Full Name", data.fullName],
    ["Business / Brand", data.brandName],
    ["Email", data.email],
    ["Phone", data.phone || "—"],
    ["Instagram", data.instagram],
    ["Website", data.website || "—"],
    ["Collaboration Type", data.collabType],
    ["Estimated Budget", data.budget || "—"],
    ["Preferred Date", data.preferredDate],
  ];

  const html = `
  <div style="font-family:Georgia,serif;background:#0c0a09;color:#f3ece0;padding:32px">
    <p style="letter-spacing:4px;font-size:11px;color:#c9a97a;text-transform:uppercase;margin:0">NOTBETXY · New Collaboration Inquiry</p>
    <h1 style="font-weight:300;font-size:28px;margin:12px 0 24px">${esc(data.brandName)}</h1>
    <table style="width:100%;border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td style="padding:8px 0;color:#b9a68c;width:170px;border-bottom:1px solid #2a2420">${k}</td><td style="padding:8px 0;border-bottom:1px solid #2a2420">${esc(v)}</td></tr>`
        )
        .join("")}
    </table>
    <p style="letter-spacing:3px;font-size:11px;color:#c9a97a;text-transform:uppercase;margin:28px 0 8px">Project Description</p>
    <p style="font-family:Arial,sans-serif;font-size:14px;line-height:1.7;white-space:pre-wrap;margin:0">${esc(data.description)}</p>
  </div>`;

  const text =
    rows.map(([k, v]) => `${k}: ${v}`).join("\n") + `\n\nProject Description:\n${data.description}`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: to.split(",").map((s) => s.trim()).filter(Boolean),
        reply_to: data.email,
        subject: `New collab inquiry — ${data.brandName} (${data.collabType})`,
        html,
        text,
      }),
    });
    if (!res.ok) {
      console.error("[inquiry] Resend error", res.status, await res.text());
      return NextResponse.json(
        { ok: false, error: "We couldn't send your inquiry right now. Please try again or DM @notbetxy." },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("[inquiry] Network error", err);
    return NextResponse.json(
      { ok: false, error: "We couldn't send your inquiry right now. Please try again or DM @notbetxy." },
      { status: 502 }
    );
  }

  recent.push(now);
  hits.set(ip, recent);
  return NextResponse.json({ ok: true });
}
