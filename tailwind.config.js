/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{html,ts,json}"
  ],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3'
      }
    },
  },
  plugins: [],
}
