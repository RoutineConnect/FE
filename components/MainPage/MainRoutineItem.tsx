"use client";

import { MAINROUTINE } from "@/API/MAINROUTINE";
import ICheck from "@/Icon/ICheck";
import IPlus from "@/Icon/IPlus";
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
    <div className=" space-y-[20px]">
      {MAINROUTINE.map((routine) => {
        return (
          // Wrapper
          <div className=" flex justify-start w-[720px] h-[120px] items-center ml-[80px]">
            {/* 시간 */}
            <div
              className={`flex items-center justify-center text-normal font-semibold w-[120px] h-full ${
                routine.type === 1 ? "bg-theme_d" : " bg-theme_f"
              } bg-opacity-10 rounded-l-2xl`}
            >
              {routine.hours}
            </div>
            {/* 콘텐츠 wrapper */}
            <div
              className={` flex flex-col w-[500px] h-full  border-l-[5px] pl-20 pt-7 ${
                routine.type === 1
                  ? " border-theme_f bg-theme_e"
                  : "  border-theme_b bg-theme_c"
              } bg-opacity-60 rounded-r-2xl`}
              onContextMenu={(event) => handleContextMenu(event, routine)}
            >
              {/* 내용 */}
              <span className=" font-semibold text-lg mb-3">
                {routine.description}
              </span>
              {/* 회고 */}
              {/* 회고를 클릭시 회고 작성 페이지로 이동 이미 작성되어있는 회고를 클릭하면 수정 */}
              <span className=" text-gray-500">
                {routine.retrospect
                  ? routine.retrospect
                  : "회고를 입력해주세요"}
              </span>
            </div>
            {/* 체크 */}
            <div
              className={` w-8 ml-5 ${
                routine.check.achievement === true
                  ? " text-green-500"
                  : "text-gray-300"
              }`}
            >
              <ICheck />
            </div>
          </div>
        );
      })}
      {contextMenu && (
        <div
          className={`fixed bg-white border border-gray-300 p-2 z-10 rounded-lg`}
          style={{ left: contextMenu.x + "px", top: contextMenu.y + "px" }}
          ref={menuRef}
        >
          <div className="cursor-pointer py-2 px-4 hover:bg-gray-100 hover:font-semibold">
            루틴 수정
          </div>
          <div className="cursor-pointer py-2 px-4 hover:bg-gray-100 hover:font-semibold">
            루틴 삭제
          </div>
        </div>
      )}
    </div>
  );
}
