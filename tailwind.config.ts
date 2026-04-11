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
        background: "var(--bg)",
        surface: "var(--bg-surface)",
        card: "var(--bg-card)",
        border: "var(--border)",
        textPrimary: "var(--text)",
        textMuted: "var(--text-muted)",
        textDim: "var(--text-dim)",
        orange: "var(--orange)",
        orangeGlow: "var(--orange-glow)",
        blue: "var(--blue)",
        blueGlow: "var(--blue-glow)",
        accent: "var(--accent)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
