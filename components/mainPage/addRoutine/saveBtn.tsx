"use client";

import { useRouter } from "next/navigation";

export default function SaveBtn() {
  const route = useRouter();
  const cancleHandler = () => {
    route.back();
  };
  const addHandler = () => {
    route.push("/main");
  };
  return (
    <div className=" absolute bottom-7 w-full px-10 flex justify-center space-x-5 ">
      {/* 취소 */}
      <div
        className=" w-3/5 bg-white h-10 flex justify-center items-center rounded-lg cursor-pointer"
        onClick={cancleHandler}
      >
        <span className=" text-[15px] text-color_main_text font-semibold">취소</span>
      </div>
      {/* 추가 */}
      <div
        className=" w-3/5 bg-color_main_text h-10 flex justify-center items-center rounded-lg cursor-pointer"
        onClick={addHandler}
      >
        <span className=" text-[15px] text-white font-semibold">추가하기</span>
      </div>
    </div>
  );
}
