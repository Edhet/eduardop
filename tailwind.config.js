/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  safelist: [
    'text-orange-500',
    'bg-orange-500/25',
    'text-yellow-400',
    'bg-yellow-400/25',
    'text-cyan-500',
    'bg-cyan-500/25',
    'text-red-500',
    'bg-red-500/25',
    'text-blue-500',
    'bg-blue-500/25',
    'text-blue-400',
    'bg-blue-400/25',
    'text-purple-600',
    'bg-purple-600/25'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
