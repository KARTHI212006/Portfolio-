import type { Config } from "tailwindcss";

/**
 * Editorial palette (art direction proposal 01, contrast-tested).
 * Dark grounds: ink, aub. Light ground: paper.
 * Text on dark: lav (14:1), orchid (5.2:1 on ink; 24px+ only on aub).
 * Text on paper: ink, violet (5.7:1). Violet is never text on dark (2.8:1); rules and fills only.
 * signal = the 10% accent: #FF4D5E on dark (5.7:1), #BE0C2A on paper (5.6:1).
 */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#17131C",
        aub: "#302635",
        violet: "#72556F",
        orchid: "#A77A9D",
        lav: "#E8DFE5",
        paper: "#F3EFE9",
        signal: "#FF4D5E",
        "signal-deep": "#BE0C2A",
      },
      fontFamily: {
        sans: ['"Archivo Variable"', "Archivo", "system-ui", "sans-serif"],
        serif: ['"Instrument Serif"', "Georgia", "serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
