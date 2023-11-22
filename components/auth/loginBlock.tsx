"use client";

import { AuthBlockValue } from "@/atom";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export default function LoginBlock() {
  const [block, setBlock] = useRecoilState(AuthBlockValue);
  const [radiusClass, setRadiusClass] = useState("rounded-s-2xl");
  const blockHandler = () => {
    setBlock(!block);
  };
  useEffect(() => {
    setTimeout(() => {
      if (block) {
        setRadiusClass("rounded-s-2xl");
      } else {
        setRadiusClass("rounded-e-2xl");
      }
    }, 500); // 500ms 딜레이 (duration 값과 일치)
  }, [block]);

  return (
    <div
      className={` w-LoginForm h-LoginForm bg-color_bg absolute transition-transform ease-in duration-500 ${
        block ? " translate-y-0" : "translate-x-full "
      } ${radiusClass}`}
    >
      {/* Wrapper */}
      <div className=" w-full h-full flex justify-center items-end ">
        <div
          onClick={blockHandler}
          className="mb-20 w-[150px] h-[40px] bg-white flex justify-center items-center rounded-3xl relative  border border-color_accent_text cursor-pointer"
        >
          <span
            className={` fixed text-color_main_text font-semibold transition-opacity duration-500 ${
              block ? "opacity-100" : "opacity-0"
            }`}
          >
            로그인
          </span>
          <span
            className={` fixed text-color_main_text font-semibold transition-opacity duration-500 ${
              block ? "opacity-0" : "opacity-100"
            }`}
          >
            회원가입
          </span>
        </div>
      </div>
    </div>
  );
}
