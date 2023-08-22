"use client";

import { LoginValue } from "@/atom";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";

//  account창에서 로그인 상태 관리 함수
export default function LoggedIn() {
  const router = useRouter();
  //  로그인정보 가져오기 ( 일시적으로 값 지정 )
  const isLoggedIn = useRecoilValue(LoginValue);
  useEffect(() => {
    //  로그인 상태가 true일 경우
    if (isLoggedIn) {
      //  이미 로그인이 되어있기 떄문에 main페이지로 이동시킴
      router.push("/main");
    }
  }, [isLoggedIn, router]);
  return null;
}
