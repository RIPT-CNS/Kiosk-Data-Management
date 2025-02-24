"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
    { month: "Th1", appointments: 45 },
    { month: "Th2", appointments: 52 },
    { month: "Th3", appointments: 61 },
    { month: "Th4", appointments: 58 },
    { month: "Th5", appointments: 63 },
    { month: "Th6", appointments: 70 },
    { month: "Th7", appointments: 75 },
    { month: "Th8", appointments: 68 },
    { month: "Th9", appointments: 62 },
    { month: "Th10", appointments: 59 },
    { month: "Th11", appointments: 55 },
    { month: "Th12", appointments: 50 },
]

const chartConfig = {
    appointments: {
        label: "Số lịch hẹn",
        color: "hsl(var(--chart-1))",
    },
}

const AnnualChart = () => {
    const totalAppointments = React.useMemo(() => chartData.reduce((acc, curr) => acc + curr.appointments, 0), [])

    return (
        <Card className="border-primary/20 hover:border-primary w-full transition-all duration-300">
            <CardHeader className="flex flex-row justify-between items-center space-y-0 pb-2">
                <div>
                    <CardTitle>Trong năm nay</CardTitle>
                    <CardDescription>Số lịch hẹn đã được đặt trong năm {
                        new Date().getFullYear()
                    }</CardDescription>
                </div>
                <div className="font-bold text-2xl">Tổng số: {totalAppointments}</div>
            </CardHeader>
            <CardContent className="flex-1">
                <ChartContainer config={chartConfig} className="w-full max-h-56">
                    <BarChart
                        data={chartData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent className="w-40" nameKey="appointments" />} />
                        <Bar dataKey="appointments" fill={`var(--color-appointments)`} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}

export default AnnualChart

