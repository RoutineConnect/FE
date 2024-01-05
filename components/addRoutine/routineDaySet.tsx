import React, { Dispatch, SetStateAction, useState } from "react";
import SlideBtn from "../shared/slideBtn";

interface DaysState {
  sunday: boolean;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
}

interface IRoutineDaySet {
  days: DaysState;
  stateHandler: (day: keyof DaysState) => void;
  allStateHandler: Dispatch<SetStateAction<DaysState>>;
}

export default function RoutineDaySet({ days, stateHandler, allStateHandler }: IRoutineDaySet) {
  const date = ["일", "월", "화", "수", "목", "금", "토"];
  const [checkedAll, setCheckedAll] = useState(false);
  const allCheckHandler = () => {
    setCheckedAll((prevCheck) => {
      const newCheckedAll = !prevCheck;

      const updatedDays: DaysState = { ...days };
      Object.keys(updatedDays).forEach((day) => {
        updatedDays[day as keyof DaysState] = newCheckedAll;
      });

      // Set the updated state
      allStateHandler(updatedDays);

      return newCheckedAll;
    });
  };

  return (
    <div className="flex flex-col w-full">
      {/* title */}
      <div className="flex">
        <span className="font-semibold">반복주기</span>
        <span className=" text-sm text-color_sub_text ml-2 mr-2">(요일을 클릭 하세요)</span>
        <div className=" scale-[0.8]">
          <SlideBtn value={checkedAll} onClick={allCheckHandler}></SlideBtn>
        </div>
      </div>
      {/* 요일 wrapper */}
      <div className="flex justify-center">
        {/* 요일 선택 기능 */}
        <div className="mt-7 flex w-full max-w-[700px] h-10 justify-between">
          {/* 각 요일 예시 UI */}
          {Object.keys(days).map((day, index) => (
            <div
              key={day}
              className={`flex flex-col px-2 justify-center items-center rounded-lg cursor-pointer ${
                days[day as keyof DaysState] ? "bg-white" : ""
              }`}
              onClick={() => stateHandler(day as keyof DaysState)}
            >
              <span>{date[index]}</span>
              {days[day as keyof DaysState] && <div className="w-1 h-1 rounded-full bg-color_accent_text"></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
