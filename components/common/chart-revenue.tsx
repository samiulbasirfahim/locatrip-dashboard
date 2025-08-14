"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { RevenueChartData } from "@/types/chart";

const chartConfig = {
    revenue: {
        label: "revenue",
        color: "var(--chart-1)",
    },
} satisfies ChartConfig;

export function ChartRevenue({ chartData }: { chartData: RevenueChartData }) {
    return (
        <ChartContainer
            config={chartConfig}
            className="w-full h-96 !overflow-hidden"
        >
            <AreaChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={true} />
                <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={0}
                    tickFormatter={(value) => value.slice(0, 3)}
                />
                <YAxis
                    dataKey="revenue"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickCount={10}
                    tickFormatter={(value) => `$${value}`}
                />

                <ChartTooltip
                    cursor={{
                        strokeWidth: 1,
                    }}
                    
                    content={<ChartTooltipContent indicator="line" hideLabel/>}
                />

                <Area
                    dataKey="revenue"
                    type="natural"
                    fill="var(--color-revenue)"
                    fillOpacity={0.1}
                    stroke="var(--color-revenue)"
                />
            </AreaChart>
        </ChartContainer>
    );
}
