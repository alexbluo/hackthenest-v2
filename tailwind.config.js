/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./components/*.{ts,tsx}", "./pages/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {},
    },
  },
  plugins: [],
};
