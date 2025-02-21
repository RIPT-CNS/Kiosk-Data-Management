import { IStatisticBlockProps } from "@/types/StatisticBlock"
import { TrendingUp } from "lucide-react"
import { Badge } from "../ui/badge"
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card"

const StatisticBlock = ({
    title,
    value,
    trend,
    footer,
}: IStatisticBlockProps) => {
    return (
        <Card className="p-4 flex flex-col gap-4">
            <CardTitle>{title}</CardTitle>
            <CardContent className="flex items-center gap-4 p-0">
                <p className="text-3xl font-bold">{value}</p>
                {
                    trend && trend > 0 ? (
                        <Badge variant="outline" className="px-4 py-2 space-x-2 text-green-500 border-none bg-green-500/10">
                            <span>{trend}%</span>
                            <TrendingUp className="size-4" />
                        </Badge>
                    ) : (
                        <Badge variant="outline" className="px-4 space-x-2 text-red-500 border-none bg-red-500/10">
                            <span>{trend}%</span>
                            <TrendingUp className="size-4 transform rotate-180" />
                        </Badge>
                    )
                }
            </CardContent>
            <CardFooter className="p-0 text-xs text-muted-foreground">{footer}</CardFooter>
        </Card>
    )
}

export default StatisticBlock