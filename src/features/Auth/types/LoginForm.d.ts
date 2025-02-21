import { ILoginResponse } from "@/services/auth/type";

export interface ILoginFormProps {
    login: (cccd_id: string, password: string) => Promise<boolean>;
    loadingAPI: boolean;
}
