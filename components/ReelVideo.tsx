"use client";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { PlayIcon } from "./Icons";

type Props = { src: string; poster: string; caption: string; tag?: string; href: string };

export default function ReelVideo({ src, poster, caption, tag, href }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v || reduce) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
        else { v.pause(); setPlaying(false); }
      },
      { threshold: 0.35 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, [reduce]);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) v.play().then(() => setPlaying(true)).catch(() => {});
    else { v.pause(); setPlaying(false); }
  };

  return (
    <figure className="group relative aspect-[9/16] w-full overflow-hidden bg-coal">
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
        aria-label={`Reel: ${caption}`}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-ink/30" />
      <div className="absolute left-4 top-4 flex items-center gap-2 bg-ink/60 px-3 py-1.5 text-[12px] uppercase tracking-[0.2em] text-champagne backdrop-blur">
        <span className="h-1.5 w-1.5 rounded-full bg-champagne" /> Reel
      </div>
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause reel" : "Play reel"}
        className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-ivory/30 bg-ink/50 text-ivory backdrop-blur transition hover:border-champagne hover:text-champagne"
      >
        {playing ? (
          <span className="flex gap-1" aria-hidden><span className="h-3 w-0.5 bg-current" /><span className="h-3 w-0.5 bg-current" /></span>
        ) : (
          <PlayIcon className="h-3.5 w-3.5" />
        )}
      </button>
      <figcaption className="absolute inset-x-0 bottom-0 p-5">
        {tag && <p className="eyebrow">{tag}</p>}
        <p className="mt-2 font-serif text-xl italic leading-snug">&ldquo;{caption}&rdquo;</p>
        <a href={href} target="_blank" rel="noopener noreferrer" className="link-underline mt-3 inline-block text-[12px] uppercase tracking-[0.2em] text-ivory/80">
          Watch more Reels
        </a>
      </figcaption>
    </figure>
  );
}
