import Image from "next/image";
import { site } from "@/content/site";
import { hostedReels, lensGallery } from "@/content/media";
import { featuredReels } from "@/content/collaborations";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import ReelVideo from "./ReelVideo";
import { InstagramIcon } from "./Icons";
import SocialLinks from "./SocialLinks";



const embedUrl = (url: string) => {
  const clean = url.split("?")[0].replace(/\/?$/, "/");
  return `${clean}embed`;
};

export default function Social() {
  return (
    <section id="lens" aria-labelledby="lens-title" className="relative border-t border-ivory/20 bg-noir py-24 md:py-36">
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

              <Reveal delay={0.1} className="mt-10 border-y border-ivory/20 py-8">
                <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" className="group block">
                  <span className="font-serif text-5xl italic transition group-hover:text-champagne md:text-6xl">@notbetxy</span>
                </a>
                <div className="mt-6 flex items-end gap-4">
                  <span className="font-serif text-6xl font-light leading-none text-champagne">{site.followers.instagram}</span>
                  <span className="pb-1 text-[12px] uppercase leading-relaxed tracking-[0.2em] text-ivory/80">
                    Instagram
                    <br />
                    followers
                  </span>
                </div>
                <p className="mt-3 text-sm text-smoke">
                  Snapshot as of {site.followers.asOf} — not a live count.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <SocialLinks variant="list" className="mt-6" />
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
                    <span className="absolute bottom-3 left-3 bg-ink/60 px-2.5 py-1 text-[12px] uppercase tracking-[0.22em] text-ivory/90 backdrop-blur">
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
                      className="aspect-[9/16] w-full border border-ivory/20 bg-coal"
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
