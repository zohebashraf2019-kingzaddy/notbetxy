import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0c0a09",
        noir: "#15110f",
        coal: "#1e1916",
        ivory: "#f3ece0",
        beige: "#e4d6c1",
        sand: "#b9a68c",
        champagne: { DEFAULT: "#c9a97a", light: "#dcc39b", deep: "#a88552" },
        smoke: "#8d8378",
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
