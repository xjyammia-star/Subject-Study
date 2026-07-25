import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          0: "#0f1117",   // main background — deep dark
          1: "#161923",   // sidebar background
          2: "#1e2231",   // hover / secondary panels
          3: "#252a3a",   // card background
        },
        border: {
          DEFAULT: "#2a2f40",
          accent: "#818cf8",
        },
        accent: {
          DEFAULT: "#818cf8",
          light: "rgba(129,140,248,0.12)",
        },
        success: {
          bg: "rgba(16,185,129,0.12)",
          border: "#34d399",
          text: "#6ee7b7",
        },
        danger: {
          bg: "rgba(239,68,68,0.12)",
          border: "#f87171",
          text: "#fca5a5",
        },
        source: {
          bg: "rgba(139,92,246,0.10)",
          border: "#8b5cf6",
          text: "#c4b5fd",
        },
        highlight: {
          bg: "rgba(251,191,36,0.10)",
          border: "#f59e0b",
        },
        example: {
          bg: "rgba(16,185,129,0.08)",
          border: "#34d399",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        voice: ["Georgia", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
