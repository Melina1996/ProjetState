/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {backgroundImage:{
      "sidebarOne": "url('./assets/img/bg-sidebar-desktop.svg')"
    },
    fontFamily:{
      "barlow" : ['Barlow Semi Condensed','sans-serif']
    },},
  },
  plugins: [require("daisyui")],
}

