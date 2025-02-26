/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6600', 
        secondary: '#FF6600',
        bgColor:'#6B2B00',
      },
      fontFamily: {
        Montserrat: ['Montserrat'],
      },
      margin: {
        'container': '112px',
        
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
 
  ],
};
