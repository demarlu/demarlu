import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: {
        "50": "#f6f6f6",
        "100": "#e7e7e7",
        "200": "#d1d1d1",
        "300": "#b0b0b0",
        "400": "#888888",
        "500": "#6d6d6d",
        "600": "#5d5d5d",
        "700": "#4f4f4f",
        "800": "#454545",
        "900": "#3d3d3d",
        "950": "#141414", //main
      },

      yellow: {
        "50": "#fff8eb",
        "100": "#ffeac6",
        "200": "#fed589",
        "300": "#feb94b",
        "400": "#fd9f23", //main
        "500": "#f77b09",
        "600": "#db5604",
        "700": "#b63807",
        "800": "#932c0d",
        "900": "#79250e",
        "950": "#461002",
      },
    },
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "home-bg": "url('/imgs/v-a-waterfront.jpg')",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
