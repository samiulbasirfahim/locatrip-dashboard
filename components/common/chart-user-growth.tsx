"use client";
import { UserGrowthChartData } from "@/types/chart";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "../ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartConfig = {
    value: {
        label: "value",
        color: "var(--color-primary)",
    },
} satisfies ChartConfig;

export default function ChartUserGrowth({
    chartData,
}: {
    chartData: UserGrowthChartData;
}) {
    return (
        <ChartContainer
            config={chartConfig}
            className="w-full h-96 !overflow-hidden"
        >
            <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={true} />
                <XAxis
                    dataKey={"month"}
                    axisLine={false}
                    tickLine={false}
                    tickMargin={0}
                    tickFormatter={(value) => value.slice(0, 3)}
                />

                <YAxis
                    dataKey="value"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickCount={10}
                    tickFormatter={(value) => `${value}%`}
                />
                <Bar
                    dataKey={"value"}
                    type="natural"
                    fill="var(--color-value)"
                    fillOpacity={1}
                    radius={8}
                />

                <ChartTooltip
                    cursor={{
                        opacity: 0.2,
                        radius: 8
                    }}
                    content={<ChartTooltipContent indicator="line" hideLabel />}
                />
            </BarChart>
        </ChartContainer>
    );
}
