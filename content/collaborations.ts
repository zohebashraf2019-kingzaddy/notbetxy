import type { StaticImageData } from "next/image";

/**
 * THE COLLABORATION EDIT — portfolio entries.
 *
 * To add a real collaboration:
 *  1. Drop the image in /public/images/collabs/ (e.g. brand-name.jpg)
 *  2. Add an entry below with placeholder: false
 *  3. Remove a placeholder entry if you like. Commit & push — Vercel redeploys.
 *
 * Only list partnerships that actually happened and that Betxy approves.
 */
export const categories = ["Beauty", "Lifestyle", "Food", "Fashion", "Events"] as const;
export type Category = (typeof categories)[number];

export type Collaboration = {
  id: string;
  brand: string;
  title: string;
  category: Category;
  description: string;
  /** Public path like "/images/collabs/brand.jpg" or a static import */
  image?: string | StaticImageData;
  /** Optional brand logo path */
  logo?: string;
  /** Link to the original Instagram post / reel */
  postUrl?: string;
  format?: string; // e.g. "Reel", "Story Series", "Feed Post"
  placeholder?: boolean;
};

export const collaborations: Collaboration[] = [
  // ── Example of a real entry (uncomment & edit) ─────────────────────────
  // {
  //   id: "brand-launch-2026",
  //   brand: "Brand Name",
  //   title: "Spring Collection Launch",
  //   category: "Fashion",
  //   description: "A styled Reel and Story series introducing the new collection.",
  //   image: "/images/collabs/brand-launch.jpg",
  //   postUrl: "https://www.instagram.com/p/XXXXXXXX/",
  //   format: "Reel + Stories",
  // },

  // ── Elegant placeholders (shown until real projects are added) ─────────
  { id: "ph-beauty", brand: "Your Beauty Brand", title: "Glow, Featured", category: "Beauty", description: "Salons, lash & brow studios, skincare and cosmetics — showcased with personality.", format: "Reel · Stories", placeholder: true },
  { id: "ph-food", brand: "Your Restaurant", title: "The Hidden Gem", category: "Food", description: "Local restaurants, cafés and food trucks discovered and shared with the community.", format: "Reel · Feed Post", placeholder: true },
  { id: "ph-fashion", brand: "Your Boutique", title: "Styled by Betxy", category: "Fashion", description: "Boutiques and apparel brands styled into looks that feel real and wearable.", format: "Try-On · Reel", placeholder: true },
  { id: "ph-lifestyle", brand: "Your Lifestyle Brand", title: "A Day With", category: "Lifestyle", description: "Products and services woven naturally into everyday life content.", format: "Story Series", placeholder: true },
  { id: "ph-events", brand: "Your Event", title: "Opening Night", category: "Events", description: "Launches, grand openings and experiences — covered live and after.", format: "Live Coverage", placeholder: true },
  { id: "ph-custom", brand: "Your Brand", title: "Something New", category: "Lifestyle", description: "Have a different idea? This spot is reserved for a custom collaboration.", format: "Custom", placeholder: true },
];

/**
 * Instagram Reels to embed in "Life Through My Lens".
 * Paste full reel/post URLs, e.g. "https://www.instagram.com/reel/ABC123xyz/".
 * Leave empty to show photo tiles that link to the Reels tab instead.
 */
export const featuredReels: string[] = [];
