import GetDateRoutineApi from "@/API/routine/getDateRoutineApi";

export default async function GetDateRoutine(date: string) {
  try {
    const response = await GetDateRoutineApi(date);
    return response.data;
  } catch (error) {
    throw error;
  }
}
