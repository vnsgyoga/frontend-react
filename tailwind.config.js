/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,css}",
    "./src/components/**/*.{js,jsx,ts,tsx,css}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Helvetica Neue", "sans-serif"],
      body: ["Helvetica Neue", "sans-serif"],
      secondary: ["Playfair Display", "serif"],
    },
    extend: {
      fontSize: {
        "small": "10px",
        "medium-sm": "11px",
        "medium": "12px",
        "regular-sm": "13px",
        "regular": "14px",
        "h5": "16px",
        "h4": "18px",
        "h3": "20px",
        "h2": "24px",
        "h1": "28px",
      },
      backgroundColor: {
        "main-light-bg": "#EEEEEE",
        "main-dark-bg": "#2B3241",
        "secondary-light-bg": "#F7F2E7",
        "white": "#FFFFFF",
        "black": "#000000",
        "dark": "#2B3241",
        "gray": "#B0B1B1",
        "orange": "#EC7545",
        "half-transparent": "rgba(0, 0, 0, 0.5)",
      },
      colors: {
        "white": "#FFFFFF",
        "black": "#000000",
        "dark": "#2B3241",
        "gray": "#B0B1B1",
        "orange": "#EC7545",
        "half-transparent": "rgba(0, 0, 0, 0.5)",
      },
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        color: "rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
}
