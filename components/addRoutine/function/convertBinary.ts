import type { DaysState } from "@/app/main/addroutine/page";

export default function ConvertBinary(days: DaysState) {
  const routineDayBinaryValue: number[] = [];
  Object.entries(days).map(([key, value]) => {
    routineDayBinaryValue.push(value ? 1 : 0);
  });
  return routineDayBinaryValue.join("");
}
