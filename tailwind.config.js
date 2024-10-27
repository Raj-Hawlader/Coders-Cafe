/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        font1: ["Kanit", "sans-serif"],
      },
      colors:{
        primary:"#f97316",
        secondary:"#64748b",
      },
      container:{
          center:true,
          padding:{
            DEFAULT:"1rem",
            sm:"2rem",
          }
      }
    },
  },
  plugins: [],
}

