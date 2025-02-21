"use client"

import type { Row } from "@tanstack/react-table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"

interface DataTableViewDialogProps<TData> {
  row: Row<TData>
}

export function DataTableViewDialog<TData>({ row }: DataTableViewDialogProps<TData>) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>View</DropdownMenuItem>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>View Item Details</DialogTitle>
          <DialogDescription>Here are the details of the selected item.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div>
            <strong>Name:</strong> {row.getValue("name")}
          </div>
          <div>
            <strong>Description:</strong> {row.getValue("description")}
          </div>
          {/* Add more fields as needed */}
        </div>
      </DialogContent>
    </Dialog>
  )
}

