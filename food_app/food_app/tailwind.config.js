/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins"]
    },
    extend: {
      backgroundImage: {
        'bgImage': "url('/images/bg (1).png')"
      }
    },
  },
  plugins: [],
}

