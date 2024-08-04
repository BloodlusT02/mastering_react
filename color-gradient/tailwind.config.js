/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "inter": "Inter",
        "ibm-plex": "IBM Plex Serif",
        "roboto": "Roboto Mono"
      },
      backgroundImage: {
        "purple-gradient": "linear-gradient(220.55deg, #8A88FB 0%, #D079EE 100%)"
      },
      screens: {
        "nine-hundred": "900px",
        "nine-sixty": "960px",
        "six-twenty": "620px"
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}

