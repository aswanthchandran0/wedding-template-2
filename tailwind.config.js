/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F2E6DD',
        lavender: '#F5F3F7',
        ink: '#2B2B2B',
        muted: '#7A7372',
        rose: '#B8635C',
        line: '#D9CEC5',
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        vibes: ['"Great Vibes"', 'cursive'],
        amiri: ['Amiri', 'serif'],
      },
    },
  },
  plugins: [],
}