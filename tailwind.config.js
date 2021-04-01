module.exports = {
  // Removing this prefix function allows "npm run dev" to work correctly
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
