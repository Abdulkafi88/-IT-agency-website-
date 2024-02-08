// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        "hsl-224-48-22": "hsl(224, 48%, 22%)",
        "hsl-219-13-44": "hsl(219, 13%, 44%)",
        "hsl-342-100-50": " hsl(342, 100%, 50%);",
        "hover-hsl-342-100-50": "hsl(342, 100%, 50%)",
      },
      backgroundColor: {
        "hsl-244-86-59": "hsl(244, 86%, 59%)",
        "hsl-342-100-50": "hsl(342, 100%, 50%)",
        "hover-hsl-342-100-50": "hsl(342, 100%, 50%)",
        "hover-hsl-244-86-59": "hsl(244, 86%, 59%)",
        "hsl-0-0-100": "hsl(0, 0%, 100%)",
        "hsl-0-0%-96%": "hsl(0, 0%, 96%)",
      },
    },
  },
  plugins: [],
};
