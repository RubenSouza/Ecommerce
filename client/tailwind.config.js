/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F5F5F5",
          100: "#f0f0f0",
          110: "#e5e7eb",
          150: "#9ca3af",
          200: "#a0a0a0",
          300: "#717171",
          400: "#414141",
          450: "#15171a",
          460: "#191c20",
          500: "#121212",
          600: "#0e0e0e",
          700: "#0b0b0b",
          800: "#070707",
          900: "#040404",
        },
        button: {
          100: "#f467a4",
          200: "#3CD3C1",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
