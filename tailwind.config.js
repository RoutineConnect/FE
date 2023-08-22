/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        sideBar: "350px",
        LoginForm: "400px",
      },
      height: {
        HRoutine: "700px",
        LoginForm: "600px",
      },
      fontSize: {
        sideBar: ["20px", "28px"],
      },
      gridTemplateColumns: {
        MainRoutine: " 100px 450px 80px",
      },
      spacing: {
        70: "70px",
      },
      colors: {
        LoginBlue: "#1FA0C7",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
