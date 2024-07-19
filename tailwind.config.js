/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"FreeSans"'],
      serif: ['"Instrument"'],
      italic: ['"InstrumentItalic"'],
      symbola: ['"Symbola"'],
    },
    extend: {
      colors: {
        light: {
          DEFAULT: "#ffffff",
        },
        dark: {
          DEFAULT: "#000000",
        },
        accent: {
          DEFAULT: "#ff2ce3",
        },
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /col-start-(1|2|3|4|5|6|7|8|9|10|11|12)/,
      variants: ["md"],
    },
    {
      pattern: /col-span-(1|2|3|4|5|6|7|8|9|10|11|12)/,
      variants: ["md"],
    },
  ],
};
