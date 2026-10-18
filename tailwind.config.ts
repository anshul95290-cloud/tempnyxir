import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        alabaster: "#f8f7f4",
        obsidian: "#0f0f0e",
        hairline: "#e5e3dc",
        emerald: {
          500: "#10b981",
          600: "#059669",
          700: "#047857",
        },
        amber: {
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
        },
        cobalt: {
          500: "#2563eb",
          600: "#1d4ed8",
        },
        brand: {
          bg: "#f8f7f4",
          primary: "#10b981",
          secondary: "#f59e0b",
          dark: "#0f0f0e",
          muted: "#57564f",
          light: "#eae7df",
          white: "#ffffff",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out both",
        "fade-in-up": "fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
