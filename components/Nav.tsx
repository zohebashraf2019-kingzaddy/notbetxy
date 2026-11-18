"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, site } from "@/content/site";
import { media } from "@/content/media";
import { InstagramIcon } from "./Icons";
import { ease } from "./Reveal";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled && !open ? "border-b border-ivory/10 bg-ink/75 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 md:px-10">
        <a href="#top" className="flex items-center gap-3" aria-label="NOTBETXY home" onClick={() => setOpen(false)}>
          <Image src={media.monogram} alt="" className="h-9 w-auto" priority />
          <span className="font-serif text-lg tracking-[0.3em]">NOTBETXY</span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {nav.slice(1, 5).map((l) => (
            <li key={l.href}>
              <a href={l.href} className="link-underline text-[11px] uppercase tracking-[0.26em] text-ivory/80 hover:text-ivory">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={site.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram @notbetxy (opens in new tab)"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-ivory/20 text-ivory/80 transition hover:border-champagne hover:text-champagne sm:flex"
          >
            <InstagramIcon />
          </a>
          <a href="#contact" className="btn-solid hidden !px-5 !py-3 sm:inline-flex">Work With Me</a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative flex h-10 w-10 items-center justify-center lg:hidden"
          >
            <span className={`absolute h-px w-6 bg-ivory transition-all duration-500 ${open ? "rotate-45" : "-translate-y-1.5"}`} />
            <span className={`absolute h-px w-6 bg-ivory transition-all duration-500 ${open ? "-rotate-45" : "translate-y-1.5"}`} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease }}
            className="fixed inset-0 top-0 -z-10 flex flex-col justify-between bg-ink px-6 pb-10 pt-28 lg:hidden"
          >
            <ul className="space-y-2">
              {nav.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.6, ease }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-4 py-1 font-serif text-[2.6rem] font-light leading-tight"
                  >
                    <span className="font-sans text-[10px] tracking-[0.3em] text-champagne">0{i + 1}</span>
                    <span className="transition group-hover:italic group-hover:text-champagne">{l.label}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="space-y-6">
              <p className="font-script text-3xl text-champagne">{site.motto}</p>
              <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" className="btn-line w-full">
                <InstagramIcon /> Follow @notbetxy
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
