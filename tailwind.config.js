
module.exports = {
  mode: 'jit',
  purge: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      primary: '#7300ff50',
      white: '#fff'
    },
  },
  variants: {},
  plugins: [],
}