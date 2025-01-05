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
        'herobg': "url(./src/assets/media/herobg.webp)",
        'vherobg': "url(./src/assets/media/herobg2.webp)",
        'wave-top': "url('./src/assets/Media/waveTop.svg')",
        'wave-bottom': "url('./src/assets/Media/waveBottom.svg')",
        "me": "url('./src/assets/Media/me.jpg')",
      }
    }
  },
  plugins: [],
}

