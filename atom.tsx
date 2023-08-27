import { atom } from "recoil";

export const LoginValue = atom({
  key: "로그인 상태",
  default: false,
});

export const TodayValue = atom({
  key: "선택 날짜",
  default: 16,
});
