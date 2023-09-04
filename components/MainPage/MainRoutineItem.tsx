"use client";

import { MAINROUTINE } from "@/API/MAINROUTINE";
import ICheck from "@/Icon/ICheck";
import { useEffect, useRef, useState } from "react";

interface Routine {
  id: number;
  type: number;
  hours: string;
  description: string;
  retrospect: string | null;
  check: {
    achievement: boolean;
  };
}

export default function MainRoutineItem() {
  const [contextMenu, setContextMenu] = useState<{
    x: number;
    y: number;
    routine?: Routine;
  } | null>(null);

  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleContextMenu = (event: React.MouseEvent, routine: Routine) => {
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

  return (
    <div className=" space-y-[20px] w-full ">
      {MAINROUTINE.map((routine) => {
        return (
          // Wrapper
          <div className=" flex justify-start w-full h-[75px] items-center rounded-lg overflow-hidden shadow">
            {/* 챌린지 루틴 구분 색상 */}
            <div
              className={`w-5 h-full ${
                routine.type === 1 ? "bg-color_main_text" : "bg-[#F9D060]"
              }`}
            ></div>
            {/* 시간 */}
            <div
              className={`flex items-center justify-center text-normal font-semibold w-2/12  min-w-[100px] h-full bg-white
               `}
            >
              {routine.hours}
            </div>
            <div className=" flex w-full h-full justify-between items-center bg-white">
              {/* 콘텐츠 wrapper */}
              <div
                className=" flex flex-col w-full h-full  border-l pl-20"
                onContextMenu={(event) => handleContextMenu(event, routine)}
              >
                {/* 내용 */}
                <span className=" font-semibold text-color_main_text pt-4">
                  {routine.description}
                </span>
                {/* 회고 */}
                <span className=" text-color_sub_text text-sm">
                  {routine.retrospect
                    ? routine.retrospect
                    : "회고를 입력해주세요"}
                </span>
              </div>
              {/* 체크 */}
              <div
                className={` w-8 pr-10 ${
                  routine.check.achievement === true
                    ? " text-green-500"
                    : "text-gray-300"
                }`}
              >
                <ICheck />
              </div>
            </div>
          </div>
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
