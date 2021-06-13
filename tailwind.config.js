const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // colors: {
    //   teal100:'#E6FFFA',
    //   teal200:'#B2F5EA',
    //   teal300:'#81E6D9',
    //   teal400:'#4FD1C5',
    //   teal500:'#38B2AC',
    //   teal600:'#319795',
    //   teal700:'#2C7A7B',
    //   teal800:'#285E61',
    //   teal900:'#234E52',
    //   black: '#010101',
    //   red: '#a83246'
    // },
    // screens: {
    //   'tablet': '640px',
    //   'cel': {'max': '400px'},
    // },
    extend: {
      screens: {
        'tablet': '640px',
        'cel': {'max': '400px'},
      },
      colors: {
        gray: { //alterar um tom do gray existente, pega todos os gray dentro de color e substitiu o 900
          ...colors.gray,
          '900': '#999',
        },
        'teal-100':'#E6FFFA',
        'teal-200':'#B2F5EA',
        'teal-300':'#81E6D9',
        'teal-400':'#4FD1C5',
        'teal-500':'#38B2AC',
        'teal-600':'#319795',
        'teal-700':'#2C7A7B',
        'teal-800':'#285E61',
        'teal-900':'#234E52',

        'orange-100': '#FFFAF0',
        'orange-200': '#FEEBC8',
        'orange-300': '#FBD38D',
        'orange-400': '#F6AD55',
        'orange-500': '#ED8936',
        'orange-600': '#DD6B20',
        'orange-700': '#C05621',
        'orange-800': '#9C4221',
        'orange-900': '#7B341E',

        'rocketseat-purple': '#7159c1'
      },
    },
    spacing: {
      '100': '26rem'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
