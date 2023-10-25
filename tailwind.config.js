/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.php',
    './**/*.php',
    'other-classes.txt',
  ],
  theme: {
    extend: {
      screens: {
        'md': '782px',
      },
      colors: {
        primary: {
          DEFAULT: '#3B71CA',
          600: '#3061AF',
          700: '#285192',
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-debug-screens'),
  ],
}

