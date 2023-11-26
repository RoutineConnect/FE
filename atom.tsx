import { atom } from "recoil";

const date: Date = new Date();
const defaultDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

export const LoginValue = atom({
  key: "로그인 상태",
  default: false,
});

export const pickDateValue = atom({
  key: "선택 날짜",
  default: defaultDate,
});

export const AuthBlockValue = atom({
  key: "로그인 블럭 위치",
  default: false,
});
