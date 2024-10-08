/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        fig: ["Figtree", "sans-serif"],
      },
      boxShadow: {
        DEFAULT: "-1px -1px hsl(0, 0%, 7%), 8px 8px hsl(0, 0%, 7%)",
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
