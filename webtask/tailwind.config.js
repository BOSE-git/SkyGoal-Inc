/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'xsm': '600px', 
      },
    },
    colors:{
      'button': '#F27A44',
      'grey':'#7D7D7D',
      'white':'#FFFFFF'
    },
  },
  plugins: [],
}

