"use client";

import React, { useEffect, useRef, useState } from "react";
import GetDateRoutine from "../hook/getDateRoutine";
import { DateRoutineResponse } from "@/API/routine/getDateRoutineApi";
import AccomplishmentBtn from "./function/accomplishmentBtn";
import { useQuery } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";
import { pickDateValue } from "@/atom";

export default function MainRoutineItem() {
  // contextMenu
  const [contextMenu, setContextMenu] = useState<{
    x: number;
    y: number;
    routine?: DateRoutineResponse;
  } | null>(null);

  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleContextMenu = (event: React.MouseEvent, routine: DateRoutineResponse) => {
    event.preventDefault();

    const x = event.clientX;
    const y = event.clientY;

    console.log(routine);

    setContextMenu({ x, y, routine });
  };

  const hideContextMenu = () => {
    setContextMenu(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        hideContextMenu();
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      removeEventListener("click", handleClickOutside);
    };
  }, []);

  // 선택 날짜 루틴 배열

  const date = useRecoilValue(pickDateValue);

  const { isLoading, data, isError } = useQuery({
    queryKey: ["routines", { date: date }],
    queryFn: () => GetDateRoutine(date),
  });

  const [routineArray, setRoutineArray] = useState<DateRoutineResponse[]>([]);

  const sortArrayByPosition = (routines: DateRoutineResponse[]) => {
    return routines.sort((a, b) => a.position - b.position);
  };
  useEffect(() => {
    const fetchData = async () => {
      if (data) {
        const sortArray = sortArrayByPosition(data);
        setRoutineArray(sortArray);
      }
    };
    fetchData();
    console.log("fetching");
  }, [isLoading, data]);

  if (isLoading) {
    return <div>isLoading...</div>;
  }

  if (isError) {
    return <div>어머! 페이지를 찾을수 없어요ㅠㅠ</div>;
  }

  return (
    <div className=" space-y-[20px] w-full ">
      {routineArray.map((routine, index) => {
        return (
          <React.Fragment key={index}>
            {/* Wrapper */}
            <div className=" flex justify-start w-full h-[75px] items-center rounded-lg overflow-hidden shadow">
              {/* 챌린지 루틴 구분 색상 */}
              <div
                className={`w-5 h-full ${routine.item.type === "routine" ? "bg-color_main_text" : "bg-[#F9D060]"}`}
              ></div>
              {/* 시간 */}
              <div
                className={`flex items-center justify-center text-normal font-semibold w-2/12  min-w-[100px] h-full bg-white
               `}
              >
                {routine.item.hour.hour}
              </div>
              <div className=" flex w-full h-full justify-between items-center bg-white">
                {/* 콘텐츠 wrapper */}
                <div
                  className=" flex flex-col w-full h-full  border-l pl-20"
                  onContextMenu={(event) => handleContextMenu(event, routine)}
                >
                  {/* 내용 */}
                  <span className=" font-semibold text-color_main_text pt-4">{routine.item.title}</span>
                  {/* 회고 */}
                  <span className=" text-color_sub_text text-sm">
                    {routine.item.retrospective ? routine.item.retrospective : "회고를 입력해주세요"}
                  </span>
                </div>
                {/* 체크 */}
                <AccomplishmentBtn routine_id={routine.item.id} accomplishment={routine.accomplishment} date={date} />
              </div>
            </div>
          </React.Fragment>
        );
      })}
      {contextMenu && (
        <div
          className={`fixed bg-white border border-color_bg text-color_default_text p-1 z-10 rounded-lg shadow-lg`}
          style={{ left: contextMenu.x + "px", top: contextMenu.y + "px" }}
          ref={menuRef}
        >
          <div className="cursor-pointer py-1 px-3 hover:bg-gray-100">
            <span className=" text-sm">루틴 수정</span>
          </div>
          <div className="cursor-pointer py-1 px-3 hover:bg-gray-100">
            <span className=" text-sm">루틴 삭제</span>
          </div>
        </div>
      )}
    </div>
  );
}
