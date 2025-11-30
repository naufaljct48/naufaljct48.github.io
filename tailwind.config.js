/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      colors: {
        dark: {
          DEFAULT: "#0a0a0f",
          100: "#1a1a2e",
          200: "#16162a",
          300: "#12121f",
          400: "#0e0e18",
          500: "#0a0a0f",
        },
        light: {
          DEFAULT: "#fafafa",
          100: "#ffffff",
          200: "#f5f5f7",
          300: "#e8e8ed",
        },
        accent: {
          DEFAULT: "#10b981",
          light: "#34d399",
          dark: "#059669",
          muted: "#6ee7b7",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "glass-gradient": "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
        "dark-glass": "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
        "aurora": "linear-gradient(135deg, #10b981 0%, #059669 100%)",
        "mesh-gradient": "radial-gradient(at 40% 20%, hsla(160,84%,39%,0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(160,84%,39%,0.1) 0px, transparent 50%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "shimmer": "shimmer 2s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "gradient": "gradient 8s ease infinite",
        "border-beam": "border-beam 4s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(16, 185, 129, 0.2)" },
          "100%": { boxShadow: "0 0 40px rgba(16, 185, 129, 0.3)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "border-beam": {
          "0%": { offsetDistance: "0%" },
          "100%": { offsetDistance: "100%" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.36)",
        "glass-sm": "0 4px 16px 0 rgba(0, 0, 0, 0.2)",
        "glow": "0 0 40px rgba(16, 185, 129, 0.2)",
        "inner-glow": "inset 0 0 20px rgba(255, 255, 255, 0.05)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
