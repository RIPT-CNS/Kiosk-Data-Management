import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
    { role: "guest", bookings: 15, fill: "var(--color-guest)" },
    { role: "student", bookings: 22, fill: "var(--color-student)" },
    { role: "officer", bookings: 13, fill: "var(--color-officer)" },
]

const chartConfig = {
    guest: {
        label: "Khách",
        color: "hsl(var(--chart-1))",
    },
    student: {
        label: "Sinh viên",
        color: "hsl(var(--chart-2))",
    },
    officer: {
        label: "Cán bộ",
        color: "hsl(var(--chart-3))",
    },
} satisfies ChartConfig

const RoleChart = () => {
    return (
        <Card className="flex-col border-primary/20 hover:border-primary w-full transition-all duration-300 lex">
            <CardHeader className="items-center pb-0">
                <CardTitle>Thống kê theo vai trò</CardTitle>
                <CardDescription>Tháng 2</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
                <ChartContainer config={chartConfig} className="w-full max-h-56">
                    <PieChart>
                        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                        <ChartLegend content={<ChartLegendContent />} />
                        <Pie data={chartData} dataKey="bookings" nameKey="role" strokeWidth={5} />
                    </PieChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 font-medium leading-none">
                    Số lượng khách đặt lịch hẹn tăng 15% so với tháng trước <TrendingUp className="size-4" />
                </div>
            </CardFooter>
        </Card>
    )
}

export default RoleChart