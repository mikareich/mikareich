import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "raisin-black": {
        "100": "#D1D1D3",
        "200": "#1B1725",
        "300": "#100E16",
        "400": "#0B090F",
      },
      "baby-powder": {
        DEFAULT: "#FCFFFD",
      },
      primary: {
        DEFAULT: "#7C90DB",
      },
    },
    fontFamily: {
      mono: ["var(--font-fira-code)"],
    },
    fontSize: {
      "5xl": "61.04px", // title
      "4xl": "48.83px", // h1
      "3xl": "39.06px", // h2
      "2xl": "31.25px", // h3
      xl: "25px", // h4
      lg: "20px", // h5, lg
      base: "16px", // base
      sm: "14px", // text-small
      xs: "12.8px", // text-small
    },
    screens: {
      xs: "576px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
export default config;
