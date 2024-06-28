/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        white2: '#FCFCFC',
        red: '#DC4A2D',
        'light-gray': '#E7E7E7',
        'light-pink': '#FCB4A5',
        'light-gray2': '#B0B0B0',
        'light-gray3': '#3D3D3D', //font
        green: '#17B26A',
        'dark-green': '#067647',
        'light-green': '#ABEFC6',
        'lightest-green': '#ECFDF3',
      },
    },
  },
  plugins: [],
}

