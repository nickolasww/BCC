/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: 'font-size: 0.75rem; ',

    },
    extend: {
      fontFamily: {
        Poppins: ['Poppins','sans-serif'],
    },

    colors: {
      purple:{
        100: '#ECE2FF',
        200: '#7E5FBB',
        300: '#5927BB', //schofinity
        400: '#290A66',
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
  plugins: [],
  }
