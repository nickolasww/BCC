/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '5.4xl': '54px'
    },
    extend: {
      fontFamily: {
        Poppins: ['Poppins','sans-serif'],
    },
    padding: {
      '50': '199px',
      '70': '282px',
    },
    margin: {
      '100': '550px'
    },

    colors: {
      purple:{
        100: '#ECE2FF',
        200: '#7E5FBB',
        300: '#5927BB', //schofinity
        400: '#290A66',
        500: '#FFECCF',
      },
      Orange:{ 
        100: '#FFECCF',
        200: '#FFC166',
        300: '#5927BB', //schofinity 2
      },
      darkOrange: '#B2751B',

      info: '#2F80ED',
      success:'#27AE60', //
      warning:'#E2B93B',
      error: '#E82525',
      Black:{
        100:'#000000',
        200:'#1D1D1D',
        300:'#282828',
      },
      Gray:{ 
        100: '#333333',
        200: '#4F4F4F',
        300: '#BDBDBD',
        400: '#EDEDED',
      }

    },

    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "light",
    base: false, 
  },
  }
