/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        fig: ["Figtree", "sans-serif"],
      },
    },
    colors: {
      white: "hsl(0, 0%, 100%)",
      yellow: "hsl(47, 88%, 63%)",
      gray: {
        500: "hsl(0, 0%, 42%)",
        950: "hsl(0, 0%, 7%)",
      },
    },
  },
  plugins: [],
};
