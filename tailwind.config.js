/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Adding Tahoma to the font family list
        
      },
      colors: {
        'body-bg': '#D9D9D9',
        'body-text': '#F5F5F5',
        'yellow-text': '#DEFF00',
        'red-text':'#BA0A0A',
        'hover-text':'#FF9D9D',
        'footer-color':'#353535',
        'gray-text':'#999',
      },
      screens: {
        'xs': '320px',  // Custom for 320px screens
        'sm-xs': '375px',  // Custom for 375px screens
        'sm-md': '425px',  // Custom for 425px screens
        // Default breakpoints remain intact
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}

