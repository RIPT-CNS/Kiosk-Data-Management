
import { useState } from "react";
import { IRecord } from "../types/Record";
import { userBehaviourService } from "../services/userBehaviour";
import { toast } from "sonner";

export const useUserBehaviourStatistic = () => {
  const [loadingAPI, setLoadingAPI] = useState(false);
  const [roleStatisticData, setRoleStatisticData] = useState<IRecord[]>([]);

  const getRoleStatistic = async () => {
    setLoadingAPI(true);
    try {
      const response = await userBehaviourService.getRoleStatistic();
      if (response.data.success) {
        setRoleStatisticData(response.data.payload);
      }
      return response.data.payload;
    } catch (error) {
      toast.error("Có lỗi xảy ra khi lấy dữ liệu");
      return [];
    } finally {
      setLoadingAPI(false);
    }
  };

  return {
    getRoleStatistic,
    loadingAPI,
    roleStatisticData,
  };
};