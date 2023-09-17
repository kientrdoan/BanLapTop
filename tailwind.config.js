/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./MyApp/templates/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '64': '64px',
        '50': '50px',
      }
    },
  },
  plugins: [],
}

