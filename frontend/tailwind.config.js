/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode using class strategy
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brutalist black, white, and gray palette
        'brutal-black': '#000000',
        'brutal-white': '#ffffff',
        'brutal-dark-gray': '#1a1a1a',
        'brutal-gray': '#333333',
        'brutal-light-gray': '#666666',
        'brutal-lighter-gray': '#999999',
        'brutal-pale-gray': '#cccccc',
        // Accent colors for brutalist design
        'accent-red': '#FF0000',
        'accent-yellow': '#E6FF00',
      },
      fontSize: {
        // Extra large sizes for brutalist headings
        '9xl': '6rem',
        '10xl': '7rem',
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
      spacing: {
        '14': '3.5rem',
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
}
