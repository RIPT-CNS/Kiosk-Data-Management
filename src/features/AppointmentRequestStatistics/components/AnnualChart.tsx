"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
    { month: "Jan", appointments: 45 },
    { month: "Feb", appointments: 52 },
    { month: "Mar", appointments: 61 },
    { month: "Apr", appointments: 58 },
    { month: "May", appointments: 63 },
    { month: "Jun", appointments: 70 },
    { month: "Jul", appointments: 75 },
    { month: "Aug", appointments: 68 },
    { month: "Sep", appointments: 62 },
    { month: "Oct", appointments: 59 },
    { month: "Nov", appointments: 55 },
    { month: "Dec", appointments: 50 },
]

const chartConfig = {
    appointments: {
        label: "Appointments",
        color: "hsl(var(--chart-1))",
    },
}

const AnnualChart = () => {
    const totalAppointments = React.useMemo(() => chartData.reduce((acc, curr) => acc + curr.appointments, 0), [])

    return (
        <Card className="w-full">
            <CardHeader className="flex flex-row justify-between items-center space-y-0 pb-2">
                <div>
                    <CardTitle>Trong năm nay</CardTitle>
                    <CardDescription>Số lịch hẹn đã được đặt trong năm {
                        new Date().getFullYear()
                    }</CardDescription>
                </div>
                <div className="font-bold text-2xl">Tổng số: {totalAppointments}</div>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="w-full min-h-[100px] max-h-[177px]">
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
                        <ChartTooltip content={<ChartTooltipContent className="w-[150px]" nameKey="appointments" />} />
                        <Bar dataKey="appointments" fill={`var(--color-appointments)`} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}

export default AnnualChart

