/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FAF4E6",
          deep: "#F0E4C7",
        },
        forest: {
          DEFAULT: "#1E4B33",
          light: "#2E6647",
          dark: "#14331F",
        },
        leaf: {
          DEFAULT: "#5FA346",
          light: "#7FBF63",
          dark: "#447A33",
        },
        gold: {
          DEFAULT: "#E4A937",
          light: "#F0C268",
          dark: "#BD8620",
        },
        clay: {
          DEFAULT: "#C1502E",
          light: "#D97350",
          dark: "#9C3D22",
        },
        ink: "#20281F",
      },
      fontFamily: {
        display: ['"Fraunces"', "serif"],
        body: ['"Karla"', "sans-serif"],
        mono: ['"Space Mono"', "monospace"],
      },
      backgroundImage: {
        furrow:
          "repeating-linear-gradient(90deg, transparent, transparent 18px, rgba(30,75,51,0.08) 18px, rgba(30,75,51,0.08) 20px)",
      },
    },
  },
  plugins: [],
};
