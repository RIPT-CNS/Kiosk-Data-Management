import { Card } from "@/components/ui/card"
import { Table } from "@/features/IdentificationData"
import Blocks from "@/features/IdentificationData/components/Blocks"

const IdentificationData = () => {
  return (
    <Card className="flex flex-col gap-4 p-4 w-full h-full">
      <div className="gap-4 grid grid-cols-1 md:grid-cols-4">
        <Blocks />
      </div>
      <Table />
    </Card>
  )
}

export default IdentificationData