export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3D2652", // deep purple
        "accent-green": "#28AF6E", // bright accent green
        "soft-green": "#99D562", // light green
        lavender: "#E1D5EC", // soft lavender
        dark: "#1B1128", // dark background
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
