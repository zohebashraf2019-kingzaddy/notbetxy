import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { media } from "@/content/media";
import { beautyBar } from "@/content/beautyBar";
import SocialLinks, { socialLinks } from "./SocialLinks";

const links = [
  { label: "Home", href: "/#top" },
  { label: "About", href: "/#about" },
  { label: "Collaborations", href: "/#collaborations" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Beauty Bar", href: "/#beauty-bar" },
  { label: "Media Kit", href: "/#media-kit" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-ivory/20 bg-ink pt-20">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Image src={media.logoInk} alt="NOTBETXY logo" className="h-auto w-56" sizes="224px" />
            <p className="mt-8 font-serif text-3xl">{site.motto}</p>
            <p className="mt-2 text-[12px] uppercase tracking-[0.2em] text-champagne">Authenticity. Creativity. Connection.</p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3 lg:col-span-4">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="link-underline w-fit text-sm text-ivory/80 hover:text-ivory">{l.label}</Link>
            ))}
            {socialLinks.map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="link-underline w-fit text-sm text-ivory/80 hover:text-ivory">
                {s.label === "YouTube" ? `YouTube · ${s.handle}` : s.label}
              </a>
            ))}
            <Link href="/privacy" className="link-underline w-fit text-sm text-ivory/80 hover:text-ivory">Privacy Policy</Link>
          </nav>

          <div className="lg:col-span-3 lg:text-right">
            <p className="eyebrow">Follow along</p>
            <SocialLinks className="mt-5 lg:justify-end" />
            {beautyBar.enabled && (
              <div className="mt-8">
                <p className="eyebrow">{beautyBar.name}</p>
                <p className="mt-2 text-sm text-beige">{beautyBar.address.line1}, {beautyBar.address.line2}</p>
                <div className="mt-3 flex gap-4 text-sm lg:justify-end">
                  <a href={beautyBar.links.book} target="_blank" rel="noopener noreferrer" className="link-underline text-champagne">Book Now</a>
                  <a href={beautyBar.links.instagram} target="_blank" rel="noopener noreferrer" className="link-underline text-ivory/80">{beautyBar.instagramHandle}</a>
                </div>
              </div>
            )}
          </div>
        </div>

        <p aria-hidden className="mt-20 select-none text-center font-serif text-[21vw] font-light leading-[0.75] tracking-tight text-ivory/[0.04] lg:text-[17vw]">
          NOTBETXY
        </p>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-ivory/20 py-8 text-sm text-smoke md:flex-row">
          <p>© 2026 NOTBETXY. All Rights Reserved.</p>
          <p>
            Website Designed &amp; Managed by{" "}
            <a href={site.agency.url} target="_blank" rel="noopener noreferrer" className="text-ivory/80 underline decoration-champagne/50 underline-offset-4 hover:text-champagne">
              {site.agency.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
