/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          burgundy: '#8B2635',
          'burgundy-dark': '#5C1A24',
          'burgundy-light': '#A83246',
          gold: '#B8860B',
          'gold-light': '#D4AF37',
          'gold-pale': '#F5E6C8',
          cream: '#FAF6F0',
          ivory: '#FFFEF9',
          charcoal: '#2C2C2C',
        }
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'serif'],
        body: ['Montserrat', 'sans-serif'],
        cursive: ['Great Vibes', 'cursive'],
      },
    },
  },
  plugins: [],
}