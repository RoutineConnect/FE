import React, { useState } from "react";

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
}

export default function RoutineDaySet({ days, stateHandler }: IRoutineDaySet) {
  const date = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <div className="flex flex-col w-full">
      {/* title */}
      <div>
        <span className="font-semibold">반복주기</span>
        <span className=" text-sm text-color_sub_text ml-2">(요일을 클릭 하세요)</span>
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
