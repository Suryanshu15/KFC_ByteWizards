/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',   
      '2xl': '1536px',   
    },
    extend: {
      colors: {
        navcol:

{
  50: '#e8f3fe',
  100: '#cad7e8',
  200: '#aabcd4',
  300: '#8aa1c2',
  400: '#6986b0',
  500: '#4f6d96',
  600: '#3d5575',
  700: '#2b3c55',
  800: '#182435',
  900: '#040c17',
}
      }
    },
  },
  plugins: [],
}
