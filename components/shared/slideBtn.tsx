"use client";

interface ISlideBtn {
  value: boolean;
  onClick: () => void;
}

export default function SlideBtn({ value, onClick }: ISlideBtn) {
  return (
    <div
      onClick={onClick}
      className={` ${
        value ? "bg-green-400" : "bg-slate-300"
      } transition-colors ease-in duration-500 relative w-[40px] h-5 rounded-full cursor-pointer`}
    >
      <div
        className={` absolute w-full transition-transform ease-in duration-500
      ${value ? " translate-x-[22px]" : "translate-x-[5px]"}
      `}
      >
        <div className="w-[13px] h-[13px] bg-white absolute rounded-full top-[3.5px]"></div>
      </div>
    </div>
  );
}
