"use client";

import { LoginValue } from "@/atom";
import { useSetRecoilState } from "recoil";

export default function SideBar_R() {
  const setLoginVar = useSetRecoilState(LoginValue);
  const logOut = () => {
    localStorage.removeItem("TOKEN");
    setLoginVar(false);
  };
  return (
    <div className=" w-sideBar">
      <div onClick={logOut}>로그아웃</div>
    </div>
  );
}
