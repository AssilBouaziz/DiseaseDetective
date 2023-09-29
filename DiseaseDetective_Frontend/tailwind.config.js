/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        disease: "url('/src/Assets/bg.png')",
        homePage: "url('/src/Assets/homePage.png')",
      },

      colors: {
        green: {
          1: "#69E6A6",
        },
        blue:{
          1:"#0A2640",
        }
      },
    },
  },
  plugins: [],
};
