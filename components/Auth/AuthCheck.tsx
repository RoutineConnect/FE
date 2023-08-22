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
      //  로그인 상태게 false일때 현재 url이 socialsignup일 경우에는 login으로 안보냄
      if (pathname.toString() === "/accounts/socialsignup") {
        return;
      }
      //  로그인창으로 이동시킴
      router.push("/accounts/login");
    }
    // 로그인이 되어있는 경우
    else {
      //  현재 url이 "/" 상태일때에는 main페이지로 이동시킴
      if (pathname.toString() === "/") {
        router.push("/main");
      }
    }
  }, [isLoggedIn, router]);
  return null;
}
