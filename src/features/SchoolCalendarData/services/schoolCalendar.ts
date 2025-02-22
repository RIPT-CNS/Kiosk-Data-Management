import axios from "@/lib/axios";
import {
  GET_SCHOOL_CALENDAR_STATISTICS_API,
  UPDATE_SCHOOL_CALENDAR_DATA_IP,
} from "@/utils/endpoints";
import { IFormData } from "../types/Formdata";
import { IGetResponse } from "../types/Response";

export const uploadCalendarService = {
  get: () => {
    return axios.get<IGetResponse>(GET_SCHOOL_CALENDAR_STATISTICS_API);
  },

  update: (data: IFormData) => {
    const formData = new FormData();
    const file = data.files[0];

    if (!file) {
      throw new Error("No file selected");
    }

    formData.append("file", file);

    return axios.post(UPDATE_SCHOOL_CALENDAR_DATA_IP, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};
