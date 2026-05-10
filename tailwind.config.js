/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        orangeCTA: "#F97316",
        richBlack: "#111111",
        pureWhite: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Saira", "sans-serif"],
      },
    },
  },
  plugins: [],
}