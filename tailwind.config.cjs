/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
         sm: "576px",
         md: "720px",
         lg: "1024px",
      },
      padding: {
        DEFAULT: "1.5rem",
        md: "3rem",
        lg: "4rem",
      },
    },
    extend: {
      colors: {
        blue: {
          500: '#2563eb'
        }
      },
      borderWidth: {
        DEFAULT: "1px"
      }
    },
  },
  plugins: [],
}
