/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        discord: {
          primary: '#7289da',
          background: {
            primary: '#36393f',
            secondary: '#2f3136',
            tertiary: '#202225',
          },
          text: {
            primary: '#ffffff',
            secondary: '#b9bbbe',
          },
          border: '#4f545c',
          notification: '#f04747',
        },
      },
    },
  },
  plugins: [],
}