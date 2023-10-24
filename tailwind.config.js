/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryBlue : '#190482',
        secondaryBlue : '#192655',
        primaryGrey : '#F0F0F0'
      },
      fontFamily:{
        noto : ['Noto Sans','sans'],
        logo : ['DM Serif Display', 'sans']
      },
      fontSize:{
        title: '30px',
        logo : '28px',
        menu : '24px'
      },
      width : {
        'imageWidth' : '400px',
        'cardWidth' : '350px',
      },
      height : {
        'imageHeight' : '100px',
        'cardHeight' : 'auto'
      },
      borderRadius : {
        'cardRadius':'10px'
      }
    },
  },
  plugins: [],
}

