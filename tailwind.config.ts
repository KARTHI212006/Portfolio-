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
        ink: "#090506",
        panel: "#130A0C",
        line: "#2C1B1E",
        fg: "#F6F1EF",
        muted: "#B7A9AA",
        red: "#F0374F",
        "red-deep": "#BE0C2A",
      },
      fontFamily: {
        sans: ['"Inter Variable"', "Inter", "system-ui", "sans-serif"],
        heading: ['"Inter Variable"', "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        label: "0.14em",
      },
      boxShadow: {
        card: "0 1px 0 rgba(255,255,255,0.04) inset, 0 24px 48px -24px rgba(0,0,0,0.7)",
      },
    },
  },
  plugins: [],
};

export default config;
