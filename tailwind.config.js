/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        gray: {
          800: "#2d2d2d", // Gelap tapi tidak terlalu pekat
          900: "#222222", // Sedikit lebih terang dari sebelumnya
        },
      },
      backgroundImage: {
        "dark-gradient": "linear-gradient(to bottom, #222222, #2d2d2d)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
