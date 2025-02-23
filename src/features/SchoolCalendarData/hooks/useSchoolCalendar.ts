
import { useState } from "react";
import { uploadCalendarService } from "../services/schoolCalendar";
import { IFormData } from "../types/Formdata";
import { IRecord } from "../types/Record";
import { toast } from "sonner";

export const useSchoolCalendar = () => {
  const [loadingAPI, setLoadingAPI] = useState(false);
  const [calendarStatistics, setCalendarStatistics] = useState<IRecord[]>();

  const getSchoolCalendarStatistics = async () => {
    setLoadingAPI(true);
    try {
      const response = await uploadCalendarService.get();
      if (response.data.success) {
        setCalendarStatistics([response.data.payload]);
      }
      return response.data.payload;
    } catch (error) {
      console.log(error);
      toast.error("Có lỗi xảy ra khi lấy dữ liệu");

    } finally {
      setLoadingAPI(false);
    }
  };

  const updateSchoolCalendar = async (data: IFormData) => {
    setLoadingAPI(true);
    try {
      const response = await uploadCalendarService.update(data);
      if (response.data.detail) {
        await getSchoolCalendarStatistics();
      }
      toast.success("Cập nhật lịch đào tạo thành công");
    } catch (error) {
      console.log(error);
      toast.error("Có lỗi xảy ra khi tải lên file");
    } finally {
      setLoadingAPI(false);
    }
  };

  return {
    getSchoolCalendarStatistics,
    updateSchoolCalendar,
    loadingAPI,
    calendarStatistics,
  };
};
