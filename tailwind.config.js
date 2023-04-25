/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-pattern': "url('../public/images/pattern.png')",
      }
    },
  },
  plugins: [],
}

