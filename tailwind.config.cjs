/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: "4rem",
        sm: "4rem",
        lg: "8rem",
        xl: "7rem",
        "2xl": "8rem",
      },
    },
  },
  plugins: [],
};
