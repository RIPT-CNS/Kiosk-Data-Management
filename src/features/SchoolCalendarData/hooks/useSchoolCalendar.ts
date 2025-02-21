import { toast } from "@/hooks/use-toast";
import { useState } from "react";
import { classCalendarService } from "../services/classCalendar";
import { teacherCalendarService } from "../services/teacherCalendar";
import { IFormData } from "../types/Formdata";
import { IRecord } from "../types/Record";

export const useSchoolCalendar = () => {
  const [loadingAPI, setLoadingAPI] = useState(false);
  const [calendarData, setCalendarData] = useState<IRecord[]>([]);

  const getCalendar = async (type: "all" | "class" | "teacher") => {
    setLoadingAPI(true);
    try {
      const response = type === "all" ? await classCalendarService.get() : type === "class" ? await classCalendarService.get() : 
        await teacherCalendarService.get();
      if (response.data.success) {
        setCalendarData(response.data.payload);
        toast({
          title: "Lấy dữ liệu thành công",
        });
      }
      return response.data.payload;
    } catch (error) {
      toast({
        title: "Có lỗi xảy ra khi lấy dữ liệu",
        variant: "destructive",
      });
      return [];
    } finally {
      setLoadingAPI(false);
    }
  };

  const updateSchoolCalendar = async (data: IFormData) => {
    setLoadingAPI(true);
    try {
      const response = await classCalendarService.update(data);
      if (response.data.success) {
        toast({
          title: "File tải lên thành công",
        });
        await getCalendar("all");
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
    getCalendar,
    updateSchoolCalendar,
    loadingAPI,
    calendarData,
  };
};
