"use client";

import { useEffect, useState } from "react";

export default function LoginBlock() {
  const [block, setBlock] = useState(false);
  const [radiusClass, setRadiusClass] = useState("rounded-s-2xl");
  const blockHandler = () => {
    setBlock(!block);
  };
  useEffect(() => {
    setTimeout(() => {
      if (block) {
        setRadiusClass("rounded-s-2xl");
      } else {
        setRadiusClass("rounded-e-2xl");
      }
    }, 500); // 500ms 딜레이 (duration 값과 일치)
  }, [block]);

  return (
    <div
      className={` w-LoginForm h-LoginForm bg-theme_d absolute transition-transform ease-in duration-500 ${
        block ? " translate-y-0" : "translate-x-full "
      } ${radiusClass}`}
    >
      {/* Wrapper */}
      <div className=" w-full h-full flex justify-center items-end">
        <div
          onClick={blockHandler}
          className="mb-20 w-[150px] h-[40px] bg-white flex justify-center items-center rounded-3xl relative"
        >
          <span
            className={` fixed text-theme_e font-semibold transition-opacity duration-500 ${
              block ? "opacity-100" : "opacity-0"
            }`}
          >
            Login
          </span>
          <span
            className={` fixed text-theme_e font-semibold transition-opacity duration-500 ${
              block ? "opacity-0" : "opacity-100"
            }`}
          >
            Sign-up
          </span>
        </div>
      </div>
    </div>
  );
}
