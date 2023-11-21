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
    const response = await api.post<SignupData, AxiosResponse<ApiResponse>>("/sign-api/sign-up", formData, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    return response;
  } catch (error) {
    console.log(formData);
    throw error;
  }
};

export default SignupAPI;
