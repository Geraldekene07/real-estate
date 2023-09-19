/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      'md': '800px',
    },

    extend: {
      fontFamily:{
        Nunito:"Nunito Sans",
        Sans: "sans-serif",
        Helvetica:"Helvetica",
        Arial:"Arial",

      },
      fontWeight:{
        400:"400",
        700:"700"

      },
      colors:{
        'custom-blue': '#000040',
        'bg':'transparent'
      }
    },
  },
  plugins: [],
}

