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
          DEFAULT: "#0f172a",
          light: "#f1f5f9",
        },
        secondary: {
          DEFAULT: "#040a27",
          light: "#dcdee0",
        },
        tertiary: {
          DEFAULT: "#020617",
          light: "#e5e9ed",
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
