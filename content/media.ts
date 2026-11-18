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
import logo from "@/public/images/logo-ivory.png";
import monogram from "@/public/images/monogram-ivory.png";

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
];
