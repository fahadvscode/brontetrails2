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
        brand: "#3e7f93",
        "brand-dark": "#2d5f6b",
        "brand-mid": "#357d8f",
        "brand-deep": "#1e3a3f",
        linen: "#f7f4ef",
        "linen-dark": "#ebe6de",
        sand: "#faf8f5",
        ink: "#1c2426",
        "accent-gold": "#c4a35a",
        "text-body": "#1c2426",
        "text-muted": "#5a6a6e",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-source-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1120px",
        prose: "680px",
        shell: "1320px",
      },
      boxShadow: {
        soft: "0 2px 20px rgba(30, 58, 63, 0.06)",
        float: "0 16px 48px rgba(30, 58, 63, 0.12)",
        inset: "inset 0 1px 0 rgba(255,255,255,0.6)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
