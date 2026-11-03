/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"BDO Grotesk"', "system-ui", "sans-serif"],
      },
      colors: {
        ground: "var(--ground)",
        surface: "var(--surface)",
        ink: "var(--ink)",
        "ink-2": "var(--ink-2)",
        rule: "var(--rule)",
        "on-ink": "var(--on-ink)",
        "line-dimensi": "var(--line-dimensi)",
        "line-navitek": "var(--line-navitek)",
        "line-dharmais": "var(--line-dharmais)",
        "line-web3": "var(--line-web3)",
        "line-security": "var(--line-security)",
        "line-origin": "var(--line-origin)",
      },
      maxWidth: {
        page: "80rem",
      },
    },
  },
  plugins: [],
};
