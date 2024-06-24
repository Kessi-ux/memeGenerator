/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '50px': '50px',
      },
      boxShadow: {
        'custom': '0px 2px 2px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}

