/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'show-alert': 'show 3s linear infinite',
      },
      keyframes: {
        show: {
          '0%': { display: 'block' },
          '100%': { display:'hidden' },
        }
      }
    },
  },
  plugins: [],
}
