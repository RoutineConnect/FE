// 리프래시 토큰
export interface IGetRefreshTokenReq {
  grant_type: string;
  refresh_token: string;
}

export interface IGetRefreshTokenRes {
  access_token: string;
  type: string;
}

// 로그인
export interface ILoginReq {
  email: string;
  password: string;
}

export interface ILoginRes {
  access_token: string;
  refresh_token: string;
  type: string;
}

// 회원가입
export interface ISignupReq {
  email: string;
  name: string;
  password: string;
}

export interface ISignupRes {
  code: number;
  msg: string;
  success: boolean;
}

// 이메일 중복 체크
export interface IExistEmailCheckReq {
  email: string;
}

export interface IExistEmailCheckRes {
  message: string;
  is_duplicated: boolean;
}

// 이름 중복 체크
export interface IExistNameCheckReq {
  name: string;
}

export interface IExistNameCheckRes {
  message: string;
  is_duplicated: boolean;
}
