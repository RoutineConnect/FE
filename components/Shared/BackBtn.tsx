"use client";

import IChevron from "@/Icon/IChevron";
import { useRouter } from "next/navigation";

export default function BackBtn() {
  const route = useRouter();
  const BackBtnHandler = () => {
    route.back();
  };
  return (
    <div className=" w-6 h-6 font-semibold" onClick={BackBtnHandler}>
      <IChevron />
    </div>
  );
}
