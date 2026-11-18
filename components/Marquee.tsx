import { Sparkle } from "./Icons";

const words = ["Purpose > Popularity", "Authenticity", "Creativity", "Connection", "Latina ✨ Mexicana", "Stay Curious"];

export default function Marquee() {
  const row = [...words, ...words];
  return (
    <div className="relative overflow-hidden border-y border-ivory/10 bg-noir py-5" aria-hidden>
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
        {[...row, ...row].map((w, i) => (
          <span key={i} className="flex items-center gap-10 font-serif text-2xl italic text-beige/80 md:text-3xl">
            {w}
            <Sparkle className="h-3 w-3 text-champagne" />
          </span>
        ))}
      </div>
    </div>
  );
}
