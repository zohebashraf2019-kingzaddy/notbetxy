import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { media } from "@/content/media";
import { InstagramIcon, TikTokIcon, YouTubeIcon } from "./Icons";

const links = [
  { label: "Home", href: "/#top" },
  { label: "About", href: "/#about" },
  { label: "Collaborations", href: "/#collaborations" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Media Kit", href: "/#media-kit" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-ivory/10 bg-ink pt-20">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Image src={media.logo} alt="NOTBETXY logo" className="h-auto w-56" sizes="224px" />
            <p className="mt-8 font-serif text-3xl">{site.motto}</p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.3em] text-champagne">Authenticity. Creativity. Connection.</p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3 lg:col-span-4">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="link-underline w-fit text-sm text-ivory/70 hover:text-ivory">{l.label}</Link>
            ))}
            <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" className="link-underline w-fit text-sm text-ivory/70 hover:text-ivory">Instagram</a>
            <Link href="/privacy" className="link-underline w-fit text-sm text-ivory/70 hover:text-ivory">Privacy Policy</Link>
          </nav>

          <div className="lg:col-span-3 lg:text-right">
            <p className="eyebrow">Follow along</p>
            <div className="mt-5 flex gap-3 lg:justify-end">
              {[
                { href: site.socials.instagram, label: "Instagram", Icon: InstagramIcon },
                { href: site.socials.tiktok, label: "TikTok", Icon: TikTokIcon },
                { href: site.socials.youtube, label: "YouTube", Icon: YouTubeIcon },
              ].map(({ href, label, Icon }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label} (opens in new tab)`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/15 text-ivory/80 transition hover:border-champagne hover:text-champagne">
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <p aria-hidden className="mt-20 select-none text-center font-serif text-[21vw] font-light leading-[0.75] tracking-tight text-ivory/[0.04] lg:text-[17vw]">
          NOTBETXY
        </p>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-ivory/10 py-8 text-xs text-smoke md:flex-row">
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
