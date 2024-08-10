/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,ts,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C778DD",
        // gray: "#ABB2BF",
        // background: "#282C33",
        // primary: "#EB3678",
        background: "#212A3E",
        gray: "#9BA4B5",
        'transparent-gray': 'rgba(171, 178, 191, 0.2)',
        'transparent-primary':'rgba(199, 120, 221, 0.2)',
      },
      fontFamily: {
        fira: ['FiraCode', 'sans-serif']
      }
    },
  },
  plugins: [],
}

