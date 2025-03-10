import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Fredoka: ["Fredoka", "sans-serif"],
      },
      colors: {
        primary: "#F453AD",
        secondary: "#F5F5F5",
        bordercolor: "#DCDCDC",
        tertiary: "FF9E62",
      },
      boxShadow: {
        alldirection: "0px 0px 8px 2px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
