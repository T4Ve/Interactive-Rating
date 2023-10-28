/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Overpass','sans-serif'],
      },
      colors:{
        DarkCyan: 'hsl(158, 36%, 37%)',
        Orange: 'hsl(25, 97%, 53%)',
        White: 'hsl(0, 0%, 100%)',
        LightGrey: 'hsl(217, 12%, 63%)',
        MediumGrey: 'hsl(216, 12%, 54%)',
        DarkBlue: 'hsl(213, 19%, 18%)',
        VeryDarkBlue: 'hsl(216, 12%, 8%)'
      }
    },
  },
  plugins: [],
}
