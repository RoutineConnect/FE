import { privateApi } from "../axiosConfig";

interface AccomplishmentFormData {
  accomplishment: boolean;
  routine_item_id: number;
}

const SetAccomplishmentApi = async (formData: AccomplishmentFormData) => {
  try {
    const response = await privateApi.patch("/api/page", null, {
      params: formData,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default SetAccomplishmentApi;
