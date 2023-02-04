/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color:{
        primary: "#706FE5",
      }
    },
  },
  screens: {
    'ss' : {'min': '375px', 'max': '640px'}
  },
  plugins: [],
}