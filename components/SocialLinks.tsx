import { site } from "@/content/site";
import { ArrowUpRight, InstagramIcon, LinkIcon, TikTokIcon, YouTubeIcon } from "./Icons";

export const socialLinks = [
  { label: "Instagram", handle: "@notbetxy", href: site.socials.instagram, Icon: InstagramIcon },
  { label: "TikTok", handle: "@notbetxy", href: site.socials.tiktok, Icon: TikTokIcon },
  { label: "YouTube", handle: "Betxy w/ an X", href: site.socials.youtube, Icon: YouTubeIcon },
  { label: "YouTube", handle: "Lead With Delusion", href: site.socials.leadWithDelusion, Icon: YouTubeIcon },
  { label: "Linktree", handle: "All my links", href: site.socials.linktree, Icon: LinkIcon },
];

type Props = { variant?: "icons" | "pills" | "list"; className?: string };

/** All of Betxy's social links in one place — edit URLs in content/site.ts. */
export default function SocialLinks({ variant = "icons", className = "" }: Props) {
  if (variant === "list") {
    return (
      <ul className={`divide-y divide-ivory/20 ${className}`}>
        {socialLinks.map(({ label, handle, href, Icon }) => (
          <li key={href}>
            <a href={href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between py-4">
              <span className="flex items-center gap-4">
                <Icon className="h-5 w-5 text-champagne" />
                <span className="w-20 text-[12px] font-medium uppercase tracking-[0.16em] text-sand">{label}</span>
                <span className="text-[15px] text-ivory">{handle}</span>
              </span>
              <ArrowUpRight className="h-4 w-4 text-ivory/70 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-champagne" />
            </a>
          </li>
        ))}
      </ul>
    );
  }

  if (variant === "pills") {
    return (
      <ul className={`flex flex-wrap gap-2 ${className}`}>
        {socialLinks.map(({ label, handle, href, Icon }) => (
          <li key={href}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-ivory/30 bg-ink/80 px-4 py-2 text-[13px] text-ivory backdrop-blur transition hover:border-champagne hover:text-champagne"
            >
              <Icon className="h-4 w-4" />
              <span>{label === "YouTube" ? handle : label}</span>
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className={`flex flex-wrap gap-3 ${className}`}>
      {socialLinks.map(({ label, handle, href, Icon }) => (
        <li key={href}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${label}: ${handle} (opens in new tab)`}
            title={`${label} — ${handle}`}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/30 text-ivory transition hover:border-champagne hover:bg-champagne hover:text-ink"
          >
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  );
}
