import { AxiosResponse } from "axios";
import { publicApi } from "../instance";

interface ExistUserCheckResponse {
  message: string;
  is_duplicated: boolean;
}

const ExistUserCheckAPI = async (
  userEmail: string
): Promise<AxiosResponse<ExistUserCheckResponse>> => {
  try {
    const response = await publicApi.get(`/sign-api/check-user-email`, {
      params: {
        email: userEmail,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default ExistUserCheckAPI;
