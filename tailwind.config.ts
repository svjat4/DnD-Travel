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
          green: "#174C3C",
          dark: "#0F352A",
          cream: "#F6F1E8",
          beige: "#E8DDCC",
          gold: "#B89555",
          charcoal: "#1E2421",
          muted: "#66706A",
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-playfair)'],
      }
    },
  },
  plugins: [],
};
export default config;