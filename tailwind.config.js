module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      inset: {
        18: '70px'
      }
    },
    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1379px' },
      lg: { max: '1023px' },
      md: { max: '937px' },
      sm: { max: '639px' }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
