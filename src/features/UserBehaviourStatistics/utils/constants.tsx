import { ColumnDef } from "@tanstack/react-table";
import { IRecord } from "../types/Record";

export const columns: ColumnDef<IRecord>[] = [
  {
    accessorKey: "role",
    header: "Vai trò",
  },
  {
    accessorKey: "count",
    header: "Số lượng người dùng",
  },
];

export const data: IRecord[] = [
  {
    role: "Khách",
    count: 50,
  },
  {
    role: "Cán bộ",
    count: 100,
  },
  {
    role: "Sinh viên",
    count: 50,
  },
];

export const statistics = [
  {
    title: "Số lượt xác thực",
    value: 80,
    trend: 10,
    footer: "Người đã xác thực thông qua Kiosk",
  },
  {
    title: "Số lượt điểm danh",
    value: 60,
    trend: -10,
    footer: "Sinh viên đã điểm danh qua Kiosk",
  }
]