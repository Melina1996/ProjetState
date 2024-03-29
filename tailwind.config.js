/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {backgroundImage:{
      "sidebarOne": "url('./assets/img/bg-sidebar-desktop.svg')",
      "sidebarTwo": "url('./assets/img/bg-sidebar-mobile.svg')"
    },
    fontFamily:{
      "ubuntu" : ['Ubuntu','sans-serif']
    },},
  },
  plugins: [require("daisyui")],
}

