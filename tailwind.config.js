/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "noto-sans-ethiopic": ["Noto Sans Ethiopic", "sans-serif"],
        "abyssinica-sil": ["Abyssinica SIL", "serif"],
        "ethiopic-wookianos": ["Ethiopic Wookianos", "serif"],
        "ethiopic-hiwua": ["Ethiopic Hiwua", "serif"],
      },
    },
  },
  plugins: [],
};
