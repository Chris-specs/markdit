/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)']
      },
      backgroundImage: {
        'main-gradient': 'linear-gradient(97.16deg, #FF4D4D 0%, #F9CB28 99.44%)'
      },
      colors: {
        'brand-gray': '#AFAFAF'
      }
    },
  },
  plugins: [],
}
