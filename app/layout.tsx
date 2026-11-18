import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost, Pinyon_Script } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});
const sans = Jost({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-sans", display: "swap" });
const script = Pinyon_Script({ subsets: ["latin"], weight: "400", variable: "--font-script", display: "swap" });

const title = "NOTBETXY — Betxy w/ an X | Latina Creator & Brand Collaborations";
const description =
  "Betxy w/ an X (@notbetxy) is a Latina ✨ Mexicana entrepreneur and digital creator partnering with brands and local businesses on authentic Instagram content. More Than Influence. It's About Connection.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: "%s | NOTBETXY" },
  description,
  applicationName: "NOTBETXY",
  keywords: [
    "NOTBETXY", "Betxy w/ an X", "notbetxy", "Latina influencer", "Latina content creator",
    "Mexicana creator", "brand collaborations", "influencer marketing", "Instagram Reels promotion",
    "local business promotion", "UGC creator",
  ],
  authors: [{ name: "Betxy w/ an X" }],
  creator: "Betxy w/ an X",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "NOTBETXY",
    title: "NOTBETXY — More Than Influence. It's About Connection.",
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "NOTBETXY — Betxy w/ an X",
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0c0a09",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Betxy w/ an X",
  alternateName: ["NOTBETXY", "notbetxy"],
  url: site.url,
  jobTitle: "Entrepreneur & Digital Creator",
  description,
  sameAs: [site.socials.instagram, site.socials.tiktok, site.socials.youtube, site.socials.linktree],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${script.variable}`}>
      <body className="grain">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-champagne focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
