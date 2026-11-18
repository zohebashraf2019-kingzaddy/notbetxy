"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { budgetRanges, collabTypes, site } from "@/content/site";
import { emptyInquiry, validateInquiry, type InquiryErrors, type InquiryInput } from "@/lib/inquiry";
import { PREFILL_EVENT, type PrefillDetail } from "@/lib/prefill";
import SectionHeading from "./SectionHeading";
import Reveal, { ease } from "./Reveal";
import { ArrowIcon, InstagramIcon } from "./Icons";

type Status = "idle" | "sending" | "success" | "error";

const steps = [
  { n: "01", t: "Share your vision", d: "Tell Betxy about your brand and what you'd like to create." },
  { n: "02", t: "Review & connect", d: "Betxy reviews every inquiry personally and reaches out." },
  { n: "03", t: "Create together", d: "Scope, timing and details are finalized directly with you." },
];

export default function Inquiry() {
  const [v, setV] = useState<InquiryInput>(emptyInquiry);
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");
  const [minDate, setMinDate] = useState<string>();
  const startedAt = useRef<number>(0);
  const honeypot = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    startedAt.current = Date.now();
    const d = new Date();
    setMinDate(new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10));
    const onPrefill = (e: Event) => {
      const { type, message } = (e as CustomEvent<PrefillDetail>).detail ?? {};
      setStatus((s) => (s === "success" ? "idle" : s));
      setV((p) => ({
        ...p,
        collabType: type ?? p.collabType,
        description: message && !p.description ? message : p.description,
      }));
    };
    window.addEventListener(PREFILL_EVENT, onPrefill);
    return () => window.removeEventListener(PREFILL_EVENT, onPrefill);
  }, []);

  const set = <K extends keyof InquiryInput>(k: K, val: InquiryInput[K]) => {
    setV((p) => ({ ...p, [k]: val }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerError("");
    const errs = validateInquiry(v);
    setErrors(errs);
    if (Object.keys(errs).length) {
      const first = Object.keys(errs)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...v, startedAt: startedAt.current, company_site: honeypot.current?.value ?? "" }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok === true) {
        setStatus("success");
        setV(emptyInquiry);
      } else {
        if (json.errors) setErrors(json.errors);
        setServerError(json.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setServerError("Network error — please check your connection and try again.");
      setStatus("error");
    }
  }

  const err = (k: keyof InquiryInput) =>
    errors[k] ? (
      <p id={`${k}-error`} className="field-error" role="alert">
        {errors[k]}
      </p>
    ) : null;
  const aria = (k: keyof InquiryInput) => ({
    name: k,
    id: k,
    "aria-invalid": !!errors[k] || undefined,
    "aria-describedby": errors[k] ? `${k}-error` : undefined,
  });

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative border-t border-ivory/10 bg-noir py-24 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 md:px-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            id="contact-title"
            number="06"
            kicker="Collaboration Inquiry"
            title={
              <>
                Let&apos;s Make It <span className="italic text-champagne">Happen</span>
              </>
            }
            intro="Interested in working together? Whether you're a growing business, established brand, or creative entrepreneur, I'd love to hear about your vision."
          />
          <Reveal delay={0.1} className="mt-12 space-y-7">
            {steps.map((s) => (
              <div key={s.n} className="flex gap-5">
                <span className="font-serif text-2xl italic text-champagne">{s.n}</span>
                <div>
                  <p className="font-serif text-xl">{s.t}</p>
                  <p className="mt-1 text-sm text-beige/70">{s.d}</p>
                </div>
              </div>
            ))}
          </Reveal>
          <Reveal delay={0.2} className="mt-12 border-t border-ivory/10 pt-8 text-sm text-beige/70">
            <p className="eyebrow mb-3">Prefer to message?</p>
            {site.contactEmail && (
              <a href={`mailto:${site.contactEmail}`} className="link-underline block text-ivory">{site.contactEmail}</a>
            )}
            <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" className="link-underline mt-2 inline-flex items-center gap-2 text-ivory">
              <InstagramIcon className="h-3.5 w-3.5" /> DM @notbetxy for promos & collabs 💌
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-7">
          <div className="relative border border-ivory/10 bg-ink p-6 sm:p-10">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="ok"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease }}
                  className="flex min-h-[520px] flex-col items-center justify-center text-center"
                  role="status"
                  aria-live="polite"
                >
                  <p className="font-script text-6xl text-champagne">Thank you</p>
                  <p className="mx-auto mt-6 max-w-md font-serif text-2xl leading-snug">
                    Thank you for reaching out! Your collaboration inquiry has been received. I&apos;ll review your details and get back to you as soon as possible. 💌
                  </p>
                  <p className="mt-6 text-sm text-beige/60">— Betxy w/ an X</p>
                  <button type="button" onClick={() => { setStatus("idle"); startedAt.current = Date.now(); }} className="btn-line mt-10">
                    Send another inquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  ref={formRef}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={onSubmit}
                  noValidate
                  className="grid gap-x-8 gap-y-8 sm:grid-cols-2"
                  aria-describedby="form-privacy"
                >
                  {/* Honeypot */}
                  <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
                    <label htmlFor="company_site">Leave this field empty</label>
                    <input ref={honeypot} id="company_site" name="company_site" type="text" tabIndex={-1} autoComplete="off" />
                  </div>

                  <div>
                    <label htmlFor="fullName" className="field-label">Full Name *</label>
                    <input {...aria("fullName")} className="field" autoComplete="name" value={v.fullName} onChange={(e) => set("fullName", e.target.value)} placeholder="Your name" />
                    {err("fullName")}
                  </div>
                  <div>
                    <label htmlFor="brandName" className="field-label">Business / Brand Name *</label>
                    <input {...aria("brandName")} className="field" autoComplete="organization" value={v.brandName} onChange={(e) => set("brandName", e.target.value)} placeholder="Brand or business" />
                    {err("brandName")}
                  </div>
                  <div>
                    <label htmlFor="email" className="field-label">Email Address *</label>
                    <input {...aria("email")} type="email" inputMode="email" className="field" autoComplete="email" value={v.email} onChange={(e) => set("email", e.target.value)} placeholder="you@brand.com" />
                    {err("email")}
                  </div>
                  <div>
                    <label htmlFor="phone" className="field-label">Phone Number <span className="text-smoke">(Optional)</span></label>
                    <input {...aria("phone")} type="tel" inputMode="tel" className="field" autoComplete="tel" value={v.phone} onChange={(e) => set("phone", e.target.value)} placeholder="(775) 000-0000" />
                    {err("phone")}
                  </div>
                  <div>
                    <label htmlFor="instagram" className="field-label">Instagram Handle *</label>
                    <input {...aria("instagram")} className="field" autoCapitalize="none" value={v.instagram} onChange={(e) => set("instagram", e.target.value)} placeholder="@yourbrand" />
                    {err("instagram")}
                  </div>
                  <div>
                    <label htmlFor="website" className="field-label">Business Website <span className="text-smoke">(Optional)</span></label>
                    <input {...aria("website")} type="url" inputMode="url" className="field" autoComplete="url" value={v.website} onChange={(e) => set("website", e.target.value)} placeholder="yourbrand.com" />
                    {err("website")}
                  </div>
                  <div>
                    <label htmlFor="collabType" className="field-label">Type of Collaboration *</label>
                    <select {...aria("collabType")} className="field cursor-pointer" value={v.collabType} onChange={(e) => set("collabType", e.target.value)}>
                      <option value="" disabled>Select one</option>
                      {collabTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                    {err("collabType")}
                  </div>
                  <div>
                    <label htmlFor="budget" className="field-label">Estimated Budget <span className="text-smoke">(Optional)</span></label>
                    <select {...aria("budget")} className="field cursor-pointer" value={v.budget} onChange={(e) => set("budget", e.target.value)}>
                      <option value="">Select a range</option>
                      {budgetRanges.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                    {err("budget")}
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="preferredDate" className="field-label">Preferred Collaboration Date *</label>
                    <input {...aria("preferredDate")} type="date" min={minDate} className="field" value={v.preferredDate} onChange={(e) => set("preferredDate", e.target.value)} />
                    {err("preferredDate")}
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="description" className="field-label">Project Description *</label>
                    <textarea {...aria("description")} rows={5} className="field resize-y" value={v.description} onChange={(e) => set("description", e.target.value)} placeholder="Tell Betxy about your brand, goals, and the content you have in mind…" />
                    <div className="flex justify-between">
                      {err("description") ?? <span />}
                      <span className="mt-2 text-[11px] text-smoke">{v.description.length}/3000</span>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="flex cursor-pointer items-start gap-3 text-sm text-beige/75">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={v.consent}
                        onChange={(e) => set("consent", e.target.checked)}
                        aria-invalid={!!errors.consent || undefined}
                        className="mt-1 h-4 w-4 shrink-0 cursor-pointer appearance-none border border-ivory/40 bg-transparent checked:border-champagne checked:bg-champagne"
                      />
                      <span id="form-privacy">
                        I agree that the details I share will be used only to respond to this collaboration inquiry, as described in the{" "}
                        <Link href="/privacy" className="underline decoration-champagne/60 underline-offset-4 hover:text-champagne">Privacy Policy</Link>.
                      </span>
                    </label>
                    {err("consent")}
                  </div>

                  {status === "error" && serverError && (
                    <p role="alert" className="border border-[#e7a08f]/40 bg-[#e7a08f]/10 px-4 py-3 text-sm text-[#f0c2b6] sm:col-span-2">
                      {serverError}
                    </p>
                  )}

                  <div className="sm:col-span-2">
                    <button type="submit" disabled={status === "sending"} className="btn-solid w-full disabled:cursor-wait disabled:opacity-70 sm:w-auto">
                      {status === "sending" ? "Sending…" : <>Submit Inquiry <ArrowIcon /></>}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
