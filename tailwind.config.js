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
      borderWidth: {
        def: "3px",
      },
      height: {
        def: "3px",
      },
    },
  },
  plugins: [],
};
