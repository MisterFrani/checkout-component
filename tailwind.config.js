/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "custom-bg": "#0000000a",
      },
      gradientColorStops: {
        "custom-green": "#e2fc26",
        "custom-yellow": "#f2e526",
      },
      fontSize: {
        "pikko-sm": "33rem",
      },
      colors: {
        "pikkoGray-1": "#5d5d5d",
        "pikkoRed-1": "red",
        "pikkoYellow-1": "#f2e526",
        "pikkoYellow-2": "#e2fc26",
      },
      backgroundImage: {
        "pikko-gradient-1": "linear-gradient(135deg, #e2fc26, #f2e526)",
        "pikko-gradient-2": "linear-gradient(255deg, #e2fc26, #f2e526)",
      },
    },
  },
  plugins: [],
};
