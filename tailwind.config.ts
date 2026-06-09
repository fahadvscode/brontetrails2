import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#3e7f93",
          dark: "#1a3a3f",
          mid: "#357d8f",
          deep: "#2d5f6b",
        },
        linen: {
          DEFAULT: "#f7f4ef",
          dark: "#ebe6de",
        },
        accent: {
          gold: "#c9a96e",
        },
        "text-body": "#1c2426",
        "text-muted": "#5a6a6e",
      },
      fontFamily: {
        display: ["var(--font-dm-serif)", "Georgia", "serif"],
        body: ["var(--font-source-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
        prose: "720px",
      },
      boxShadow: {
        card: "0 4px 24px rgba(26, 58, 63, 0.08)",
        elevated: "0 12px 40px rgba(26, 58, 63, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
