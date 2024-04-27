/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom text colors
        'my-text-light': '#ffffff', // Light mode
        'my-text-dark': '#333333', // Dark mode
    },
    },
    
  },
  plugins: [require("daisyui")],
}

