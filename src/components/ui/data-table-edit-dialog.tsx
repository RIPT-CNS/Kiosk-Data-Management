"use client"

import type { Row } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"

interface DataTableEditDialogProps<TData> {
  row: Row<TData>
}

export function DataTableEditDialog<TData>({ row }: DataTableEditDialogProps<TData>) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>Chỉnh Sửa</DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Chỉnh sửa thông tin</DialogTitle>
          <DialogDescription>Sau khi thay đổi thông tin. Nhấn Lưu thay đổi để hoàn thất</DialogDescription>
        </DialogHeader>
        <div className="gap-4 grid py-4">
          <div className="items-center gap-4 grid grid-cols-4">
            <Label htmlFor="name" className="text-right">
              Tên
            </Label>
            <Input id="name" defaultValue={row.getValue("name")} className="col-span-3" />
          </div>
          <div className="items-center gap-4 grid grid-cols-4">
            <Label htmlFor="description" className="text-right">
              Mô tả
            </Label>
            <Input id="description" defaultValue={row.getValue("description")} className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Lưu thay đổi</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

