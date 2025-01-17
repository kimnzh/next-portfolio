import type { Config } from "tailwindcss";

export default {
  content: [
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--primary))",
        secondary: "rgba(var(--secondary))",
        tertiary: "rgba(var(--tertiary))",
        "primary-light": "rgba(var(--primary-light))",
        "secondary-light": "rgba(var(--secondary-light))",
        "tertiary-light": "rgba(var(--tertiary-light))",
      },
      fontFamily: {
        "poppins-bold": ["var(--font-poppins-bold)", "sans-serif"],
        "poppins-reg": ["var(--font-poppins-reg)", "sans-serif"],
        "poppins-semibold": ["var(--font-poppins-semibold)", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
} satisfies Config;
