import { Checkbox } from "@/components/ui/checkbox";
import { DataTableRowActions } from "@/components/ui/data-table-row-actions";
import { ColumnDef } from "@tanstack/react-table";
import { IRecord } from "../types/Record";

export const columns: ColumnDef<IRecord>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Chọn tất cả"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Chọn hàng"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "vai_tro",
    header: "Vai trò",
  },
  {
    accessorKey: "count",
    header: "Số lượng người dùng",
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} canEdit={false} />,
  },
];

export const data: IRecord[] = [
  {
    vai_tro: "Khách",
    count: 50,
  },
  {
    vai_tro: "Cán bộ",
    count: 100,
  },
  {
    vai_tro: "Sinh viên",
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