import { Container } from "postcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      extend: {
        colors: {
          primary: "#3490dc", // Customize this color code
          secondary: "#ffed4a", // Customize this color code
        },
        Container: {
          center: true,
          padding: {
            default: "1rem",
            sm: "3rem",
          },
        },
      },
    },
  },
  plugins: [],
};
