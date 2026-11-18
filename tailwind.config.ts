import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Light, high-contrast theme.
        // "ink" = page background, "ivory" = main text (names kept so components stay simple).
        ink: "#fbf8f3",        // warm cream background
        noir: "#f3ede3",       // alternate section background
        coal: "#e8dfd1",       // card / image placeholder
        ivory: "#141110",      // primary text (near-black)
        beige: "#3b332c",      // body text (dark espresso)
        sand: "#5e5245",       // labels
        champagne: { DEFAULT: "#85642f", light: "#a07c42", deep: "#e0c48f" }, // deep gold accent; "deep" = gold for dark band
        smoke: "#655b51",      // muted text (still AA on cream)
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      letterSpacing: { luxe: "0.32em" },
      keyframes: {
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        scrolldot: {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "30%": { opacity: "1" },
          "100%": { transform: "translateY(28px)", opacity: "0" },
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        scrolldot: "scrolldot 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
