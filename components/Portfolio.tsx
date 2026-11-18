"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { categories, collaborations, type Category, type Collaboration } from "@/content/collaborations";
import { media } from "@/content/media";
import { openInquiry } from "@/lib/prefill";
import SectionHeading from "./SectionHeading";
import { ArrowIcon, ArrowUpRight } from "./Icons";
import { ease } from "./Reveal";

type Filter = "All" | Category;
const filters: Filter[] = ["All", ...categories];

export default function Portfolio() {
  const [active, setActive] = useState<Filter>("All");
  const items = useMemo(
    () => (active === "All" ? collaborations : collaborations.filter((c) => c.category === active)),
    [active]
  );

  return (
    <section id="portfolio" aria-labelledby="portfolio-title" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="portfolio-title"
            number="03"
            kicker="Portfolio"
            title={
              <>
                The Collaboration <span className="italic text-champagne">Edit</span>
              </>
            }
            intro="A curated look at brand partnerships and promotional work — new features are added as collaborations go live."
          />

          <div role="group" aria-label="Filter collaborations by category" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 lg:mx-0 lg:flex-wrap lg:justify-end lg:px-0">
            {filters.map((f) => (
              <button
                key={f}
                aria-pressed={active === f}
                onClick={() => setActive(f)}
                className={`relative shrink-0 border px-5 py-2.5 text-[12px] uppercase tracking-[0.2em] transition-colors duration-500 ${
                  active === f ? "border-champagne text-ink" : "border-ivory/20 text-ivory/80 hover:border-ivory/40 hover:text-ivory"
                }`}
              >
                {active === f && (
                  <motion.span layoutId="filter-pill" className="absolute inset-0 bg-champagne" transition={{ duration: 0.5, ease }} />
                )}
                <span className="relative">{f}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.ul layout className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {items.map((c, i) => (
              <motion.li
                key={c.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.6, delay: i * 0.05, ease }}
                className={i % 3 === 1 ? "lg:mt-10" : ""}
              >
                {c.placeholder ? <PlaceholderCard c={c} /> : <ProjectCard c={c} />}
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        {items.length === 0 && (
          <p className="mt-14 text-center font-serif text-2xl italic text-beige">New {active.toLowerCase()} features coming soon.</p>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ c }: { c: Collaboration }) {
  const Inner = (
    <article className="group relative aspect-[4/5] overflow-hidden bg-coal">
      {c.image && (
        <Image
          src={c.image}
          alt={`${c.brand} — ${c.title}`}
          fill
          sizes="(min-width: 1024px) 31vw, (min-width: 640px) 48vw, 100vw"
          className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.06]"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6">
        <span className="bg-ink/60 px-3 py-1.5 text-[12px] uppercase tracking-[0.2em] text-champagne backdrop-blur">{c.category}</span>
        {c.logo && <Image src={c.logo} alt={`${c.brand} logo`} width={72} height={32} className="h-8 w-auto object-contain" />}
      </div>
      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="eyebrow">{c.brand}{c.format ? ` · ${c.format}` : ""}</p>
        <h3 className="mt-2 font-serif text-3xl leading-tight">{c.title}</h3>
        <p className="mt-3 max-h-0 overflow-hidden text-sm leading-relaxed text-beige opacity-0 transition-all duration-700 group-hover:max-h-32 group-hover:opacity-100">
          {c.description}
        </p>
        {c.postUrl && (
          <span className="mt-4 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] text-ivory/80">
            View on Instagram <ArrowUpRight />
          </span>
        )}
      </div>
    </article>
  );
  return c.postUrl ? (
    <a href={c.postUrl} target="_blank" rel="noopener noreferrer" aria-label={`${c.brand}: ${c.title} on Instagram (opens in new tab)`}>
      {Inner}
    </a>
  ) : (
    Inner
  );
}

function PlaceholderCard({ c }: { c: Collaboration }) {
  return (
    <article className="group relative flex aspect-[4/5] flex-col justify-between overflow-hidden border border-ivory/20 bg-gradient-to-br from-coal via-noir to-ink p-7">
      <Image
        src={media.monogramInk}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-8 top-1/2 w-[70%] -translate-y-1/2 opacity-[0.05] transition duration-[1.2s] group-hover:scale-110 group-hover:opacity-[0.09]"
      />
      <div className="relative flex items-center justify-between">
        <span className="border border-champagne/40 px-3 py-1.5 text-[12px] uppercase tracking-[0.2em] text-champagne">{c.category}</span>
        <span className="font-serif text-xs italic text-ivory/80">Reserved</span>
      </div>
      <div className="relative">
        <p className="eyebrow text-sand">{c.format}</p>
        <h3 className="mt-3 font-serif text-[2.1rem] leading-[1.05]">
          {c.title}
          <span className="block italic text-champagne">— {c.brand}</span>
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-beige">{c.description}</p>
        <button
          type="button"
          onClick={() => openInquiry({ type: "Brand Partnership", message: `I'd love to be featured in The Collaboration Edit (${c.category}). ` })}
          className="mt-6 inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.2em] text-ivory transition hover:text-champagne"
        >
          Feature your brand <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1.5" />
        </button>
      </div>
    </article>
  );
}
