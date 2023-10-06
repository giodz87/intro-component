/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: "780px",
      // => @media (min-width: 375px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1440px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily: { poppins: ["Poppins", "sans"] },
    },
  },
  plugins: [],
};
