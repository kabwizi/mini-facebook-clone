module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      inset: {
        18: '70px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
