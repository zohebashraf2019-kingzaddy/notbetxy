"use client";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { beautyBar, beautyMenu } from "@/content/beautyBar";
import { beautyBarMedia } from "@/content/media";
import SectionHeading from "./SectionHeading";
import Reveal, { ease } from "./Reveal";
import { ArrowUpRight, InstagramIcon, Sparkle } from "./Icons";

export default function BeautyBar() {
  const [tab, setTab] = useState(beautyMenu[0].id);
  const active = beautyMenu.find((c) => c.id === tab) ?? beautyMenu[0];
  if (!beautyBar.enabled) return null;

  return (
    <section id="beauty-bar" aria-labelledby="beautybar-title" className="relative border-t border-ivory/20 bg-noir py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal className="mb-8">
              <Image src={beautyBarMedia.logo} alt="Betxy's Beauty Bar logo" className="h-20 w-20 md:h-24 md:w-24" sizes="96px" />
            </Reveal>
            <SectionHeading
              id="beautybar-title"
              number="05"
              kicker="The Business — Owner & Esthetician"
              title={
                <>
                  Betxy&apos;s <span className="italic text-champagne">Beauty Bar</span>
                </>
              }
              intro={beautyBar.intro}
            />
          </div>
          <Reveal delay={0.1} className="lg:col-span-4">
            <ul className="flex flex-wrap gap-2 lg:justify-end">
              {["Licensed Esthetician", "Midtown Reno", beautyBar.languages].map((t) => (
                <li key={t} className="flex items-center gap-2 rounded-full border border-ivory/30 bg-ink px-4 py-2 text-[13px] text-ivory">
                  <Sparkle className="h-2 w-2 text-champagne" /> {t}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a href={beautyBar.links.book} target="_blank" rel="noopener noreferrer" className="btn-solid">
                Book Now <ArrowUpRight />
              </a>
              <a href={beautyBar.links.instagram} target="_blank" rel="noopener noreferrer" className="btn-line">
                <InstagramIcon /> {beautyBar.instagramHandle}
              </a>
            </div>
          </Reveal>
        </div>

        {/* Before/after + menu */}
        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <figure className="relative overflow-hidden bg-coal">
              <Image
                src={beautyBarMedia.beforeAfter}
                alt="Before and after of a wispy volume lash extension set"
                placeholder="blur"
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="h-auto w-full"
              />
              <figcaption className="flex items-center justify-between bg-ink px-5 py-4 text-[13px]">
                <span className="font-serif text-lg italic">Wispy Volume — before &amp; after</span>
                <span className="text-sand">Signature set</span>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="border border-ivory/20 bg-ink p-6 sm:p-9">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-serif text-3xl">The Menu</h3>
                <a href={beautyBar.links.services} target="_blank" rel="noopener noreferrer" className="link-underline text-[13px] text-champagne">
                  Full menu &amp; booking
                </a>
              </div>

              <div role="group" aria-label="Service categories" className="-mx-6 mt-6 flex gap-2 overflow-x-auto px-6 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
                {beautyMenu.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    aria-pressed={tab === c.id}
                    onClick={() => setTab(c.id)}
                    className={`shrink-0 rounded-full border px-4 py-2 text-[13px] transition ${
                      tab === c.id ? "border-champagne bg-champagne text-ink" : "border-ivory/30 text-ivory hover:border-champagne hover:text-champagne"
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.35, ease }}
                  className="mt-6"
                >
                  {active.blurb && <p className="mb-2 text-sm text-sand">{active.blurb}</p>}
                  <ul className="divide-y divide-ivory/20">
                    {active.items.map((it) => (
                      <li key={it.name} className="flex items-start justify-between gap-6 py-4">
                        <div>
                          <p className="flex flex-wrap items-center gap-2 text-[16px] font-medium text-ivory">
                            {it.name}
                            {it.note === "Signature" && (
                              <span className="rounded-full bg-champagne px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-[0.12em] text-ink">Signature</span>
                            )}
                          </p>
                          <p className="mt-1 text-sm text-smoke">
                            {it.duration}
                            {it.note && it.note !== "Signature" ? ` · ${it.note}` : ""}
                            {it.deposit ? ` · ${it.deposit}` : ""}
                          </p>
                        </div>
                        <p className="shrink-0 font-serif text-2xl text-champagne">{it.price}</p>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>

              <div className="mt-6 flex flex-col gap-4 border-t border-ivory/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-smoke">
                  Menu as of {beautyBar.menuAsOf}. Current prices &amp; availability are on the booking site.
                </p>
                <a href={beautyBar.links.book} target="_blank" rel="noopener noreferrer" className="btn-solid shrink-0">
                  Book Now <ArrowUpRight />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Lash gallery */}
        <Reveal className="mt-20">
          <div className="flex items-end justify-between gap-4">
            <h3 className="font-serif text-3xl md:text-4xl">
              The Lash <span className="italic text-champagne">Gallery</span>
            </h3>
            <a href={beautyBar.links.instagram} target="_blank" rel="noopener noreferrer" className="link-underline hidden text-[13px] text-champagne sm:inline-block">
              More on {beautyBar.instagramHandle}
            </a>
          </div>
          <ul className="-mx-5 mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-5 md:overflow-visible md:px-0">
            {beautyBarMedia.lashes.map((src, i) => (
              <li key={i} className={`w-[62vw] shrink-0 snap-start sm:w-[40vw] md:w-auto ${i >= 10 ? "md:hidden" : ""}`}>
                <a href={beautyBar.links.instagram} target="_blank" rel="noopener noreferrer" className="group block overflow-hidden bg-coal">
                  <Image
                    src={src}
                    alt={`Lash extension set by Betxy's Beauty Bar, photo ${i + 1}`}
                    placeholder="blur"
                    sizes="(min-width: 768px) 19vw, 62vw"
                    className="aspect-[4/5] h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Video + visit info */}
        <div className="mt-20 grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <figure className="mx-auto max-w-sm overflow-hidden border border-ivory/20 bg-ink">
              <video
                src={beautyBarMedia.thankYouVideo.src}
                poster={beautyBarMedia.thankYouVideo.poster}
                controls
                playsInline
                preload="none"
                className="aspect-[9/16] w-full bg-coal object-cover"
                aria-label="Video message from Betxy to her Beauty Bar clients"
              />
              <figcaption className="px-5 py-4">
                <p className="eyebrow">A note from Betxy</p>
                <p className="mt-2 font-serif text-xl italic">&ldquo;Thank you for the last 4.5 years 🤍&rdquo;</p>
              </figcaption>
            </figure>
          </Reveal>

          <div className="grid gap-px border border-ivory/20 bg-ivory/20 sm:grid-cols-2 lg:col-span-8">
            <Reveal className="bg-ink p-8">
              <h3 className="eyebrow">Visit the Studio</h3>
              <p className="mt-5 font-serif text-2xl leading-snug">
                {beautyBar.address.line1}
                <br />
                {beautyBar.address.line2}
              </p>
              <p className="mt-3 text-[15px] text-beige">
                Inside{" "}
                <a href={beautyBar.studio.instagram} target="_blank" rel="noopener noreferrer" className="underline decoration-champagne underline-offset-4 hover:text-champagne">
                  {beautyBar.studio.name}
                </a>
                , Midtown Reno
              </p>
              <a href={beautyBar.mapUrl} target="_blank" rel="noopener noreferrer" className="link-underline mt-5 inline-flex items-center gap-2 text-[13px] text-champagne">
                Get directions <ArrowUpRight />
              </a>
            </Reveal>

            <Reveal delay={0.05} className="bg-ink p-8">
              <h3 className="eyebrow">Business Hours</h3>
              <dl className="mt-5 space-y-2 text-[15px]">
                {beautyBar.hours.map((h) => (
                  <div key={h.day} className="flex justify-between gap-4">
                    <dt className="text-beige">{h.day}</dt>
                    <dd className={h.time === "Closed" ? "text-smoke" : "font-medium text-ivory"}>{h.time}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.1} className="bg-ink p-8 sm:col-span-2">
              <h3 className="eyebrow">Booking &amp; Cancellation Policy</h3>
              <ul className="mt-5 grid gap-3 text-[15px] leading-relaxed text-beige md:grid-cols-2">
                {beautyBar.policy.map((p) => (
                  <li key={p} className="flex gap-3">
                    <Sparkle className="mt-2 h-2 w-2 shrink-0 text-champagne" /> {p}
                  </li>
                ))}
              </ul>
              <a href={beautyBar.links.policies} target="_blank" rel="noopener noreferrer" className="link-underline mt-6 inline-flex items-center gap-2 text-[13px] text-champagne">
                Read the full policy <ArrowUpRight />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
