"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { site } from "@/content/site";
import { media } from "@/content/media";
import { InstagramIcon, Sparkle } from "./Icons";
import { ease } from "./Reveal";

const letters = "NOTBETXY".split("");

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.14]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="top" ref={ref} aria-labelledby="hero-title" className="relative min-h-[100svh] overflow-hidden bg-ink">
      {/* Portrait */}
      <motion.div
        style={{ y: imgY }}
        className="absolute inset-0 lg:left-auto lg:right-0 lg:w-[47%]"
      >
        <motion.div
          style={{ scale: imgScale }}
          initial={{ opacity: 0, clipPath: "inset(12% 0 0 0)" }}
          animate={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
          transition={{ duration: 1.6, ease }}
          className="relative h-full w-full"
        >
          <Image
            src={media.heroRed}
            alt="Betxy in a red off-shoulder dress with a red flower in her hair"
            fill
            priority
            placeholder="blur"
            sizes="(min-width: 1024px) 47vw, 100vw"
            className="object-cover object-[50%_20%]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10 lg:bg-gradient-to-r lg:from-ink lg:via-ink/20 lg:to-transparent" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/80 to-transparent" />
        <p className="absolute bottom-8 right-6 hidden font-serif text-xs italic text-ivory/60 lg:block">
          Fig. 01 — Betxy w/ an X
        </p>
      </motion.div>

      {/* Copy */}
      <motion.div
        style={{ y: textY, opacity: fade }}
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-24 pt-32 md:px-10 lg:justify-center lg:pb-16"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease }}
          className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-1"
        >
          <span>Latina</span><Sparkle className="h-2.5 w-2.5" /><span>Mexicana</span>
          <span className="text-ivory/30">/</span><span>Entrepreneur</span>
          <span className="text-ivory/30">/</span><span>Digital Creator</span>
        </motion.p>

        <h1 id="hero-title" className="mt-5 font-serif font-light leading-[0.82] tracking-[-0.02em]">
          <span className="sr-only">NOTBETXY</span>
          <span aria-hidden className="flex text-[15.5vw] lg:text-[10.6vw]">
            {letters.map((l, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: "60%" }}
                animate={{ opacity: 1, y: "0%" }}
                transition={{ delay: 0.35 + i * 0.06, duration: 1.1, ease }}
                className={i === 6 ? "italic text-champagne" : ""}
              >
                {l}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.0, duration: 1, ease }}
          className="-mt-1 font-script text-[2.6rem] leading-none text-champagne md:text-6xl"
        >
          Betxy w/ an X
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1, ease }}
          className="mt-8 max-w-xl"
        >
          <p className="font-serif text-2xl italic leading-snug text-ivory md:text-3xl">{site.tagline}</p>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-beige/80">{site.description}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#collaborations" className="btn-solid">Work With Me</a>
            <a href="#portfolio" className="btn-line">Explore My Content</a>
            <a href="#contact" className="btn-line sm:border-transparent sm:px-2 sm:hover:border-transparent">
              Let&apos;s Collaborate <span aria-hidden>→</span>
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Instagram vertical link */}
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        href={site.socials.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute left-5 top-1/2 z-20 hidden -translate-y-1/2 items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-ivory/60 transition hover:text-champagne xl:flex"
        style={{ writingMode: "vertical-rl" }}
        aria-label="Instagram @notbetxy (opens in new tab)"
      >
        <InstagramIcon className="h-3.5 w-3.5 rotate-90" /> @notbetxy
      </motion.a>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3 text-[9px] uppercase tracking-[0.35em] text-ivory/60"
      >
        <span className="relative h-10 w-px overflow-hidden bg-ivory/15">
          <span className="absolute left-0 top-0 h-3 w-px animate-scrolldot bg-champagne" />
        </span>
        Scroll
      </a>
    </section>
  );
}
