import { ColumnDef } from "@tanstack/react-table";
import { IRecord } from "../types/Record";
import { z } from "zod";

export const columns: ColumnDef<IRecord>[] = [
  {
    accessorKey: "hocPhan",
    header: "Số lượng học phần",
  },
  {
    accessorKey: "lopTinChi",
    header: "Số lượng lớp tín chỉ",
  },
  {
    accessorKey: "nhomTinChi",
    header: "Số lượng nhóm tín chỉ",
  },
  {
    accessorKey: "canBo_nhomTinChi",
    header: "Số lượng giảng viên lớp tín chỉ",
  },
];

export const formSchema = z.object({
    files: z.instanceof(FileList).refine((files) => files.length > 0, {
        message: "Vui lòng chọn một tệp",
    }),
})