"use client";
import Image from "next/image";
import { site } from "@/content/site";
import { categories } from "@/content/collaborations";
import { media } from "@/content/media";
import { openInquiry } from "@/lib/prefill";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { ArrowIcon, Sparkle } from "./Icons";

const opportunities = [
  "Sponsored Instagram Reels",
  "Instagram Story promotions",
  "Feed posts & carousels",
  "Product features & try-ons",
  "Local business spotlights",
  "Event appearances & coverage",
];

export default function MediaKit() {
  return (
    <section id="media-kit" aria-labelledby="mediakit-title" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              id="mediakit-title"
              number="05"
              kicker="Media Kit"
              title={
                <>
                  Brand Partnership <span className="italic text-champagne">Information</span>
                </>
              }
              intro="Everything a potential partner needs to know — with full details, availability, and the complete media kit shared on request."
            />
            <Reveal delay={0.1} className="mt-10 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="btn-solid"
                onClick={() =>
                  openInquiry({
                    type: "Brand Partnership",
                    message: "Hi Betxy! I'd like to request your media kit. A little about our brand: ",
                  })
                }
              >
                Request Media Kit <ArrowIcon />
              </button>
              {site.mediaKitPdf && (
                <a href={site.mediaKitPdf} download className="btn-line">
                  Download PDF
                </a>
              )}
            </Reveal>
          </div>
          <Reveal delay={0.15} className="relative hidden aspect-[5/4] overflow-hidden lg:col-span-5 lg:block">
            <Image
              src={media.sunsetLounge}
              alt="Betxy lounging on a white daybed at golden hour"
              fill
              placeholder="blur"
              sizes="40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-ivory/10" />
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px border border-ivory/10 bg-ivory/10 md:grid-cols-2 lg:grid-cols-3">
          <Block title="Creator Introduction" n="i">
            <p>
              Betxy w/ an X is a {site.identity} entrepreneur and digital creator sharing lifestyle, fashion, travel and
              everyday moments with a voice that&apos;s confident, authentic and culturally proud.
            </p>
          </Block>

          <Block title="Instagram Audience Overview" n="ii">
            <p className="font-serif text-5xl font-light text-champagne">{site.followers.instagram}</p>
            <p className="mt-1">followers on Instagram (@notbetxy)</p>
            <p className="mt-3 text-xs text-smoke">Supplied snapshot, {site.followers.asOf}. Detailed audience insights are shared directly with partners on request.</p>
          </Block>

          <Block title="Content Categories" n="iii">
            <ul className="flex flex-wrap gap-2">
              {[...categories, "Travel"].map((c) => (
                <li key={c} className="border border-ivory/15 px-3 py-1.5 text-[10.5px] uppercase tracking-[0.2em] text-ivory/80">
                  {c}
                </li>
              ))}
            </ul>
          </Block>

          <Block title="Collaboration Opportunities" n="iv">
            <ul className="space-y-2">
              {opportunities.map((o) => (
                <li key={o} className="flex items-center gap-3">
                  <Sparkle className="h-2 w-2 shrink-0 text-champagne" /> {o}
                </li>
              ))}
            </ul>
          </Block>

          <Block title="Featured Past Work" n="v">
            <p>Selected collaborations are curated in The Collaboration Edit.</p>
            <a href="#portfolio" className="link-underline mt-4 inline-flex items-center gap-2 text-[10.5px] uppercase tracking-[0.24em] text-ivory">
              View the Edit <ArrowIcon />
            </a>
          </Block>

          <Block title="Contact" n="vi">
            {site.contactEmail ? (
              <a href={`mailto:${site.contactEmail}`} className="link-underline text-ivory">{site.contactEmail}</a>
            ) : (
              <p>Use the inquiry form below, or DM on Instagram for promos & collabs. 💌</p>
            )}
            <a href="#contact" className="link-underline mt-4 inline-flex items-center gap-2 text-[10.5px] uppercase tracking-[0.24em] text-ivory">
              Send an inquiry <ArrowIcon />
            </a>
          </Block>
        </div>
      </div>
    </section>
  );
}

function Block({ title, n, children }: { title: string; n: string; children: React.ReactNode }) {
  return (
    <Reveal className="bg-ink p-8 md:p-10">
      <div className="flex items-baseline justify-between">
        <h3 className="eyebrow">{title}</h3>
        <span className="font-serif text-sm italic text-ivory/30">{n}.</span>
      </div>
      <div className="mt-6 text-[15px] leading-relaxed text-beige/80">{children}</div>
    </Reveal>
  );
}
