/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,css}",
    "./src/components/**/*.{js,jsx,ts,tsx,css}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
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
        "main-bg": "#FAFBFB",
        "main-dark-bg": "#20232A",
        "secondary-dark-bg": "#33373E",
        "light-gray": "#F7F7F7",
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
