"use client";

import { pickDateValue } from "@/atom";
import { useRecoilState } from "recoil";
import GetWeekDatesWithToday, { WeekDateInfo } from "../hook/getWeekDate";

function achievements(achive: number, date: string, today: string) {
  let BgCol = "";
  if (date === today) {
    return "blue-600";
  } else if (date > today) {
    return "color_sub_text";
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
  const [pickDate, setPickDate] = useRecoilState(pickDateValue);
  const today = pickDate;
  const dayOfWeek: WeekDateInfo[] = GetWeekDatesWithToday();

  const DateChangeHandler = (date: string) => {
    setPickDate(date);
  };
  return (
    <div className=" w-2/5 flex justify-center space-x-2">
      {/* 색 불러오기 */}
      <div className=" bg-red-600 hidden"></div>
      <div className=" bg-yellow-400 hidden"></div>
      <div className=" bg-green-400 hidden"></div>
      <div className=" bg-color_sub_text hidden"></div>
      <div className=" bg-blue-600 hidden"></div>
      {dayOfWeek.map((day) => {
        return (
          <div
            key={day.date}
            className="flex flex-col justify-center items-center cursor-pointer"
            onClick={() => DateChangeHandler(day.date)}
          >
            <div
              className={`w-[62px] h-[68px] rounded-lg flex flex-col justify-center items-center ${
                day.date === pickDate ? " bg-color_bg" : null
              } `}
            >
              <span className=" text-base font-semibol opacity-60">{day.dayOfTheWeek}</span>
              <span className=" text-lg font-semibold">{day.day}</span>
            </div>
            {/* <div className={` w-[7px] h-[7px] rounded-full mt-2 bg-${achievements(d.achive, d.date, today)}`}></div> */}
          </div>
        );
      })}
    </div>
  );
}
