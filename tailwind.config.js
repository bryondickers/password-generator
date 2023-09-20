/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    colors:{
      purpleBg:"hsl(var(--purple-bg))",
      white:"hsl(var(--white))",
      light:"hsl(var(--less-white))",
      darkPurple:"hsl(var(--dark-purple))",
      whiteBorder:"hsl(var(--white-border))",
      genTextColor:"hsl(var(--gen-text-color))",
      brightPurple:"hsl(var(--bright-purple))",
      strongBlue:"hsl(var(--strong-blue))",
      strongGreen:"hsl(var(--strong-green))",
      goodYellow:"hsl(var(--good-yellow))",
      weakRed:"hsl(var(--weak-red))"
    },
    fontFamily:{
      switzer: "'Switzer', sans-serif"                                      
    },
    extend: {},
  },
  plugins: [],
}

