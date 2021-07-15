module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      green: {
        transparent: '#1322138f',
        DEFAULT: '#132213',
      },
      red: {
        DEFAULT: '#EF442D',
      },
      yellow: {
        DEFAULT: '#FAF286',
      },
      orange: {
        DEFAULT: '#FBAD18',
      },
      gray: {
        light: '#F4F4F4',
        DEFAULT: '#EDEDED',
        dark: '#BEBEBE',
      },
      white: {
        DEFAULT: '#ffffff',
      },
    },
    fontFamily: {
      sans: ['Archivo', 'sans- serif'],
      serif: ['Bitter', 'serif'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
