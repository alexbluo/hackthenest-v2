/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./components/*.{ts,tsx}", "./pages/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {},
    },
    colors: {
      "blue-light": "#61a7cf",
      "blue-mid": "#2386bf",
      "blue-dark": "#005274",
      orange: "#ffbd59",
      grey: "#808080",
    },
  },
  plugins: [],
};
