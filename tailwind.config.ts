import type { Config } from "tailwindcss";

export default {
  content: [
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins-bold": ["var(--font-poppins-bold)", "sans-serif"],
        "poppins-reg": ["var(--font-poppins-reg)", "sans-serif"],
        "poppins-semibold": ["var(--font-poppins-semibold)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
