import AddBtn from "@/components/mainPage/addBtn";
import MainDate from "@/components/mainPage/mainDate";
import MainRoutineItem from "@/components/mainPage/mainRoutineItem";

export default function MainPage() {
  return (
    // wrapper
    <div className="flex flex-col items-center pt-10 px-5 h-screen  min-w-[446px]">
      {/* Date */}
      <div className=" flex justify-center items-center bg-white w-full py-3 rounded-xl ">
        <MainDate />
      </div>
      <div className=" w-full h-full overflow-auto scrollbar-none mt-5">
        <MainRoutineItem />
      </div>
      {/* 편집 & 추가 버튼 */}
      <AddBtn />
    </div>
  );
}
