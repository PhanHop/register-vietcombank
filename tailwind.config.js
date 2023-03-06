/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', 
          "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
         'bg-linear-blue': "linear-gradient(89.75deg, #F8FAEC 2.88%, #EAF7FF 99.78%)",
      },
    },
  },
  plugins: [],
}
