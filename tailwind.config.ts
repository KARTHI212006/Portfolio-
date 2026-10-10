import type { Config } from "tailwindcss";

/**
 * Design tokens.
 * Dark sections: ink / panel / line / fg / muted
 * Light sections: paper / ink-text / ink-soft
 * Accent: red (fills + text on dark), red-deep (filled buttons, AA with white), red-ink (text on light)
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
        ink: "#0B0B0E",
        panel: "#131318",
        line: "#2A2A31",
        fg: "#F5F5F5",
        muted: "#A7A7AD",
        paper: "#F8F8F8",
        "ink-text": "#111111",
        "ink-soft": "#5C5C63",
        "paper-line": "#E3E3E6",
        red: "#FF321F",
        "red-deep": "#E3280C",
        "red-ink": "#CC2410",
      },
      fontFamily: {
        sans: ['"Inter Variable"', "Inter", "system-ui", "sans-serif"],
        heading: ['"Space Grotesk Variable"', '"Space Grotesk"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        label: "0.14em",
      },
      boxShadow: {
        card: "0 1px 0 rgba(255,255,255,0.04) inset, 0 24px 48px -24px rgba(0,0,0,0.7)",
        soft: "0 20px 40px -24px rgba(17,17,17,0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
