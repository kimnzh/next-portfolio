/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "640px",
        sm: "704px",
      },
      colors: {
        primary: {
          DEFAULT: "#f1f5f9",
          dark: "#0f172a",
        },
        secondary: {
          DEFAULT: "#e5e9ed",
          dark: "#040a27",
        },
        tertiary: {
          DEFAULT: "#dcdee0",
          dark: "#020617",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
