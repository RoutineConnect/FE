import AddBtn from "@/components/MainPage/AddBtn";
import MainDate from "@/components/MainPage/MainDate";
import MainRoutineItem from "@/components/MainPage/MainRoutineItem";

export default function MainPage() {
  return (
    // wrapper
    <div className="flex flex-col items-center pt-10 h-screen">
      {/* Date */}
      <div className=" flex justify-center items-center bg-white w-[770px] h-[120px] rounded-xl ">
        <MainDate />
      </div>
      {/* Routine / challenge */}
      <div className=" flex flex-col justify-center items-center relative bg-white w-[770px]  h-[730px] mt-5 rounded-xl">
        {/* 편집 & 추가 버튼 */}
        <AddBtn />
        <div className=" h-full rounded-lg overflow-auto scrollbar-none mb-3">
          <MainRoutineItem />
        </div>
      </div>
    </div>
  );
}
