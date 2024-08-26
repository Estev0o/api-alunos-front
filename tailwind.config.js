/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  boxShadow: {
    shape: '8px 8px 8px rgba(0,0,0,0.13), 8px 4px 4px rgba(0,0,0,0.1), 8px 2px 2px rgba(0,0,0,0.1), 8px 8px 8px 1px rgba(0,0,0,0.1), inset 0px 0px 0px 1px rgba(255,255,255,0.3), inset 0px 1px 0px rgba(255,255,255,0.3)' ,
  },
  plugins: [],
}