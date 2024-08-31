/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "aeonik-regular": ["Aeonik Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
