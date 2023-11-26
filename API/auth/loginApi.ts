import { AxiosResponse } from "axios";
import { publicApi } from "../axiosConfig";

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
    console.log(formData);
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
