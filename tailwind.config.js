/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          lightest: "#272C46",
          lighter: "#1D233E",
          light: "#0f1524",
          DEFAULT: "#03081A",
          dark: "#020611",
        },
        secondary: {
          // light: "#414141",
          DEFAULT: "#ffffff",
          dark: "#afafaf",
        },
        accent: {
          light: "#4594DD",
          DEFAULT: "#247BCC",
          // dark: "#065154",
        },
        accentOrange: {
          // light: "#23a1a6",
          DEFAULT: "#F29846",
          dark: "#B2661E",
        },
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
