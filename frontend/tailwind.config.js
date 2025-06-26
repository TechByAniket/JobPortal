// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      // Make 'Inter' the default sans font
        sans: ["Outfit", "sans-serif"],
    },
  },
  plugins: [],
}