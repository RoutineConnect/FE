"use client";

import IPlus from "@/Icon/IPlus";
import { useState } from "react";

export default function MainRoutineAdd() {
  const [onClicked, setOnClicked] = useState(false);
  const AddBtnHandler = () => {
    setOnClicked(!onClicked);
  };

  return (
    <div>
      <div
        className={` opacity-50 bg-slate-500 w-screen h-screen fixed bottom-0 right-0
        ${!onClicked && "hidden"}
        `}
      />
      <div className=" absolute w-12 h-12 rounded-full -right-5 -bottom-5 bg-blue-400 shadow-2xl">
        <div className=" relative w-full h-full">
          <div
            className={`flex justify-center items-center w-full h-full ${
              onClicked ? "rotate-45" : null
            } duration-100`}
            onClick={AddBtnHandler}
          >
            <IPlus />
            {/* 추가 버튼 */}
          </div>
          {onClicked ? (
            <div>
              {/* 루틴 추가 */}
              <div className=" absolute -top-[120px] -left-70 ">
                <div className=" w-[120px] h-[40px] bg-violet-500 flex justify-center items-center rounded-full">
                  <span className=" text-white ">루틴 추가</span>
                </div>
              </div>
              {/* 챌린지 추가 */}
              <div className=" absolute -top-[60px] -left-70">
                <div className=" w-[120px] h-[40px] bg-violet-500 flex justify-center items-center rounded-full">
                  <span className=" text-white ">챌린지 추가</span>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
