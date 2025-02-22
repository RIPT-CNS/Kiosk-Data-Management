import { Card } from "@/components/ui/card";
import DataTable from "@/components/ui/data-table";
import { UploadForm } from "@/features/SchoolCalendarData";
import { useSchoolCalendar } from "@/features/SchoolCalendarData/hooks/useSchoolCalendar";
import { columns } from "@/features/SchoolCalendarData/utils/constants";
import { useEffect } from "react";

const SchoolCalendarData = () => {
  const { loadingAPI, getSchoolCalendarStatistics, updateSchoolCalendar, calendarStatistics } = useSchoolCalendar();

  useEffect(() => {
    getSchoolCalendarStatistics();
  }, []);
  return (
    <Card className="flex flex-col gap-4 p-6 w-full h-full">
      <UploadForm onUpload={updateSchoolCalendar} loading={loadingAPI} />
      <DataTable
        columns={columns}
        data={calendarStatistics || []}
        canEdit={false}
        loading={loadingAPI}
      />
    </Card>
  );
};

export default SchoolCalendarData;