/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,json}"
  ],
  safelist: [
    'hover:bg-red-500/50',
    'hover:bg-red-700/50',
    'hover:bg-rose-600/50',
    'hover:bg-orange-400/50',
    'hover:bg-orange-600/50',
    'hover:bg-amber-300/50',
    'hover:bg-yellow-300/50',
    'hover:bg-yellow-400/50',
    'hover:bg-sky-600/50',
    'hover:bg-sky-700/50',
    'hover:bg-cyan-500/50',
    'hover:bg-blue-400/50',
    'hover:bg-blue-500/50',
    'hover:bg-blue-700/50',
    'hover:bg-purple-600/50',
    'hover:bg-violet-500/50',
    'hover:bg-green-500/50',
    'hover:bg-green-600/50',
    'hover:bg-lime-500/50'
    ],
  theme: {
    extend: {},
  },
  plugins: [],
}
