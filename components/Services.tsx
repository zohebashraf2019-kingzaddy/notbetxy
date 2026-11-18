"use client";
import { motion } from "framer-motion";
import { services } from "@/content/site";
import { openInquiry } from "@/lib/prefill";
import SectionHeading from "./SectionHeading";
import { ArrowIcon } from "./Icons";
import Reveal, { ease } from "./Reveal";

export default function Services() {
  return (
    <section id="collaborations" aria-labelledby="services-title" className="relative bg-ivory py-24 text-ink md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <SectionHeading
              id="services-title"
              tone="light"
              number="02"
              kicker="Work With Me"
              title={
                <>
                  Let&apos;s Create Something <span className="italic text-champagne-deep">Worth Sharing</span>
                </>
              }
              intro="Your brand has a story. Let's make sure people see it."
            />
          </div>
          <Reveal delay={0.15} className="max-w-xs text-sm leading-relaxed text-ink/60 lg:text-right">
            Every collaboration is tailored. Final scope, availability, and pricing are discussed directly with Betxy.
          </Reveal>
        </div>

        <ul className="mt-16 grid border-l border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.1, ease }}
              className="group relative border-b border-r border-ink/15"
            >
              <button
                type="button"
                onClick={() => openInquiry({ type: s.inquiryType })}
                className="relative flex h-full min-h-[300px] w-full flex-col overflow-hidden p-8 text-left md:p-10"
                aria-label={`${s.title} — start an inquiry`}
              >
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-y-100 group-focus-visible:scale-y-100" />
                <span className="relative flex items-start justify-between">
                  <span className="font-serif text-5xl font-light italic text-champagne-deep transition-colors duration-700 group-hover:text-champagne">
                    {s.numeral}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-ink/40 transition-colors duration-700 group-hover:text-ivory/40">
                    0{i + 1} / 06
                  </span>
                </span>
                <span className="relative mt-auto block pt-14">
                  <span className="block font-serif text-3xl leading-tight transition-colors duration-700 group-hover:text-ivory">
                    {s.title}
                  </span>
                  <span className="mt-4 block text-[14.5px] leading-relaxed text-ink/65 transition-colors duration-700 group-hover:text-beige/80">
                    {s.body}
                  </span>
                  <span className="mt-7 flex items-center gap-3 text-[10.5px] uppercase tracking-[0.28em] text-ink transition-colors duration-700 group-hover:text-champagne">
                    Inquire <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1.5" />
                  </span>
                </span>
              </button>
            </motion.li>
          ))}
        </ul>

        <Reveal className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-ink/15 pt-10 sm:flex-row sm:items-center">
          <p className="font-serif text-2xl italic md:text-3xl">Have a brand with a story to tell?</p>
          <a href="#contact" className="btn bg-ink text-ivory hover:bg-champagne-deep">
            Start an Inquiry <ArrowIcon />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
