import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F7F1E7",
          dim: "#EFE6D6",
        },
        ink: {
          DEFAULT: "#241417",
          soft: "#4A3A3C",
        },
        wine: {
          DEFAULT: "#2B0E20",
          light: "#3D1730",
        },
        berry: {
          DEFAULT: "#A11F52",
          light: "#C6316A",
          deep: "#7A1740",
        },
        gold: {
          DEFAULT: "#B78A45",
          light: "#D4B678",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-worksans)", "sans-serif"],
      },
      letterSpacing: {
        wideish: "0.14em",
      },
    },
  },
  plugins: [],
};
export default config;
