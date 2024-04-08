import { AxiosResponse } from "axios";
import { privateApi, publicApi } from "../instance";
import {
  IExistEmailCheckReq,
  IExistEmailCheckRes,
  IExistNameCheckReq,
  IExistNameCheckRes,
  IGetRefreshTokenReq,
  IGetRefreshTokenRes,
  ILoginReq,
  ILoginRes,
  ISignupReq,
  ISignupRes,
} from "./accountInterface";

export const accountApis = {
  // 토큰 재발급
  getAccessTokenFromRefreshToken: (data: IGetRefreshTokenReq): Promise<AxiosResponse<IGetRefreshTokenRes>> => {
    return publicApi.post<IGetRefreshTokenReq, AxiosResponse<IGetRefreshTokenRes>>("/sign-api/access-token", data);
  },

  // 로그인
  login: (data: ILoginReq): Promise<AxiosResponse<ILoginRes>> => {
    return privateApi.post<ILoginReq, AxiosResponse<ILoginRes>>(`/sign-api/sign-in`, data);
  },

  // 회원가입
  signup: (data: ISignupReq): Promise<AxiosResponse<ISignupRes>> => {
    return privateApi.post<ISignupReq, AxiosResponse<ISignupRes>>(`/sign-api/sign-up`, data);
  },

  // 이메일 중복 체크
  existEmailCheck: (data: IExistEmailCheckReq): Promise<AxiosResponse<IExistEmailCheckRes>> => {
    return publicApi.get<IExistEmailCheckReq, AxiosResponse<IExistEmailCheckRes>>(`/sign-api/check-user-email`, {
      params: { email: data.email },
    });
  },

  // 이름 중복 체크
  existNameCheck: (data: IExistNameCheckReq): Promise<AxiosResponse<IExistNameCheckRes>> => {
    return publicApi.get<IExistNameCheckReq, AxiosResponse<IExistNameCheckRes>>(`/sign-api/check-user-name`, {
      params: { name: data.name },
    });
  },
};
