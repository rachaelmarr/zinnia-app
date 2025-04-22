/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#47567B',
          secondary: '#667593',
          disabled: '#CCD7E6',
          accent: {
            DEFAULT: '#2E7684',
            hover: '#1D576B',
            pressed: '#124058',
          },
          feedback: {
            positive: '#318913',
            warning: '#A85701',
            negative: '#B81E26',
          },
          background: {
            light: '#F5F5F5',
            dark: '#171717',
          }
        },
        fontFamily: {
          serif: ['Literata', 'serif'],
          sans: ['Montserrat', 'sans-serif'],
        },
        borderRadius: {
          xl: '1rem',
          '2xl': '1.5rem',
        }
      },
    },
    plugins: [],
  }
  