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
        'herobg': "url(./assets/Herobg.webp)",
        'vherobg': "url(./assets/herobg2.webp)",
        'wave-top': "url('./assets/waveTop.svg')",
        'wave-bottom': "url('./assets/waveBottom.svg')",
        "me": "url('./assets/me.jpg')",
      }
    }
  },
  plugins: [],
}

