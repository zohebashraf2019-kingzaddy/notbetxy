import type { CollabType } from "@/content/site";

export type PrefillDetail = { type?: CollabType; message?: string };
export const PREFILL_EVENT = "notbetxy:prefill";

/** Pre-select the inquiry form and scroll to it. */
export function openInquiry(detail: PrefillDetail = {}) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent<PrefillDetail>(PREFILL_EVENT, { detail }));
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
}
