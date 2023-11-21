import { AxiosResponse } from "axios";
import api from "../axiosConfig";

interface SignupData {
  email: string;
  name: string;
  password: string;
}

interface ApiResponse {
  code: number;
  msg: string;
  success: boolean;
}

const SignupAPI = async (formData: SignupData): Promise<AxiosResponse<ApiResponse>> => {
  try {
    const response = await api.post<SignupData, AxiosResponse<ApiResponse>>(
      "https://port-0-routine-connect-be-4fju66f2clmx3fx61.sel5.cloudtype.app/sign-api/sign-up",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    console.log(formData);
    throw error;
  }
};

export default SignupAPI;
