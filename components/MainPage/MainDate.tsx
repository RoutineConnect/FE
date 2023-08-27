"use client";

import { D, Today } from "@/API/MAINDATE";
import { TodayValue } from "@/atom";
import { useRecoilState } from "recoil";

function achievements(achive: number, date: number) {
  let BgCol = "";
  if (date === Today) {
    return "blue-600";
  } else if (date > Today) {
    return "gray-400";
  }

  if (achive === 100) {
    BgCol = "green-400";
  } else if (achive >= 60) {
    BgCol = "yellow-400";
  } else {
    BgCol = "red-600";
  }
  return BgCol;
}

export default function MainDate() {
  const [now, setNow] = useRecoilState(TodayValue);
  // 요일 순서대로 배열 생성
  const daysOfWeek = ["월", "화", "수", "목", "금", "토", "일"];

  // 요일 순서대로 배열된 데이터 생성
  const orderedD = daysOfWeek.map((day, index) => {
    const data = D[index];
    return {
      ...data,
      dayOfWeek: day,
    };
  });

  const DateChangeHandler = (date: number) => {
    setNow(date);
  };
  return (
    <div className=" w-[650px] flex justify-between bg-white">
      {/* 색 불러오기 */}
      <div className=" bg-red-600 hidden"></div>
      <div className=" bg-yellow-400 hidden"></div>
      <div className=" bg-green-400 hidden"></div>
      <div className=" bg-gray-400 hidden"></div>
      <div className=" bg-blue-600 hidden"></div>
      {orderedD.map((d) => {
        return (
          <div
            key={d.date}
            className={`flex flex-col justify-center items-center`}
            onClick={() => DateChangeHandler(d.date)}
          >
            <div
              className={`w-[62px] h-[68px] rounded-lg flex flex-col justify-center items-center ${
                d.date === now ? " bg-blue-300" : null
              } bg-opacity-70 `}
            >
              <span className=" text-base font-semibol opacity-60">
                {d.dayOfWeek}
              </span>
              <span className=" text-lg font-semibold">{d.date}</span>
            </div>
            <div
              className={` w-[7px] h-[7px] rounded-full mt-2 bg-${achievements(
                d.achive,
                d.date
              )}`}
            ></div>
          </div>
        );
      })}
    </div>
  );
}
