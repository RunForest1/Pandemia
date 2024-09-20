/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Rubik :["Rubik Wet Paint", 'sans-serif'],
        Poppins :["Poppins", 'sans-serif'],
      },
      backgroundImage: {
        main: 'url(/src/images/bg.png)',
        hero: "url(/src/images/hero.svg)",
      }
    },
  },
  plugins: [],
}
