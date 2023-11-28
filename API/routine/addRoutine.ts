import { AddRoutineForm } from "@/app/main/addroutine/page";
import { privateApi } from "../axiosConfig";

const AddRoutineApi = async (formData: AddRoutineForm) => {
  try {
    const response = await privateApi.post("/api/routine", formData);
    return response;
  } catch (error) {
    throw error;
  }
};

export default AddRoutineApi;
