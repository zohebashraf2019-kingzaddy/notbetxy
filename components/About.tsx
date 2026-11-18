import Image from "next/image";
import { media } from "@/content/media";
import { site } from "@/content/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Sparkle } from "./Icons";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative overflow-hidden py-24 md:py-36">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-10 top-10 select-none font-serif text-[34vw] font-light italic leading-none text-ivory/[0.025] lg:text-[22vw]"
      >
        X
      </span>

      <div className="mx-auto grid max-w-7xl gap-16 px-5 md:px-10 lg:grid-cols-12 lg:gap-10">
        {/* Images */}
        <div className="relative lg:col-span-5">
          <Reveal className="relative aspect-[4/5] w-[86%] overflow-hidden">
            <Image
              src={media.aboutRed}
              alt="Betxy in a red dress seated on a ranch fence"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 36vw, 86vw"
              className="object-cover transition-transform duration-[1.6s] hover:scale-105"
            />
          </Reveal>
          <Reveal
            delay={0.2}
            className="absolute -bottom-10 right-0 aspect-[3/4] w-[46%] overflow-hidden border-[6px] border-ink shadow-2xl"
          >
            <Image
              src={media.nightCity}
              alt="Betxy smiling on a neon-lit city street at night"
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 18vw, 46vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={0.35} className="absolute -left-1 top-0 hidden md:block">
            <span className="eyebrow block whitespace-nowrap text-ivory/80 [writing-mode:vertical-rl] rotate-180">Est. with purpose</span>
          </Reveal>
        </div>

        {/* Copy */}
        <div className="lg:col-span-6 lg:col-start-7 lg:pt-6">
          <SectionHeading
            id="about-title"
            number="01"
            kicker="About Betxy"
            title={
              <>
                The Girl Behind <span className="italic text-champagne">the X</span>
              </>
            }
          />

          <Reveal delay={0.1} className="mt-10 space-y-5 text-[16px] leading-[1.85] text-beige">
            <p className="font-serif text-3xl italic text-ivory">Hey, I&apos;m Betxy! ✨</p>
            <p>
              <span className="float-left mr-3 mt-1 font-serif text-6xl leading-[0.8] text-champagne">A</span>
              proud Latina and Mexicana, entrepreneur, and content creator who believes that purpose will always be
              greater than popularity.
            </p>
            <p>My platform is about expressing individuality, embracing life&apos;s experiences, and creating genuine connections.</p>
            <p>
              I love working with businesses and brands that have something meaningful to share. Whether it&apos;s
              discovering a local hidden gem, showcasing an exciting product, or creating promotional content, I bring my
              creativity and personality into every project.
            </p>
            <p>I&apos;m taking life head on, one day at a time, and I&apos;m excited to see where this journey takes me.</p>
          </Reveal>

          <Reveal delay={0.2} className="mt-12 grid gap-px border border-ivory/20 bg-ivory/10 sm:grid-cols-2">
            <figure className="bg-ink p-7">
              <p className="eyebrow">The Motto</p>
              <blockquote className="mt-3 font-serif text-3xl">Purpose &gt; Popularity</blockquote>
            </figure>
            <figure className="bg-ink p-7">
              <p className="eyebrow">The Philosophy</p>
              <blockquote className="mt-3 font-serif text-xl italic leading-snug text-beige">
                &ldquo;{site.philosophy}&rdquo;
              </blockquote>
            </figure>
          </Reveal>

          <Reveal delay={0.3} className="mt-8 flex flex-wrap gap-2">
            {[site.identity, ...site.roles].map((r) => (
              <span key={r} className="flex items-center gap-2 border border-ivory/20 px-4 py-2 text-[12px] uppercase tracking-[0.2em] text-ivory/80">
                <Sparkle className="h-2 w-2 text-champagne" /> {r}
              </span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
