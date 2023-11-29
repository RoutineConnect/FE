"use client";

import { LoginValue } from "@/atom";
import { deleteCookie } from "@/components/utils/setCookie";
import ILogOut from "@/icon/iLogOut";
import { useSetRecoilState } from "recoil";

export default function LogOutBtn() {
  const setLoginVar = useSetRecoilState(LoginValue);
  const logOut = () => {
    deleteCookie();
    setLoginVar(false);
  };
  return (
    <>
      {/* logOut button */}
      <div className=" flex justify-start mt-7 cursor-pointer" onClick={logOut}>
        <div className=" fill-color_main_text w-[18px]">
          <ILogOut />
        </div>
        <span className=" text-sideBar font-semibold ml-3">로그아웃</span>
      </div>
    </>
  );
}
