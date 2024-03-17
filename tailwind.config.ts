import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        spin: "spin 2s linear infinite",
        bounce: "bounce 3s linear infinite",
        rotate3d: "rotate3d 3s linear infinite",
      },
      screens: {
        xs: "340px",
      },
      keyframes: {
        rotate3d: {
          "0%": {
            transform: "rotateY(0deg)",
          },
          "50%": {
            transform: "rotateY(180deg)",
          },
          "100%": {
            transform: "rotateY(360deg)",
          },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
