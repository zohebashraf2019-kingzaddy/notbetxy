import Image from "next/image";
import { site } from "@/content/site";
import { hostedReels, lensGallery } from "@/content/media";
import { featuredReels } from "@/content/collaborations";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import ReelVideo from "./ReelVideo";
import { ArrowUpRight, InstagramIcon, LinkIcon, TikTokIcon, YouTubeIcon } from "./Icons";

const platforms = [
  { label: "Instagram", handle: "@notbetxy", href: site.socials.instagram, Icon: InstagramIcon },
  { label: "TikTok", handle: "@notbetxy", href: site.socials.tiktok, Icon: TikTokIcon },
  { label: "YouTube", handle: "@notbetxy", href: site.socials.youtube, Icon: YouTubeIcon },
  { label: "YouTube", handle: "Lead With Delusion", href: site.socials.leadWithDelusion, Icon: YouTubeIcon },
  { label: "Linktree", handle: "All links", href: site.socials.linktree, Icon: LinkIcon },
];

const embedUrl = (url: string) => {
  const clean = url.split("?")[0].replace(/\/?$/, "/");
  return `${clean}embed`;
};

export default function Social() {
  return (
    <section id="lens" aria-labelledby="lens-title" className="relative border-t border-ivory/10 bg-noir py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          {/* Left rail */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                id="lens-title"
                number="04"
                kicker="Social & Community"
                title={
                  <>
                    Life Through <span className="italic text-champagne">My Lens</span>
                  </>
                }
              />

              <Reveal delay={0.1} className="mt-10 border-y border-ivory/10 py-8">
                <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" className="group block">
                  <span className="font-serif text-5xl italic transition group-hover:text-champagne md:text-6xl">@notbetxy</span>
                </a>
                <div className="mt-6 flex items-end gap-4">
                  <span className="font-serif text-6xl font-light leading-none text-champagne">{site.followers.instagram}</span>
                  <span className="pb-1 text-[11px] uppercase leading-relaxed tracking-[0.2em] text-ivory/70">
                    Instagram
                    <br />
                    followers
                  </span>
                </div>
                <p className="mt-3 text-xs text-smoke">
                  Snapshot as of {site.followers.asOf} — not a live count.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <ul className="mt-6 divide-y divide-ivory/10">
                  {platforms.map(({ label, handle, href, Icon }) => (
                    <li key={href}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between py-4 text-sm"
                      >
                        <span className="flex items-center gap-4">
                          <Icon className="h-4 w-4 text-champagne" />
                          <span className="text-[11px] uppercase tracking-[0.24em] text-ivory/60">{label}</span>
                          <span className="text-ivory/90">{handle}</span>
                        </span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-ivory/40 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-champagne" />
                      </a>
                    </li>
                  ))}
                </ul>
                <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" className="btn-solid mt-8 w-full">
                  <InstagramIcon /> Follow @NOTBETXY
                </a>
              </Reveal>
            </div>
          </div>

          {/* Gallery */}
          <div className="lg:col-span-8">
            <div className="columns-2 gap-4 md:columns-3 [&>*]:mb-4">
              {hostedReels.map((r) => (
                <Reveal key={r.src} className="break-inside-avoid">
                  <ReelVideo {...r} href={site.socials.instagramReels} />
                </Reveal>
              ))}
              {lensGallery.map((g, i) => (
                <Reveal key={i} delay={(i % 3) * 0.08} className="break-inside-avoid">
                  <a
                    href={site.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block overflow-hidden bg-coal"
                    aria-label={`${g.alt} — view on Instagram (opens in new tab)`}
                  >
                    <Image
                      src={g.src}
                      alt={g.alt}
                      placeholder="blur"
                      sizes="(min-width: 1024px) 22vw, (min-width: 768px) 30vw, 48vw"
                      className="h-auto w-full transition-transform duration-[1.4s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.05]"
                    />
                    <span className="absolute inset-0 bg-ink/0 transition-colors duration-700 group-hover:bg-ink/40" />
                    <span className="absolute bottom-3 left-3 bg-ink/60 px-2.5 py-1 text-[9.5px] uppercase tracking-[0.22em] text-ivory/90 backdrop-blur">
                      {g.tag}
                    </span>
                    <InstagramIcon className="absolute right-3 top-3 h-4 w-4 text-ivory opacity-0 transition duration-500 group-hover:opacity-100" />
                  </a>
                </Reveal>
              ))}
            </div>

            {featuredReels.length > 0 && (
              <div className="mt-10">
                <p className="eyebrow">Featured on Instagram</p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {featuredReels.map((url) => (
                    <iframe
                      key={url}
                      src={embedUrl(url)}
                      title="Instagram Reel by @notbetxy"
                      loading="lazy"
                      allow="encrypted-media"
                      className="aspect-[9/16] w-full border border-ivory/10 bg-coal"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
