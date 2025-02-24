import { Card } from "@/components/ui/card";
import DataTable from "@/components/ui/data-table";
import AnnualChart from "@/features/AppointmentRequestStatistics/components/AnnualChart";
import Blocks from "@/features/AppointmentRequestStatistics/components/Blocks";
import { useAppointmentRequestStatistic } from "@/features/AppointmentRequestStatistics/hooks/useUserBehaviourStatistics";
import { columns, data } from "@/features/AppointmentRequestStatistics/utils/constants";

const AppointmentsRequestStatistics = () => {
  const { loadingAPI, getAppointmentRequestStatistic, appointmentStatisticData } = useAppointmentRequestStatistic();
  return (
    <Card className="flex flex-col gap-4 p-6 w-full h-full">
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3">
        <Blocks />
      </div>
      <div className="flex items-center">
        <div className="w-2/3">
          <AnnualChart />
        </div>
        <div>

        </div>

      </div>
      <DataTable columns={columns} data={data} canEdit={false} loading={loadingAPI} />
    </Card>
  )
}

export default AppointmentsRequestStatistics