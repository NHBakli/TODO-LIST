import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#6C63FF",
        primaryOpacity: "rgba(108, 99, 255, 0.2)",
        secondary: "#534CC2",
        placeholder: "#C3C1E5",
        bgDark: "#252525",
        secondaryDark: "#f7f7f7",
        deleteButton: "#E50000",
      },
    },
  },
  plugins: [],
};
export default config;
