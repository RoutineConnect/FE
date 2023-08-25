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
        LoginForm: "500px",
        LoginInput: "250px",
      },
      height: {
        HRoutine: "700px",
        LoginForm: "700px",
        LoginInput: "50px",
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
        kakaoBg: "#FEE500",
        LoginBlue: "#1FA0C7",
        theme_a: "#05161A",
        theme_b: "#072E33",
        theme_c: "#0C7075",
        theme_d: "#0F969C",
        theme_e: "#6DA5C0",
        theme_f: "#294D61",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
