/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        modal: "modal 0.3s",
      },
      keyframes: {
        modal: {
          "0%, 100%": { opacity: 0, height: 0 },
          "100%": { opacity: 1, height: "100vh" },
        },
      },
      colors: {
        primary: "#223b38",
        secondary: "#C9D9CD",
        dark: "#151515",
        light: "#F8EEDA",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
