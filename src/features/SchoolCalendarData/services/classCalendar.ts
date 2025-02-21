import axios from "@/lib/axios";
import {
  GET_CLASS_CALENDAR_DATA_BY_DAY_IP,
  GET_CLASS_CALENDAR_DATA_BY_ROLE,
  GET_CLASS_CALENDAR_DATA_IP,
  UPDATE_CLASS_CALENDAR_DATA_IP,
} from "@/utils/endpoints";
import { IFormData } from "../types/Formdata";
import { IGetResponse, IUploadResponse } from "../types/Response";

export const classCalendarService = {
  get: () => {
    return axios.get<IGetResponse>(GET_CLASS_CALENDAR_DATA_IP);
  },

  getByDay: (day: string) => {
    return axios.get<IGetResponse>(
      `${GET_CLASS_CALENDAR_DATA_BY_DAY_IP}/day=${day}`
    );
  },

  getByRole: (role: string) => {
    return axios.get<IGetResponse>(
      `${GET_CLASS_CALENDAR_DATA_BY_ROLE}?role=${role}`
    );
  },

  update: (data: IFormData) => {
    const formData = new FormData();
    const file = data.files[0];

    if (!file) {
      throw new Error("No file selected");
    }

    formData.append("file", file);

    return axios.post<IUploadResponse>(
      UPDATE_CLASS_CALENDAR_DATA_IP,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  },
};
