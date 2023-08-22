"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { LoginValue } from "@/atom";

// 전체적으로 로그인 상태 확인해주는 함수
export default function AuthChek() {
  // 현재 url정보 가져오기
  const pathname = usePathname();
  const router = useRouter();
  //  로그인정보 가져오기 ( 일시적으로 값 지정 )
  const isLoggedIn = useRecoilValue(LoginValue);

  useEffect(() => {
    //  로그인이 안되어있는 경우
    if (!isLoggedIn) {
      //  로그인창으로 이동시킴
      router.push("/accounts/login");
    }
    // 로그인이 되어있는 경우
    else {
      //  "account/login"링크로 접속시 "/main"으로 이동시킴
      //  "/"링크로 접속시 "/main"으로 이동시킴
      if (
        pathname.toString() === "/" ||
        pathname.toString() === "/accounts/login"
      ) {
        console.log("로그인 됨");
        router.push("/main");
      }
    }
  }, [isLoggedIn, router]);
  return null;
}

// 로그인 O
// => /account/login링크로 접속시 /main으로 이동시킴
// => /링크로 접속시 /main으로 이동시킴
// => 나머지의 경우에는 전부 그냥 return

// 로그인 X
// =>모든 링크로 접속시 /account/login으로 이동시킴
