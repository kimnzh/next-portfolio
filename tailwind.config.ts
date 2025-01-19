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
        primary: {
          DEFAULT: "#f1f5f9",
          dark: "#0f172a",
        },
        secondary: {
          DEFAULT: "#dcdee0",
          dark: "#040a27",
        },
        tertiary: {
          DEFAULT: "#e5e9ed",
          dark: "#020617",
        },
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
