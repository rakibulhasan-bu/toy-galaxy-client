/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7781BC',
        secondary: '#F59C0E',
        tertiary: '#352CC7',
        grey: '#ADADB4',
        skys: '#B2D9EE',
        darkblue: {
          DEFAULT: '#0D0D2B',
          secondary: '#252540',
        },
        blue: {
          DEFAULT: '#3671E9',
          hover: '#2766E6',
        },
        gray: {
          DEFAULT: '#E0E0E0',
        },
        violet: '#2B076E',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
}
