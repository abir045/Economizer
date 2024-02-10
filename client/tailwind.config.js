/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          // light green
          100: "#d0fcf4",
          200: "#a0f9e9",
          300: "#71f5de",
          400: "#41f2d3",
          500: "#12efc8",
          600: "#0ebfa0",
          700: "#0b8f78",
          800: "#076050",
          900: "#043028",
        },
        secondary: {
          // yellow
          100: "#fcf0dd",
          200: "#fae1bb",
          300: "#f7d299",
          400: "#f5c377",
          500: "#f2b455",
          600: "#c29044",
          700: "#916c33",
          800: "#614822",
          900: "#302411",
        },
        tertiary: {
          // purple
          500: "#8884d8",
        },
        background: {
          light: "#2d2d34",
          main: "#1f2026",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        bold: 700,
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwindcss-animate")],
};
