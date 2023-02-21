/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#0FB043",
        white: "#fff",
        background: "#F5F5F5",
        disabled: "#BBBBBB",
        text_black: "#1A1A1A",
        black: "#000",
      },
    },
  },
  plugins: [],
};
