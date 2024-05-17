/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gbPink-100': '#ed6d8c',
        'gbPink-300': '#ef476f',
        'gbPink-500': '#eb2857',
        'gbRed-300': '#ef233c',
        'gbGreen-100': '#32fcd9',
        'gbGreen-300': '#29c9ad',
        'gbGreen-500': '#1c8c79',
        'gbWarmWhite': '#fff0e3',
        'gbGray-100': '#dddfde',
        'gbGray-300': '#565657',
        'gbGray-500': '#2a2a2b',
        'gbBeige': '#fec89a',
        'gbOrange-300': '#e85d04',
        'gbOrange-500': '#db5600'
      }
    },
    content: {
      loudtext: "url(./assets/LoudText.png)",
      wave: "url(./assets/splash-arc.svg)",
      wPageTitle: "url(./assets/WomensPageTitle.svg)",
      starryNight: "url(./assets/StarryNightTitles.svg)",
    },
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
      montserrat: ["MontSerrat", "sans-serif"],
    },
    screens: {
      xs: "480px",
      sm: "800px",
      md: "1060px",
    },
  },
  plugins: [require("@tailwindcss/forms")],

}

