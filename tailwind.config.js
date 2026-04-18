/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nzx-green': '#1A6B2A',
        'nzx-green-mid': '#2D9E3F',
        'nzx-green-light': '#E8F5E8',
        'nzx-gold': '#C9A227',
        'nzx-gold-light': '#FDF6E3',
        'nzx-dark': '#1A2E1A',
        'nzx-mid': '#4A6A4A',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
