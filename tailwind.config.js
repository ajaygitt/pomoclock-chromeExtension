/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  colors: {
    'blue': '#1fb6ff',
    'purple': '#7e5bef',
    'pink': '#ff49db',
    'orange': '#ff7849',
    'green': '#13ce66',
    'yellow': '#ffc82c',
    'gray-dark': '#273444',
    'gray': '#8492a6',
    'gray-light': '#d3dce6',
  },
  fontFamily: {
    sans: ['Graphik', 'sans-serif'],
    serif: ['Merriweather', 'serif'],
  },
  theme: {
    extend: {
      colors: {
        primary: '#FF5733',
        secondary: '#1ABC9C',
        background: '#F0F0F0',
        accent: '#3498DB',
        text: '#333333',
        highlight: '#FFC300',
      },
    },
  },
}