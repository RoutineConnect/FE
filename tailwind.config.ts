import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"],
      },
      width: {
        sideBar: "277px",
        LoginForm: "500px",
        LoginInput: "250px",
      },
      height: {
        HRoutine: "700px",
        LoginForm: "700px",
        LoginInput: "50px",
      },
      fontSize: {
        sideBar: ["16px", "17.5px"],
      },
      gridTemplateColumns: {
        MainRoutine: " 100px 450px 80px",
      },
      spacing: {
        70: "70px",
      },
      colors: {
        kakaoBg: "#FEE500",
        color_bg: "#EFF2F8",
        color_sub_text: "#C3C7D5",
        color_main_text: "#7A83D0",
        color_accent_text: "#294694",
        color_default_text: "#2B3745",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
