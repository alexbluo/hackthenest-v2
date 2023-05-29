const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./components/**/*.tsx", "./pages/**/*.tsx", "./sections/**/*.tsx"],
  theme: {
    fontFamily: {
      sans: ["var(--font-sans)", ...fontFamily.sans],
      mono: ["var(--font-mono)", ...fontFamily.mono],
      circular: ["var(--font-flow-circular)"],
      default: ["var(--font-sans)", ...fontFamily.sans],
    },
    colors: {
      "blue-light": "#61a7cf",
      "blue-mid": "#2386bf",
      "blue-dark": "#005274",
      gold: "#ffbd59",
      bronze: "#cd8031",
      black: "#1a1a1a",
      ice: "#b2e6fe",
      white: "#ffffff",
      red: "#dc3545",
      green: "#00c777",
      grey: "#808080",
      transparent: "transparent",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "4rem",
        lg: "8rem",
      },
    },
  },
  plugins: [],
};
