import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050816",
        "background-secondary": "#0B1020",
        "accent-cyan": "#00E5FF",
        "accent-violet": "#7C3AED",
        "accent-green": "#00FF88",
        foreground: "#FFFFFF",
        "muted-foreground": "#A8B3CF",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(0, 229, 255, 0.3)",
        "glow-violet": "0 0 25px -5px rgba(124, 58, 237, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
