/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'grayCustom': {
          '50': '#f7f7f7',
          '100': '#ededed',
          '200': '#dcdcdc',
          '300': '#c8c8c8',
          '400': '#adadad',
          '500': '#999999',
          '600': '#888888',
          '700': '#7b7b7b',
          '800': '#676767',
          '900': '#545454',
          '950': '#363636',
        },
        'secundary': '#4f4f4f',

      },
      spacing: {
        '1200': '75rem',
      }
    },
  },
  plugins: [],
}

