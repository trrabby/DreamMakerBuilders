/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C5EC1A",
        accent: "#03AEB6BF"
    },
    },
    
  },
  plugins: [require("daisyui")],
}

