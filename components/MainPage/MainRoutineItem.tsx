import { MAINROUTINE } from "@/API/MAINROUTINE";

export default function MainRoutineItem() {
  return (
    <div>
      {MAINROUTINE.map((routine) => {
        return (
          <div
            key={routine.id}
            className=" grid grid-cols-MainRoutine divide-x-2 divide-black border-2 border-black mb-2 rounded-lg"
          >
            <div className=" p-1 flex justify-center items-center">
              {routine.hours}
            </div>
            <div className=" p-1 flex justify-center items-center">
              {routine.description}
            </div>
            <div className=" p-1 flex justify-center items-center">
              {routine.check.achievement ? "O" : "X"}
            </div>
          </div>
        );
      })}
    </div>
  );
}
