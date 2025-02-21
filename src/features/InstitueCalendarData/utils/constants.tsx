import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { DataTableRowActions } from "@/components/ui/data-table-row-actions";
import { formatISODate } from "@/utils/functions";
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
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
  },
  {
    accessorKey: "name",
    header: "Tên",
  },
  {
    accessorKey: "iso_datetime",
    header: "Thời gian diễn ra",
    cell: ({ row }) => (
      <span>{formatISODate(row.original.iso_datetime)}</span>
    )
  },
  {
    accessorKey: "location",
    header: "Địa điểm",
  },
  {
    accessorKey: "attendees",
    header: "Bên tham gia",
  },
  {
    accessorKey: "preparation",
    header: "Bên chuẩn bị",
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} canEdit={false} />,
  },
];
