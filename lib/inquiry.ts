import { budgetRanges, collabTypes } from "@/content/site";

export type InquiryInput = {
  fullName: string;
  brandName: string;
  email: string;
  phone: string;
  instagram: string;
  website: string;
  collabType: string;
  budget: string;
  preferredDate: string;
  description: string;
  consent: boolean;
};

export type InquiryErrors = Partial<Record<keyof InquiryInput, string>>;

export const emptyInquiry: InquiryInput = {
  fullName: "", brandName: "", email: "", phone: "", instagram: "", website: "",
  collabType: "", budget: "", preferredDate: "", description: "", consent: false,
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phoneRe = /^[+()\-.\s\d]{7,20}$/;
const handleRe = /^@?[A-Za-z0-9._]{1,30}$/;

/** Shared client + server validation. */
export function validateInquiry(v: InquiryInput): InquiryErrors {
  const e: InquiryErrors = {};
  const t = (s: string) => (s ?? "").trim();
  if (t(v.fullName).length < 2) e.fullName = "Please enter your full name.";
  if (t(v.fullName).length > 100) e.fullName = "Name is too long.";
  if (t(v.brandName).length < 2) e.brandName = "Please enter your business or brand name.";
  if (t(v.brandName).length > 120) e.brandName = "Brand name is too long.";
  if (!emailRe.test(t(v.email)) || t(v.email).length > 200) e.email = "Please enter a valid email address.";
  if (t(v.phone) && !phoneRe.test(t(v.phone))) e.phone = "Please enter a valid phone number.";
  if (!t(v.instagram)) e.instagram = "Please share your Instagram handle.";
  else if (!handleRe.test(t(v.instagram).replace(/^https?:\/\/(www\.)?instagram\.com\//i, "").replace(/\/$/, "")))
    e.instagram = "Use a handle like @yourbrand.";
  if (t(v.website)) {
    try {
      const u = new URL(/^https?:\/\//i.test(t(v.website)) ? t(v.website) : `https://${t(v.website)}`);
      if (!u.hostname.includes(".")) throw new Error();
    } catch {
      e.website = "Please enter a valid website URL.";
    }
  }
  if (!(collabTypes as readonly string[]).includes(v.collabType)) e.collabType = "Please choose a collaboration type.";
  if (v.budget && !(budgetRanges as readonly string[]).includes(v.budget)) e.budget = "Please choose a budget range.";
  if (!t(v.preferredDate)) e.preferredDate = "Please choose a preferred date.";
  else if (Number.isNaN(Date.parse(v.preferredDate))) e.preferredDate = "Please choose a valid date.";
  if (t(v.description).length < 20) e.description = "Tell Betxy a little more (at least 20 characters).";
  if (t(v.description).length > 3000) e.description = "Please keep it under 3,000 characters.";
  if (!v.consent) e.consent = "Please agree to the privacy notice.";
  return e;
}
