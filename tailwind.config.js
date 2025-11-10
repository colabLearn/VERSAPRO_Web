/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#3366ff",
        "primary-light": "#6B8AFF",
        "primary-dark": "#03004E",
        "text-color": "#0f172a",
        "secondary": "#64748b",
      }
    },
  },
  plugins: [],
}
