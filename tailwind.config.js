/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {},
    // colors: {},
    fontFamily: {
      sans: ["Figtree", "sans-serif"],
      header: ['"Rammetto One"', "serif"],
      // header: ['"Bowlby One SC"', "serif"],
      subheader: ["Martel", "serif"],
    },
  },
  plugins: [],
};
