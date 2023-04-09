/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // "gray-20": "#F8F4EB",
        // "gray-50": "#EFE6E6",
        // "gray-100": "#DFCCCC",
        // "gray-500": "#5E0000",
        // "primary-100": "#FFE1E0",
        // "primary-300": "#FFA6A3",
        // "primary-500": "#FF6B66",
        // "secondary-400": "#FFCD5B",
        // "secondary-500": "#FFC132",

        'lightblack': '#161C23',
        'darkblack': '#0A1018',
        'lightorange': '#E2C19D',
        'darkorange': '#C78D4E',
        'brown': '#7D6D5C',
        'blue': '#5151FF',
        'lightblue': '#A4A9D6',
        'white': '#FFFFFF',
        'lightgray': '#ADABAA',
        'darkgray': '#474848',
        'offblack': '#404854',
        'bgblack': '#272A2F',
        'path': '#707070',
        
        
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        logo: "url('./logo.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};