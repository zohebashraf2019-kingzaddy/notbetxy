import heroRed from "@/public/images/hero-red.jpg";
import aboutRed from "@/public/images/about-red.jpg";
import nightCity from "@/public/images/night-city.jpg";
import studioLace from "@/public/images/studio-lace.jpg";
import studioCloud from "@/public/images/studio-cloud.jpg";
import studioCloudFull from "@/public/images/studio-cloud-full.jpg";
import snowWalk from "@/public/images/snow-walk.jpg";
import snowPose from "@/public/images/snow-pose.jpg";
import nightOut from "@/public/images/night-out.jpg";
import sunsetLounge from "@/public/images/sunset-lounge.jpg";
import sunsetSeated from "@/public/images/sunset-seated.jpg";
import beachPalm from "@/public/images/beach-palm.jpg";
import beachKneel from "@/public/images/beach-kneel.jpg";
import riverRaft from "@/public/images/river-raft.jpg";
import bbLogo from "@/public/images/beauty-bar/bb-logo.png";
import wispyBeforeAfter from "@/public/images/beauty-bar/wispy-before-after.jpg";
import lash01 from "@/public/images/beauty-bar/lash-01.jpg";
import lash02 from "@/public/images/beauty-bar/lash-02.jpg";
import lash03 from "@/public/images/beauty-bar/lash-03.jpg";
import lash04 from "@/public/images/beauty-bar/lash-04.jpg";
import lash05 from "@/public/images/beauty-bar/lash-05.jpg";
import lash06 from "@/public/images/beauty-bar/lash-06.jpg";
import lash07 from "@/public/images/beauty-bar/lash-07.jpg";
import lash08 from "@/public/images/beauty-bar/lash-08.jpg";
import lash09 from "@/public/images/beauty-bar/lash-09.jpg";
import lash10 from "@/public/images/beauty-bar/lash-10.jpg";
import lash11 from "@/public/images/beauty-bar/lash-11.jpg";
import lash12 from "@/public/images/beauty-bar/lash-12.jpg";
import lash13 from "@/public/images/beauty-bar/lash-13.jpg";
import lash14 from "@/public/images/beauty-bar/lash-14.jpg";
import lash15 from "@/public/images/beauty-bar/lash-15.jpg";
import logo from "@/public/images/logo-ivory.png";
import monogram from "@/public/images/monogram-ivory.png";
import logoInk from "@/public/images/logo-ink.png";
import monogramInk from "@/public/images/monogram-ink.png";

export const media = {
  heroRed,
  aboutRed,
  nightCity,
  studioLace,
  studioCloud,
  studioCloudFull,
  snowWalk,
  snowPose,
  nightOut,
  sunsetLounge,
  sunsetSeated,
  beachPalm,
  beachKneel,
  riverRaft,
  logo,
  monogram,
  logoInk,
  monogramInk,
};

/** "Life Through My Lens" gallery — swap or reorder freely. */
export const lensGallery = [
  { src: studioLace, alt: "Betxy seated on a black chair in a lace studio look", tag: "Editorial" },
  { src: beachPalm, alt: "Betxy in a green two-piece set beside a palm tree on the beach", tag: "Travel" },
  { src: snowWalk, alt: "Betxy walking through a snowy evergreen path", tag: "Lifestyle" },
  { src: sunsetSeated, alt: "Betxy in a cream ribbed dress on a porch swing at golden hour", tag: "Lifestyle" },
  { src: studioCloud, alt: "Betxy in white lace beneath a handmade cloud installation", tag: "Behind the Scenes" },
  { src: nightCity, alt: "Betxy smiling on a neon-lit night market street", tag: "Travel" },
  { src: riverRaft, alt: "Betxy relaxing on a bamboo river raft in the tropics", tag: "Adventure" },
  { src: nightOut, alt: "Betxy in a black zip romper and white boots at home", tag: "Fashion" },
  { src: beachKneel, alt: "Betxy kneeling in the sand in a green beach set", tag: "Travel" },
  { src: snowPose, alt: "Betxy posing in the snow with white earmuffs", tag: "Lifestyle" },
];

/** Self-hosted Reels (short vertical clips in /public/video). Add more objects to feature more. */
export const hostedReels = [
  {
    src: "/video/reel-01.mp4",
    poster: "/video/reel-01-poster.jpg",
    caption: "When you have Gym at 8 but Streets at 10",
    tag: "Comedy · Lifestyle",
  },
  {
    src: "/video/reel-02.mp4",
    poster: "/video/reel-02-poster.jpg",
    caption: "Been a little busy working on some fun stuff",
    tag: "Behind the Scenes",
  },
];

/** Betxy's Beauty Bar — lash work gallery & media */
export const beautyBarMedia = {
  logo: bbLogo,
  beforeAfter: wispyBeforeAfter,
  thankYouVideo: { src: "/video/beauty-bar-thank-you.mp4", poster: "/video/beauty-bar-thank-you-poster.jpg" },
  lashes: [lash01, lash02, lash03, lash04, lash05, lash06, lash07, lash08, lash09, lash10, lash11, lash12, lash13, lash14, lash15],
};
