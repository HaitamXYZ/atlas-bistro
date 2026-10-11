/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0D0E0B',
        charcoal: '#171913',
        ivory: '#EFE9DD',
        gold: '#C6A46A',
        'gold-light': '#E4CA95',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Manrope', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
