import axios from "@/lib/axios";
import { GET_TEACHER_CALENDAR_DATA_IP } from "@/utils/endpoints";
import { IGetResponse } from "../types/Response";

export const teacherCalendarService = {
  get: () => {
    return axios.get<IGetResponse>(GET_TEACHER_CALENDAR_DATA_IP);
  },
};
