import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How NOTBETXY handles information submitted through the collaboration inquiry form.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <main id="main" className="mx-auto max-w-3xl px-5 pb-24 pt-32 md:px-10">
        <Link href="/" className="eyebrow link-underline">← Back to NOTBETXY</Link>
        <h1 className="display mt-8 text-5xl md:text-7xl">Privacy <span className="italic text-champagne">Policy</span></h1>
        <p className="mt-4 text-sm text-smoke">Last updated: November 2026</p>

        <div className="mt-12 space-y-10 text-[15.5px] leading-[1.85] text-beige/85 [&_h2]:mb-3 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-ivory">
          <section>
            <h2>Overview</h2>
            <p>This website is operated by NOTBETXY (Betxy w/ an X). We respect your privacy and collect only the information needed to respond to collaboration inquiries.</p>
          </section>
          <section>
            <h2>Information we collect</h2>
            <p>When you submit the collaboration inquiry form, we receive the details you provide: your name, business or brand name, email address, optional phone number, Instagram handle, optional website, collaboration type, optional budget range, preferred date, and project description.</p>
          </section>
          <section>
            <h2>How we use it</h2>
            <p>Your information is used solely to review and respond to your inquiry and to discuss a potential collaboration. We do not sell, rent, or share your information for marketing purposes.</p>
          </section>
          <section>
            <h2>Service providers</h2>
            <p>Inquiries are delivered by email through a secure transactional email provider, and the website is hosted on Vercel. These providers process data only to deliver the service.</p>
          </section>
          <section>
            <h2>Retention</h2>
            <p>Inquiry emails are kept only as long as needed to manage the conversation and any resulting collaboration. You may ask for your information to be deleted at any time.</p>
          </section>
          <section>
            <h2>Cookies & analytics</h2>
            <p>This site does not use advertising cookies. If privacy-friendly analytics are added in the future, this policy will be updated.</p>
          </section>
          <section>
            <h2>Third-party links</h2>
            <p>This site links to Instagram, TikTok, YouTube, and Linktree. Those platforms have their own privacy policies.</p>
          </section>
          <section>
            <h2>Contact</h2>
            <p>
              For privacy questions or deletion requests, {site.contactEmail ? <>email <a className="underline" href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> or </> : null}
              send a DM to <a className="underline" href={site.socials.instagram} target="_blank" rel="noopener noreferrer">@notbetxy</a> on Instagram.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
