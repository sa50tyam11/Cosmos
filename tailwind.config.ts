import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#010828",
        cream: "#EFF4FF",
        neon: "#6FFF00",
      },
      fontFamily: {
        grotesk: ["Anton", "system-ui", "sans-serif"],
        condiment: ["Condiment", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
