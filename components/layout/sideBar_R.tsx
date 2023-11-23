"use client";

import { LoginValue } from "@/atom";
import { useSetRecoilState } from "recoil";
import { deleteCookie } from "../utils/setCookie";

export default function SideBar_R() {
  const setLoginVar = useSetRecoilState(LoginValue);
  const logOut = () => {
    deleteCookie();
    setLoginVar(false);
  };
  return (
    <div className=" w-sideBar">
      <div onClick={logOut}>로그아웃</div>
    </div>
  );
}
