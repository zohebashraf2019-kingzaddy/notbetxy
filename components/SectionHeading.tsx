import Reveal from "./Reveal";

type Props = {
  number: string;
  kicker: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  id?: string;
  tone?: "dark" | "light";
};

export default function SectionHeading({ number, kicker, title, intro, align = "left", id, tone = "dark" }: Props) {
  const center = align === "center";
  const light = tone === "light";
  return (
    <Reveal className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div className={`flex items-center gap-4 ${center ? "justify-center" : ""}`}>
        <span className={`font-serif text-sm italic ${light ? "text-champagne-deep" : "text-champagne"}`}>No. {number}</span>
        <span className="h-px w-10 bg-champagne/50" aria-hidden />
        <span className={`eyebrow ${light ? "!text-champagne-deep" : ""}`}>{kicker}</span>
      </div>
      <h2 id={id} className={`display mt-6 ${light ? "text-ink" : ""} text-[2.6rem] sm:text-6xl lg:text-7xl`}>
        {title}
      </h2>
      {intro && <p className={`mt-6 max-w-xl text-base leading-relaxed md:text-lg ${light ? "text-ink/85" : "text-beige"}`}>{intro}</p>}
    </Reveal>
  );
}
