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
          0: "#ffffff",
          1: "#f8f9fa",
          2: "#f0f1f3",
        },
        border: {
          DEFAULT: "#e2e4e8",
          accent: "#6366f1",
        },
        accent: {
          DEFAULT: "#6366f1",
          light: "#eef2ff",
        },
        success: {
          bg: "#ecfdf5",
          border: "#6ee7b7",
          text: "#065f46",
        },
        danger: {
          bg: "#fef2f2",
          border: "#fca5a5",
          text: "#991b1b",
        },
        source: {
          bg: "#f5f3ff",
          border: "#c4b5fd",
          text: "#5b21b6",
        },
        highlight: {
          bg: "#fffbeb",
          border: "#fcd34d",
        },
        example: {
          bg: "#f0fdf4",
          border: "#86efac",
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
