import MainDate from "@/components/MainPage/MainDate";
import MainRoutineAdd from "@/components/MainPage/MainRoutineAdd";
import MainRoutineItem from "@/components/MainPage/MainRoutineItem";

export default function MainPage() {
  return (
    // wrapper
    <div className="flex flex-col items-center p-10">
      {/* header */}
      <div>Header</div>
      {/* Date */}
      <MainDate />
      {/* Routine / challenge */}
      <div className=" relative">
        <div className=" h-HRoutine  rounded-lg mt-8 overflow-auto scrollbar-none">
          <MainRoutineItem />
          {/* Plus Btn */}
          <div>
            <MainRoutineAdd />
          </div>
        </div>
      </div>
    </div>
  );
}
