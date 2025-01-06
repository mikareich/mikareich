import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      gray: {
        "100": "#fcfffd",
        "200": "#d1d1d3",
        "300": "#1b1725",
        "400": "#050507",
      },
      blue: {
        "100": "#b0bce9",
        "200": "#7c90db",
        "300": "#4a5683",
        "400": "#0f131d",
      },
      transparent: "transparent",
    },
    fontFamily: {
      body: ["Space Mono", "monospace"],
      heading: ["Fira Code", "monospace"],
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
        },
      },
    },
  },
};
export default config;
