"use client";

import { usePathname, useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { LoginValue } from "@/atom";
import { useEffect } from "react";
import { getCookie } from "../utils/setCookie";

// 전체적으로 로그인 상태 확인해주는 함수
export default function AuthChek() {
  // 현재 url정보 가져오기
  const pathname = usePathname();
  const router = useRouter();

  const [loginState, setLoginState] = useRecoilState(LoginValue);

  useEffect(() => {
    const loginToken = getCookie();
    //  로그인이 안되어있는 경우
    if (!loginToken) {
      //  로그인창으로 이동시킴
      router.push("/accounts/login");
      return;
    }
    // 로그인이 되어있는 경우
    //  "account/login"링크로 접속시 "/main"으로 이동시킴
    //  "/"링크로 접속시 "/main"으로 이동시킴
    setLoginState(true);
    if (
      pathname.toString() === "/" ||
      pathname.toString() === "/accounts/login"
    ) {
      console.log("로그인 됨");
      router.push("/main");
      return;
    }
  }, [loginState, router]);
  return null;
}

// 로그인 O
// => /account/login링크로 접속시 /main으로 이동시킴
// => /링크로 접속시 /main으로 이동시킴
// => 나머지의 경우에는 전부 그냥 return

// 로그인 X
// =>모든 링크로 접속시 /account/login으로 이동시킴
