import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px",
      },
      colors: {
        accent: "#FF8F9C",
        blakish: "#1b1b1b",
      },
      transitionDuration: {
        400: "400ms", // Add a custom duration
      },
    },
  },
  plugins: [],
} satisfies Config;
