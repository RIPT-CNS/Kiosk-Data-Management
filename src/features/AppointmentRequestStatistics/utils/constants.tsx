import { Badge } from "@/components/ui/badge";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { IRecord } from "../types/Record";
import { convertStatusToColor } from "./functions";

export const columns: ColumnDef<IRecord>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "purpose",
    header: "Mục đích",
  },
  {
    accessorKey: "startTime",
    cell: ({ row }) => {
      const date = new Date(row.original.startTime);
      return <span>{format(
        date,
        "dd/MM/yyyy HH:mm"
      )}</span>
    },
    header: "Thời gian bắt đầu",
  },
  {
    accessorKey: "endTime",
    header: "Thời gian kết thúc",
    cell: ({ row }) => {
      const date = new Date(row.original.endTime);
      return <span>{format(
        date,
        "dd/MM/yyyy HH:mm"
      )}</span>
    },
  },
  {
    accessorKey: "location",
    header: "Địa điểm",
  },
  {
    accessorKey: "status",
    header: "Trạng thái",
    cell: ({ row }) => {
      return (
        <Badge variant="outline" className={`line-clamp-1 ${convertStatusToColor(row.original.status)}`}>
          {row.original.status}
        </Badge>
      )
    },
  },
  {
    accessorKey: "attendee",
    header: "Người tham dự",
  },
];

export const data: IRecord[] = [
  {
    id: 1,
    purpose: "Họp báo cáo dự án ABC",
    startTime: "2024-02-24T09:00:00",
    endTime: "2024-02-24T10:30:00",
    location: "Phòng họp A - Tầng 3",
    status: "Đã hoàn thành",
    attendee: "Nguyễn Văn A, Trần Thị B, Lê Văn C"
  },
  {
    id: 2,
    purpose: "Phỏng vấn ứng viên vị trí Developer",
    startTime: "2024-02-24T14:00:00",
    endTime: "2024-02-24T15:00:00",
    location: "Phòng phỏng vấn - Tầng 2",
    status: "Đang diễn ra",
    attendee: "Phạm Thị D (HR), Lê Văn E (Tech Lead)"
  },
  {
    id: 3,
    purpose: "Training nghiệp vụ mới",
    startTime: "2024-02-25T08:30:00",
    endTime: "2024-02-25T11:30:00",
    location: "Phòng đào tạo - Tầng 5",
    status: "Đã lên lịch",
    attendee: "Toàn bộ nhân viên phòng CNS"
  },
  {
    id: 4,
    purpose: "Review sprint với khách hàng",
    startTime: "2024-02-25T15:00:00",
    endTime: "2024-02-25T16:00:00",
    location: "Google Meet",
    status: "Đã lên lịch",
    attendee: "Team DEV, PM, Khách hàng"
  },
  {
    id: 5,
    purpose: "Tổng kết quý I/2024",
    startTime: "2024-02-26T13:30:00",
    endTime: "2024-02-26T15:30:00",
    location: "Hội trường lớn - Tầng 1",
    status: "Đã lên lịch",
    attendee: "Ban lãnh đạo, Trưởng các phòng ban"
  },
  {
    id: 6,
    purpose: "Workshop về công nghệ mới",
    startTime: "2024-02-26T09:00:00",
    endTime: "2024-02-26T12:00:00",
    location: "Phòng workshop - Tầng 4",
    status: "Đã hủy",
    attendee: "Phòng CNS, Phòng R&D"
  },
  {
    id: 7,
    purpose: "Họp giao ban đầu tuần",
    startTime: "2024-02-27T08:00:00",
    endTime: "2024-02-27T09:00:00",
    location: "Phòng họp B - Tầng 3",
    status: "Đã lên lịch",
    attendee: "Trưởng các phòng ban"
  },
  {
    id: 8,
    purpose: "Demo sản phẩm mới",
    startTime: "2024-02-27T14:00:00",
    endTime: "2024-02-27T16:00:00",
    location: "Phòng demo - Tầng 2",
    status: "Đã lên lịch",
    attendee: "Team Product, Team Marketing, Khách hàng tiềm năng"
  },
  {
    id: 9,
    purpose: "Onboarding nhân viên mới",
    startTime: "2024-02-28T09:00:00",
    endTime: "2024-02-28T12:00:00",
    location: "Phòng đào tạo - Tầng 5",
    status: "Đã lên lịch",
    attendee: "HR, Nhân viên mới, Mentor"
  },
  {
    id: 10,
    purpose: "Họp khẩn về sự cố hệ thống",
    startTime: "2024-02-28T16:00:00",
    endTime: "2024-02-28T17:00:00",
    location: "Phòng họp C - Tầng 3",
    status: "Đã lên lịch",
    attendee: "Team Technical, Team Support, Ban lãnh đạo"
  }
];

export const statistics = [
  {
    title: "Tổng số",
    value: 100,
    trend: 10,
    footer: "Lịch hẹn đã đặt từ trước đến nay",
  },
  {
    title: "Trong tháng này",
    value: 50,
    trend: -10,
    footer: "Lịch hẹn đã đặt trong tháng này",
  },
  {
    title: "Phòng ban nổi bật",
    value: "CNS",
    trend: null,
    footer: "Có số lượng lịch hẹn nhiều nhất",
  }
]