import { getCookie, setTokenCookie } from "@/components/util/setCookie";
import axios, { AxiosInstance } from "axios";
import { accountApis } from "./account/accountAPI";
import { IGetRefreshTokenRes } from "./account/accountInterface";

const BASE_URL = "https://xn--b60b50mo0tbqdri.xn--oi2b61z32a.xn--3e0b707e";

export const publicApi: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const privateApi: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    TOKEN: "",
  },
});

// 쿠키 설정
privateApi.interceptors.request.use(function (config) {
  const token = getCookie("TOKEN");
  privateApi.defaults.headers.common.Authorization = token;
  return config;
});

// 리프래시 토큰
privateApi.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (err) {
    const {
      config,
      response: { status },
    } = err;
    if (status === 401) {
      const originRequest = config;
      const res = await accountApis.getAccessTokenFromRefreshToken({
        grant_type: "refresh-token",
        refresh_token: getCookie("REFRESH_TOKEN"),
      });

      if (res.status === 200) {
        setTokenCookie(res.data.access_token);
        originRequest.headers.Authorization = `${res.data.type} ${res.data.access_token}`;

        return axios(originRequest);
      }
      if (res.status === 404) {
        alert("로그인 기간이 만료되었습니다. 다시 로그인하세요.");
        window.location.replace("/account");
      }
    }
    return Promise.reject(err);
  }
);

const getNewAccessToken = async () => {
  const refresh_token = getCookie("REFRESH_TOKEN");

  const res = await accountApis.getAccessTokenFromRefreshToken({
    grant_type: "refresh-token",
    refresh_token,
  });

  if (res.status === 200) {
    privateApi.defaults.headers.common.Authorization = `${res.data.type} ${res.data.access_token}`;
  }
};
