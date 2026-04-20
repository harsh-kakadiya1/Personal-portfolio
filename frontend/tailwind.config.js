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
      },
    },
  },
  plugins: [],
}