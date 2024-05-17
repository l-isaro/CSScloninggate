/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "web-grey": "#333333",
        "light-grey": "#d5d5d5",
        "dark-grey": "#413c3b",
        "web-brown": "#a18a4d",
        whiteSmoke: "#f2f2f2",
        "title-grey": "#999999",
      },
    },
  },
  plugins: [],
};
