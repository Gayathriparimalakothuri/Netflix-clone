/** @type {import('tailwindcss').Config} */
import tailwindscrollbarHide from "tailwind-scrollbar-hide"
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [tailwindscrollbarHide],
};
