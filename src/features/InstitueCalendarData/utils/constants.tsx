import { DataTableColumnHeader } from "@/components/ui/data-table-column-header";
import { formatISODate } from "@/utils/functions";
import { ColumnDef } from "@tanstack/react-table";
import { IRecord } from "../types/Record";
import { z } from "zod";

export const columns: ColumnDef<IRecord>[] = [
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
];


export const formSchema = z.object({
    files: z
        .instanceof(FileList)
        .refine(
            (files) =>
                files.length > 0 && files[0].type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            {
                message: "Vui lòng chọn một tệp .docx",
            },
        ),
})