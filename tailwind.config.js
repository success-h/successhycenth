module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      dropShadow: {
        "3xl": "0 7px 3px rgba(206, 0, 247, 0.25)",
        "4xl": [
          "0 35px 35px rgba(125, 0, 150, 0.25)",
          "0 45px 65px rgba(125, 0, 150, 0.15)",
        ],
      },
    },
  },
  plugins: [],
};
