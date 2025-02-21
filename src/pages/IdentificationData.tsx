import { Card } from "@/components/ui/card"
import { Table } from "@/features/IdentificationData"
import Blocks from "@/features/IdentificationData/components/Blocks"

const IdentificationData = () => {
  return (
    <Card className="flex flex-col p-4 w-full h-full gap-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <Blocks />
      </div>
      <Table />
    </Card>
  )
}

export default IdentificationData