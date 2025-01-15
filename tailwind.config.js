/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Figtree", "sans-serif"],
      header: ['"Rammetto One"', "serif"],
      subheader: ["Martel", "serif"],
    },
  },
  plugins: [],
};
