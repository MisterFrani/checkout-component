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
    },
  },
  plugins: [],
};

