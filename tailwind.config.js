module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        load: 'load 6s ease-in-out forwards',
      },
      keyframes: {
        load: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
     }},
  },
  theme: {
    colors: {
      one: '#17252A',
      two :'#2B7A7B',
      three : '#3AAFA9',
      four :'#DEF2F1',
      five:'#FEFFFF',
      six:'#fada5e',
      seven:'#dc143c',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
