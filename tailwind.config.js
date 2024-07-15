const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app.pug', './index.pug', './views/**/*.pug', './assets/**/*.pug'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1100px',
      xl: '1400px',
      '2xl': '1820px'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      h: {
        100: '#ffffff',
        200: '#f4f4f6',
        300: '#e6e6e9',
        400: '#9999a1',
        500: '#66666e',
        600: '#353638',
        700: '#292a2d',
        800: '#1e1f21',
        900: '#000000',
        blue: '#5db0d7',
        orange: '#ff5544'
      }
    },
    extend: {
      spacing: {
        idx: 'var(--h-idx)',
        pem: 'var(--h-pem)',
        s: 'var(--h-s)',
        c: 'var(--h-c)',
        h: 'var(--h-h)'
      },
      fontSize: {
        xxs: '0.625rem'
      },
      keyframes: {
        loading: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        loading: 'loading 1s linear infinite'
      },
      fontFamily: {
        sans: [
          'SUIT',
          'ui-sans-serif', 'system-ui', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'
        ],
        mono: [
          '"Source Code Pro"',
          ...defaultTheme.fontFamily.mono
        ]
      }
    }
  }
}
