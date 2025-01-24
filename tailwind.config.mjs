/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
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
          DEFAULT: "#dcdee0",
          dark: "#040a27",
        },
        tertiary: {
          DEFAULT: "#e5e9ed",
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
