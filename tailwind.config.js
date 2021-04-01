module.exports = {
  prefix(selector) {
    return ''
  },
  purge: [
    './resources/**/*.{blade.php,js}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
