// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1f2937', // Dark gray
        secondary: '#4b5563', // Medium gray
        accent: '#fbbf24', // Amber
        background: '#f3f4f6', // Light gray
      },
    },
  },
  plugins: [],
}
