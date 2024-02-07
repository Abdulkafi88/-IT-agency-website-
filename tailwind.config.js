/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        "hsl-224-48-22": "hsl(224, 48%, 22%)",
        "hover-hsl-342-100-50": "hsl(342, 100%, 50%)", 
      },
      backgroundColor: {
        "hsl-244-86-59": "hsl(244, 86%, 59%)",
        "hover-hsl-342-100-50": "hsl(342, 100%, 50%)", 
      },
    },
  },
  plugins: [],
};
