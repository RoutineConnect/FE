import { AxiosError, AxiosResponse } from "axios";
import { publicApi } from "../instance";

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

const SignupAPI = async (
  formData: SignupData
): Promise<AxiosResponse<ApiResponse>> => {
  try {
    const response = await publicApi.post<
      SignupData,
      AxiosResponse<ApiResponse>
    >("/sign-api/sign-up", formData);
    return response;
  } catch (error: any) {
    throw new AxiosError(
      "An error occurred",
      error.config,
      error.code,
      error.request,
      error.response
    );
  }
};

export default SignupAPI;
