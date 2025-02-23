import { useState } from "react";
import { toast } from "sonner";
import { institueCalendarService } from "../services/institueCalendar";
import { IFormData } from "../types/Formdata";
import { IRecord } from "../types/Record";

export const useInstitueCalendar = () => {
  const [loadingAPI, setLoadingAPI] = useState(false);
  const [calendarData, setCalendarData] = useState<IRecord[]>([]);

  const getInstitueCalendar = async () => {
    setLoadingAPI(true);
    try {
      const response = await institueCalendarService.get();
      if (response.data.success) {
        setCalendarData(response.data.payload);
      }
      return response.data.payload;
    } catch (error) {
      toast.error("Có lỗi xảy ra khi lấy dữ liệu");
      return [];
    } finally {
      setLoadingAPI(false);
    }
  };

  const updateInstitueCalendar = async (data: IFormData) => {
    setLoadingAPI(true);
    try {
      const response = await institueCalendarService.update(data);
      if (response.data.success) {
        toast.success("Cập nhật lịch công tác viện thành công");
        await getInstitueCalendar();
      }
    } catch (error) {
      console.log(error);
      toast.error("Có lỗi xảy ra khi cập nhật lịch công tác viện");
    } finally {
      setLoadingAPI(false);
    }
  };

  return {
    getInstitueCalendar,
    updateInstitueCalendar,
    loadingAPI,
    calendarData,
  };
};
