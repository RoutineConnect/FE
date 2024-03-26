import { AxiosResponse } from "axios";
import { publicApi } from "../instance";

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

const LoginAPI = async (
  formData: LoginFormData
): Promise<AxiosResponse<ApiResponse>> => {
  try {
    const response = await publicApi.post<
      LoginFormData,
      AxiosResponse<ApiResponse>
    >(`/sign-api/sign-in`, null, {
      params: formData,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default LoginAPI;
