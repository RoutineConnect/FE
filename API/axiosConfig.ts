import axios, { AxiosInstance } from "axios";

const BASE_URL = "https://port-0-routine-connect-be-4fju66f2clmx3fx61.sel5.cloudtype.app";

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
  console.log("토큰 설정 완료");
};
