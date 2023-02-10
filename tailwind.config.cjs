/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      primary: ['Bellefair', 'sans-serif'],
      secondary: ['Barlow Condensed', 'sans-serif']
    },
    colors: {
      primary: '#0B0D17',
      lightBlue: '#D0D6F9',
      cream: '#FFFFFF',
      black: 'black'
    }
  },
  plugins: [],
}
