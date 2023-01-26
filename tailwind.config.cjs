/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#ed2734",
        green: "#3a5743",
        beige: "#f0edc4",
        grana: "#7f1421",
        white: "#eee",
      },
      height: {
        "10v": "10vh",
      },
      minHeight: {
        "90v": "90vh",
      },
      fontFamily: {
        colvetica: ["Colvetica"],
        monbaiti: ["Monbaiti"],
      },
    },
  },
  plugins: [],
};
