import { D, Today } from "@/API/MAINDATE";

function achievements(achive: number, date: number) {
  let BgCol = "";
  if (date === Today) {
    return "blue-400";
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
  return (
    <div className=" flex space-x-8 mt-5">
      {/* 색 불러오기 */}
      <div className=" bg-red-600 hidden"></div>
      <div className=" bg-yellow-400 hidden"></div>
      <div className=" bg-green-400 hidden"></div>
      <div className=" bg-gray-400 hidden"></div>
      {D.map((d) => {
        return (
          <div
            key={d.date}
            className={` w-12 h-12 rounded-full flex justify-center items-center bg-${achievements(
              d.achive,
              d.date
            )} `}
          >
            {d.date}
          </div>
        );
      })}
    </div>
  );
}
