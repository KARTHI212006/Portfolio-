import type { Config } from "tailwindcss";

/**
 * Design tokens (warm-black cinematic theme).
 * ink / panel / line / fg / muted : surfaces and text
 * red-deep : crimson sampled from the final frame of the intro video (#BE0C2A), so hero and video meet seamlessly.
 *            Also the filled-button color (white text on it is 6:1).
 * red      : lighter crimson for small text and icons on dark surfaces (AA on ink).
 * To try the template's orange instead, change red-deep, red and the two rgba() glows in globals.css.
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
        ink: "#080708",
        panel: "#120F11",
        line: "rgba(197, 168, 128, 0.14)",
        fg: "#F4EFEA",
        champagne: "#F4EFEA",
        beige: "#E6DDD5",
        muted: "#A89F97",
        gold: "#C5A880",
        "gold-muted": "#9E825E",
        "gold-dark": "#6E563B",
        red: "#BE0C2A",
        "red-deep": "#9E1B2C",
        crimson: "#9E1B2C",
      },
      fontFamily: {
        sans: ['"Inter Variable"', "Inter", "system-ui", "sans-serif"],
        heading: ['"Space Grotesk Variable"', '"Space Grotesk"', '"Inter Variable"', "Inter", "sans-serif"],
        mono: ['"JetBrains Mono"', '"SF Mono"', "Menlo", "monospace"],
      },
      letterSpacing: {
        label: "0.14em",
        editorial: "0.22em",
      },
      boxShadow: {
        card: "0 1px 0 rgba(255,255,255,0.05) inset, 0 24px 48px -24px rgba(0,0,0,0.85)",
        gold: "0 0 30px -10px rgba(197,168,128,0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
