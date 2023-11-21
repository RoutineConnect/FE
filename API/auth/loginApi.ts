import { AxiosResponse } from "axios";
import axiosInstace from "../axiosConfig";
import api from "../axiosConfig";

interface LoginFormData {
  email: string;
  password: string;
}

interface ApiResponse {
  code: number;
  msg: string;
  success: boolean;
  token: string;
}

const LoginAPI = async (formData: LoginFormData): Promise<AxiosResponse<ApiResponse>> => {
  try {
    console.log(formData);
    const response = await api.post<LoginFormData, AxiosResponse<ApiResponse>>(
      `${axiosInstace.defaults.baseURL}/sign-api/sign-in`,
      null,
      {
        params: formData,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    console.log(formData);
    throw error;
  }
};

export default LoginAPI;
