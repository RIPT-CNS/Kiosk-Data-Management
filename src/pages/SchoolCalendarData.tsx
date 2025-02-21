import { Card } from "@/components/ui/card";
import DataTable from "@/components/ui/data-table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { UploadForm } from "@/features/SchoolCalendarData";
import { useSchoolCalendar } from "@/features/SchoolCalendarData/hooks/useSchoolCalendar";
import { columns } from "@/features/SchoolCalendarData/utils/constants";
import { useEffect, useState } from "react";

const SchoolCalendarData = () => {
  const { loadingAPI, getCalendar, updateSchoolCalendar, calendarData } = useSchoolCalendar();
  const [calendarType, setCalendarType] = useState<"all" | "class" | "teacher">("all");

  useEffect(() => {
    getCalendar(calendarType);
  }, []);

  const handleCalendarTypeChange = (value: "all" | "class" | "teacher") => {
    setCalendarType(value);
  };

  return (
    <Card className="flex flex-col gap-4 p-6 w-full h-full">
      <UploadForm onUpload={updateSchoolCalendar} loading={loadingAPI} />
      <Select value={calendarType} onValueChange={handleCalendarTypeChange}>
        <SelectTrigger className="w-56">
          <SelectValue placeholder="Loại lịch">
            Loại lịch:{" "}
            <span className="font-medium">
              {calendarType === "all" ? "Toàn bộ" : calendarType === "class" ? "Học sinh" : "Giảng viên"}
            </span>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Toàn bộ</SelectItem>
          <SelectItem value="class">Học sinh</SelectItem>
          <SelectItem value="teacher">Giảng viên</SelectItem>
        </SelectContent>
      </Select>
      <DataTable
        columns={columns}
        data={calendarData}
        canEdit={false}
        loading={loadingAPI}
      />
    </Card>
  );
};

export default SchoolCalendarData;