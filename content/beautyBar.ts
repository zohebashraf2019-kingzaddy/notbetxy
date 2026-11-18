/**
 * BETXY'S BEAUTY BAR — Betxy's own esthetics & lash studio.
 * Menu copied from the booking site (Nov 2026). Prices/durations change — the
 * booking site is always the source of truth. Update here when her menu changes.
 * Set `enabled: false` to hide the whole section.
 */
export const beautyBar = {
  enabled: true,
  name: "Betxy's Beauty Bar",
  tagline: "Licensed Esthetician ♡ Midtown Reno",
  languages: "Hablo Español",
  intro:
    "Betxy's own licensed esthetics and lash studio in Midtown Reno — specializing in customized lash extensions, wispy volume sets, brow sculpting and waxing, with appointments in English and Spanish.",
  studio: { name: "Spellbound Beauty Studios", instagram: "https://www.instagram.com/spellboundbeautystudios/" },
  address: { line1: "895 South Center Street", line2: "Reno, NV 89501" },
  mapUrl: "https://www.google.com/maps/search/?api=1&query=895+S+Center+St+Reno+NV+89501",
  links: {
    book: "https://betxysbeautybar.glossgenius.com/book",
    services: "https://betxysbeautybar.glossgenius.com/services",
    policies: "https://betxysbeautybar.glossgenius.com/about",
    instagram: "https://www.instagram.com/betxysbeautybar/",
  },
  instagramHandle: "@betxysbeautybar",
  menuAsOf: "November 2026",
  hours: [
    { day: "Monday", time: "Closed" },
    { day: "Tuesday", time: "12 PM – 8 PM" },
    { day: "Wednesday", time: "9 AM – 8 PM" },
    { day: "Thursday", time: "12 PM – 10 PM" },
    { day: "Friday", time: "9 AM – 5 PM" },
    { day: "Saturday", time: "9 AM – 5 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  policy: [
    "A non-refundable deposit secures your appointment and goes toward your total. The remaining balance can be paid in cash on the day of service.",
    "Reschedule more than 48 hours ahead and your deposit moves to your new date.",
    "Cancellations or reschedules under 48 hours forfeit the deposit; a new deposit is needed to rebook.",
    "Cancellations under 24 hours or no-shows are charged 50% of the remaining service balance to the card on file.",
  ],
};

export type MenuItem = { name: string; price: string; duration: string; note?: string; deposit?: string };
export type MenuCategory = { id: string; label: string; blurb?: string; items: MenuItem[] };

export const beautyMenu: MenuCategory[] = [
  {
    id: "full-sets",
    label: "Lash Full Sets",
    blurb: "$25 deposit required for all full sets.",
    items: [
      { name: "Classic Full Set", price: "$115", duration: "150 min" },
      { name: "Hybrid Full Set", price: "$150", duration: "150 min" },
      { name: "Volume Full Set", price: "$170", duration: "155 min" },
      { name: "Wispy Volume Full Set", price: "$185", duration: "160 min", note: "Signature" },
    ],
  },
  {
    id: "fills",
    label: "Lash Fills",
    blurb: "$20 deposit required. All fills are about 105 min.",
    items: [
      { name: "Classic Fill", price: "$65 / $70", duration: "2 wk / 3 wk" },
      { name: "Hybrid Fill", price: "$75 / $80", duration: "2 wk / 3 wk" },
      { name: "Volume Fill", price: "$85 / $90", duration: "2 wk / 3 wk" },
      { name: "Wispy Volume Fill", price: "$90 / $95", duration: "2 wk / 3 wk" },
    ],
  },
  {
    id: "lash-care",
    label: "Lash Care",
    items: [
      { name: "Lash Lift", price: "from $80", duration: "95+ min", note: "2 options" },
      { name: "Lash Restoration Mask", price: "$30", duration: "35 min" },
      { name: "Lash Extension Removal", price: "$20", duration: "30 min" },
    ],
  },
  {
    id: "brows",
    label: "Brows",
    items: [
      { name: "Brow Lamination + Sculpt", price: "$90", duration: "95 min", note: "Lamination, shape, wax & tint", deposit: "$20 deposit" },
      { name: "Brow Lamination + Wax", price: "$70", duration: "90 min", note: "Lamination, shape & wax — no tint", deposit: "$20 deposit" },
      { name: "Back-to-Basics Brow Sculpt", price: "from $35", duration: "30+ min", note: "Shape + wax, then tint" },
      { name: "Back-to-Basics Brow Wax", price: "$25", duration: "30 min" },
    ],
  },
  {
    id: "waxing",
    label: "Waxing",
    items: [
      { name: "Brazilian Wax", price: "from $50", duration: "30+ min", note: "2 options" },
      { name: "Bikini Wax", price: "from $40", duration: "35+ min", note: "2 options" },
      { name: "Underarm Wax", price: "$25", duration: "30 min" },
      { name: "Upper Lip Wax", price: "$10", duration: "15 min" },
    ],
  },
];
