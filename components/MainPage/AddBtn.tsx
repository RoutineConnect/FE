"use client";

import IEdit from "@/Icon/IEdit";
import IPlus from "@/Icon/IPlus";
import { useRouter } from "next/navigation";

export default function AddBtn() {
  const route = useRouter();
  const AddBtnHandler = () => {
    route.push("/main/addroutine");
  };
  const EditBtnHandler = () => {
    route.push("/main/editroutine");
  };
  return (
    <div className=" w-full h-[10px] flex justify-end items-center mr-14 mt-5 mb-5">
      <div
        onClick={AddBtnHandler}
        className=" h-[30px] flex items-center text-gray-400 hover:text-theme_f mr-3 border border-gray-400 hover:border-theme_f p-[1px] rounded-lg "
      >
        <span className=" mr-1 pl-2">추가하기</span>
        <div className=" w-6 mr-1">
          <IPlus />
        </div>
      </div>
      <div
        onClick={EditBtnHandler}
        className=" h-[30px] flex items-center text-gray-400 hover:text-blue-400 border border-gray-400 hover:border-blue-400 p-[2px] rounded-lg"
      >
        <span className=" mr-2 pl-2">편집</span>
        <div className=" w-5 mr-2">
          <IEdit />
        </div>
      </div>
    </div>
  );
}
