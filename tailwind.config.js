/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,ts,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C778DD",
        'transparent-primary':'rgba(199, 120, 221, 0.2)',
        background: "#282C33",
        gray: "#ABB2BF",
        'transparent-gray': 'rgba(171, 178, 191, 0.2)'
      },
      fontFamily: {
        fira: ['FiraCode', 'sans-serif']
      }
    },
  },
  plugins: [],
}

