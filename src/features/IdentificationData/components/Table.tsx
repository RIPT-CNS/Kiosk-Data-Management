import { DataTable } from "@/components/ui/data-table"
import { columns, data } from "../utils/constants"

const Table = () => {
  return (
    <DataTable columns={columns} data={data} canEdit={false} />
  )
}

export default Table