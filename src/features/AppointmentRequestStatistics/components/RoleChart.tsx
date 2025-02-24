import { TrendingUp } from "lucide-react"
import * as React from "react"
import { Label, Pie, PieChart } from "recharts"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
    { role: "patient", bookings: 450, fill: "var(--color-patient)" },
    { role: "doctor", bookings: 200, fill: "var(--color-doctor)" },
    { role: "nurse", bookings: 150, fill: "var(--color-nurse)" },
    { role: "admin", bookings: 50, fill: "var(--color-admin)" },
    { role: "other", bookings: 30, fill: "var(--color-other)" },
]

const chartConfig = {
    bookings: {
        label: "Bookings",
    },
    patient: {
        label: "Patient",
        color: "hsl(var(--chart-1))",
    },
    doctor: {
        label: "Doctor",
        color: "hsl(var(--chart-2))",
    },
    nurse: {
        label: "Nurse",
        color: "hsl(var(--chart-3))",
    },
    admin: {
        label: "Admin",
        color: "hsl(var(--chart-4))",
    },
    other: {
        label: "Other",
        color: "hsl(var(--chart-5))",
    },
} satisfies ChartConfig

const RoleChart = () => {
    const totalBookings = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.bookings, 0)
    }, [])

    return (
        <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
                <CardTitle>User Role Appointment Statistics</CardTitle>
                <CardDescription>July 2025</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer config={chartConfig} className="mx-auto max-h-[250px] aspect-square">
                    <PieChart>
                        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                        <Pie data={chartData} dataKey="bookings" nameKey="role" innerRadius={60} strokeWidth={5}>
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                                                <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground font-bold text-3xl">
                                                    {totalBookings.toLocaleString()}
                                                </tspan>
                                                <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-foreground">
                                                    Bookings
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 font-medium leading-none">
                    Bookings increased by 8.3% this month <TrendingUp className="w-4 h-4" />
                </div>
                <div className="text-muted-foreground leading-none">
                    Showing appointment bookings by user role for July 2025
                </div>
            </CardFooter>
        </Card>
    )
}

export default RoleChart