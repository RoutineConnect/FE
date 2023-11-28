"use client";

import AddRoutineApi from "@/API/routine/addRoutine";
import { pickDateValue } from "@/atom";
import ConvertBinary from "@/components/addRoutine/function/convertBinary";
import RoutineDaySet from "@/components/addRoutine/routineDaySet";
import PrivateSet from "@/components/shared/backBtn";
import Saperator from "@/components/shared/saperator";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";

export interface AddRoutineForm {
  title: string;
  hour: string;
  created_date: string;
  ended_date: string | null;
  shared: boolean;
  routine_day: string;
}

export interface DaysState {
  sunday: boolean;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
}

export default function addroutine() {
  const pickDate = useRecoilValue(pickDateValue);
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<AddRoutineForm>({
    mode: "onChange",
  });

  // 반복일 설정
  const [days, setDays] = useState<DaysState>({
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
  });
  const stateHandler = (day: keyof DaysState) => {
    setDays((prevDays) => ({
      ...prevDays,
      [day]: !prevDays[day], // 해당 요일의 상태를 토글
    }));
  };

  // 공개 설정
  const [privateSet, setPrivateSet] = useState(false);
  const privateHandler = () => {
    setPrivateSet(!privateSet);
  };

  const onSubmitValid: SubmitHandler<AddRoutineForm> = async () => {
    const { title, hour, created_date, ended_date } = getValues();
    const shared = privateSet;
    const routine_day = ConvertBinary(days);
    try {
      const response = await AddRoutineApi({
        title,
        hour,
        created_date,
        ended_date: ended_date === "0000-00-00" ? null : ended_date,
        shared,
        routine_day,
      });
      console.log(response);
      route.push("/main");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const route = useRouter();
  const cancleHandler = () => {
    route.back();
  };

  return (
    <div className="flex flex-col items-center w-full min-w-[446px] h-full px-10 text-color_default_text relative">
      {/* title */}
      <div className=" mt-7">
        <span className=" font-semibold">루틴 추가하기</span>
      </div>
      {/* 입력 폼 */}
      <form onSubmit={handleSubmit(onSubmitValid)} className=" w-full flex flex-col items-center">
        {/* 루틴이름 */}
        <input
          {...register("title", {
            required: "루틴 이름을 작성해주세요",
          })}
          className=" mt-24 w-full h-11 rounded-lg px-7 placeholder:text-color_sub_text placeholder:text-sm outline-none"
          type="text"
          placeholder="루틴이름을 입력하세요"
        />
        {/* 언제할까요 */}
        <div className=" w-full flex flex-col mt-8">
          {/* title */}
          <span className=" flex justify-start font-semibold">언제 할까요</span>
          {/* 해시태그 */}
          <div className=" flex flex-wrap w-full text-sm font-semibold mt-3 space-x-2">
            <div className=" px-4 py-1 mb-2 bg-white rounded-xl hover:border hover:border-color_main_text">
              <span>출근길</span>
            </div>
            <div className=" px-4 py-1 mb-2 bg-white rounded-xl hover:border hover:border-color_main_text">
              <span>퇴근 후</span>
            </div>
            <div className=" px-4 py-1 mb-2 bg-white rounded-xl hover:border hover:border-color_main_text">
              <span>점심 먹고</span>
            </div>
            <div className=" px-4 py-1 mb-2 bg-white rounded-xl hover:border hover:border-color_main_text">
              <span>출근길</span>
            </div>
            <div className=" px-4 py-1 mb-2 bg-white rounded-xl hover:border hover:border-color_main_text">
              <span>일어나자 마자</span>
            </div>
          </div>
          {/* 입력 */}
          <input
            {...register("hour", {
              required: "루틴시간을 작성해주세요",
            })}
            className=" mt-3 w-full h-11 rounded-lg px-7 placeholder:text-color_sub_text placeholder:text-sm outline-none"
            type="text"
            placeholder=" 예시) 8시, 출근길, 식사 후"
          />
        </div>
        <Saperator />
        {/* 시작일 */}
        <div className=" flex justify-between w-full">
          {/* title */}
          <span className=" font-semibold">시작일</span>
          {/* 캘린더 선택 */}
          <input
            {...register("created_date", {
              pattern: {
                value: /^\d{4}-\d{2}-\d{2}$/,
                message: "입력형식을 지켜서 입력해주세요",
              },
            })}
            defaultValue={pickDate}
            placeholder="시작일을 입력해주세요"
            type="text"
            className=" text-color_accent_text bg-inherit text-right outline-none"
          />
        </div>
        <Saperator />
        {/* 종료일 */}
        <div className=" flex justify-between w-full">
          {/* title */}
          <span className=" font-semibold">종료일</span>
          {/* 캘린더 선택 */}
          <input
            {...register("ended_date", {
              pattern: {
                value: /^\d{4}-\d{2}-\d{2}$/,
                message: "입력형식을 지켜서 입력해주세요",
              },
            })}
            defaultValue={"0000-00-00"}
            placeholder="종료일을 입력해주세요"
            type="text"
            className=" text-color_accent_text bg-inherit text-right outline-none"
          />
        </div>
        <Saperator />
        {/* 반복주기 */}
        <RoutineDaySet days={days} stateHandler={stateHandler} />
        <Saperator />
        {/* 공개 설정 */}
        <div className=" flex w-full justify-between">
          <span className=" font-semibold">비공개</span>
          {/* OnOff Btn */}
          <PrivateSet privateSet={privateSet} privateHandler={privateHandler} />
        </div>
        {/* 추가 버튼 */}
        <div className=" absolute bottom-7 w-full px-10 flex justify-center space-x-5 ">
          {/* 취소 */}
          <div
            className=" w-3/5 bg-white h-10 flex justify-center items-center rounded-lg cursor-pointer"
            onClick={cancleHandler}
          >
            <span className=" text-[15px] text-color_main_text font-semibold">취소</span>
          </div>
          {/* 추가 */}
          <button
            className=" w-3/5 bg-color_main_text h-10 flex justify-center items-center rounded-lg cursor-pointer"
            type="submit"
          >
            <span className=" text-[15px] text-white font-semibold">추가하기</span>
          </button>
        </div>
      </form>
    </div>
  );
}
