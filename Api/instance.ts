import axios, { AxiosInstance } from "axios";

const BASE_URL =
  "https://xn--b60b50mo0tbqdri.xn--oi2b61z32a.xn--3e0b707e/docs/index.html";

export const publicApi: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const privateApi: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    TOKEN: "",
  },
});

export const setToken = (token: string) => {
  privateApi.defaults.headers["TOKEN"] = token;
  //   privateApi.defaults.headers["AUTHORIZATION"] = "Baerer" + token;
  console.log("토큰 설정 완료");
};
