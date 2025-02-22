import { toast } from "@/hooks/use-toast";
import { useState } from "react";
import { uploadCalendarService } from "../services/schoolCalendar";
import { IFormData } from "../types/Formdata";
import { IRecord } from "../types/Record";

export const useSchoolCalendar = () => {
  const [loadingAPI, setLoadingAPI] = useState(false);
  const [calendarStatistics, setCalendarStatistics] = useState<IRecord[]>();

  const getSchoolCalendarStatistics = async () => {
    setLoadingAPI(true);
    try {
      const response = await uploadCalendarService.get();
      if (response.data.success) {
        setCalendarStatistics([response.data.payload]);
        toast({
          title: "Lấy dữ liệu thành công",
        });
      }
      return response.data.payload;
    } catch (error) {
      console.log(error);
      toast({
        title: "Có lỗi xảy ra khi tải dữ liệu",
        variant: "destructive",
      });
    } finally {
      setLoadingAPI(false);
    }
  };

  const updateSchoolCalendar = async (data: IFormData) => {
    setLoadingAPI(true);
    try {
      const response = await uploadCalendarService.update(data);
      if (response.data.detail) {
        toast({
          title: "File tải lên thành công",
        });
        await getSchoolCalendarStatistics();
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Có lỗi xảy ra khi tải lên file",
        variant: "destructive",
      });
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
