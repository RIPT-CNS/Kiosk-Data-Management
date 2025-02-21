import axios from "@/lib/axios";
import { ILoginResponse } from "./type";
import { LOGIN_API } from "@/utils/endpoints";

export const authService = {
  login: (cccd_id: string, password: string) => {
    return axios.post<ILoginResponse>(LOGIN_API, { cccd_id, password });
  },
};
