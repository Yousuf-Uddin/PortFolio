/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'herobg': "url(./src/assets/Herobg.webp)",
        'vherobg': "url(./src/assets/herobg2.webp)",
        'wave-top': "url('./src/assets/waveTop.svg')",
        'wave-bottom': "url('./src/assets/waveBottom.svg')",
        "me": "url('./assets/me.jpg')",
      }
    }
  },
  plugins: [],
}

