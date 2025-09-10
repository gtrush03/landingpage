/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', 'sans-serif'],
      },
      colors: {
        'primary-gold': '#928466',
        'primary-gold-light': '#B7A98B',
        'primary-gold-dark': '#6B5D4A',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-out-up': 'fadeOutUp 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};