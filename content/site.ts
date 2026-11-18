/**
 * NOTBETXY — central site content & configuration.
 * Update values here; every section reads from this file.
 */
export const site = {
  name: "NOTBETXY",
  creator: "Betxy w/ an X",
  handle: "@notbetxy",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://notbetxy.vercel.app",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  tagline: "More Than Influence. It's About Connection.",
  motto: "Purpose > Popularity",
  philosophy: "Social media is an illusion, stay curious.",
  identity: "Latina ✨ Mexicana",
  roles: ["Entrepreneur", "Digital Creator", "Social Media Personality", "Brand Collaborator"],
  description:
    "Latina creator, entrepreneur, and storyteller. Bringing authenticity, creativity, and personality to every collaboration. I partner with brands and businesses to create content that connects, inspires, and leaves a lasting impression.",

  /** Follower count is a supplied snapshot — NOT a live count. Update manually. */
  followers: { instagram: "19K+", asOf: "November 2026" },

  /** Verify each URL before publishing. */
  socials: {
    instagram: "https://www.instagram.com/notbetxy/",
    instagramReels: "https://www.instagram.com/notbetxy/reels/",
    tiktok: "https://www.tiktok.com/@notbetxy",
    youtube: "https://www.youtube.com/@notbetxy",
    leadWithDelusion: "https://www.youtube.com/@leadwithdelusion",
    linktree: "https://linktr.ee/NotBetxy",
  },

  /** Set to "/media-kit.pdf" (placed in /public) once the PDF is provided. */
  mediaKitPdf: "",

  agency: { name: "Nexora Digital LLC", url: "https://www.nexoradigital.live" },
} as const;

export const nav = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Collaborations", href: "#collaborations" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Media Kit", href: "#media-kit" },
  { label: "Contact", href: "#contact" },
] as const;

export const collabTypes = [
  "Business Promotion",
  "Sponsored Instagram Reel",
  "Instagram Story Promotion",
  "Product Feature",
  "Brand Partnership",
  "Event Collaboration",
  "Other",
] as const;

export type CollabType = (typeof collabTypes)[number];

export const budgetRanges = [
  "Prefer to discuss",
  "Under $250",
  "$250 – $500",
  "$500 – $1,000",
  "$1,000 – $2,500",
  "$2,500+",
  "Product / service exchange",
] as const;

export const services: {
  numeral: string;
  title: string;
  body: string;
  inquiryType: CollabType;
}[] = [
  {
    numeral: "I",
    title: "Brand Partnerships",
    body: "Collaborative promotional opportunities for brands looking to connect with Betxy's audience through authentic social media content.",
    inquiryType: "Brand Partnership",
  },
  {
    numeral: "II",
    title: "Business Promotions",
    body: "Highlighting local businesses, restaurants, boutiques, beauty professionals, lifestyle services, and other brands through engaging promotional content.",
    inquiryType: "Business Promotion",
  },
  {
    numeral: "III",
    title: "Product Features",
    body: "Showcasing products through creative photography, videos, demonstrations, and personalized content.",
    inquiryType: "Product Feature",
  },
  {
    numeral: "IV",
    title: "Social Media Collaborations",
    body: "Instagram Reels, Stories, feed posts, sponsored content, and collaborative campaigns.",
    inquiryType: "Sponsored Instagram Reel",
  },
  {
    numeral: "V",
    title: "Event Appearances & Coverage",
    body: "Opportunities to collaborate on business launches, events, special promotions, and experiences.",
    inquiryType: "Event Collaboration",
  },
  {
    numeral: "VI",
    title: "Custom Collaborations",
    body: "Have something different in mind? Let's discuss a creative partnership tailored to your brand.",
    inquiryType: "Other",
  },
];
