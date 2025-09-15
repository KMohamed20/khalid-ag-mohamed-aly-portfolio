/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0d1117",
        secondary: "#c9d1d9",
        accent: "#58a6ff",
        success: "#7ee787",
      },
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        "code-float": "codeFloat 12s linear infinite",
      },
      keyframes: {
        codeFloat: {
          "0%": { transform: "translateY(100vh) rotate(0deg)" },
          "100%": { transform: "translateY(-100px) rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
