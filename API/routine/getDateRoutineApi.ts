import { AxiosResponse } from "axios";
import { privateApi } from "../axiosConfig";

export interface Hour {
  id: number;
  hour: string;
}

export interface RoutineItem {
  id: number;
  type: string;
  hour: Hour;
  title: string;
  repeatingDays: string[];
  shared: boolean;
  createdDate: string;
  endedDate: string | null;
  retrospective: string;
}

export interface DateRoutineResponse {
  id: number;
  item: RoutineItem;
  position: number;
  accomplishment: boolean;
}

const GetDateRoutineApi = async (
  date: string
): Promise<AxiosResponse<DateRoutineResponse[]>> => {
  try {
    const response = await privateApi.get(`/api/page/${date}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export default GetDateRoutineApi;
