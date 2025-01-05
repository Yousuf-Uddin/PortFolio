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
        'herobg': "url(./src/media/herobg.webp)",
        'vherobg': "url(./src/media/herobg2.webp)",
        'wave-top': "url('./src/Media/waveTop.svg')",
        'wave-bottom': "url('./src/Media/waveBottom.svg')",
        "me": "url('./src/Media/me.jpg')",
      }
    }
  },
  plugins: [],
}

