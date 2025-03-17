import React from "react";
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from "recharts";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import { salesInvData } from "@/lib/datas";
import { salesInvConfig } from "@/lib/chartConfigs";

const Sales = () => {
	return (
		<div className='border rounded-md px-4 py-5'>
			<h1 className='text-2xl font-bold'>Sales vs Inventory value</h1>
			<p className='text-sm text-secondary-foreground'>
				Relationship between sales and inventory investment
			</p>
			<div className='h-[350px] w-full'>
				<ChartContainer className='mt-6 h-full w-full' config={salesInvConfig}>
					<LineChart
						accessibilityLayer
						data={salesInvData}
						margin={{
							left: 30,
							right: 30,
							top: 20,
							bottom: 20,
						}}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey='month'
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<YAxis
							tickLine={false}
							axisLine={false}
							tickMargin={10}
							tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
						/>
						<ChartTooltip
							content={
								<ChartTooltipContent
									formatter={(value) => `$${Number(value).toLocaleString()}`}
								/>
							}
						/>
						<Legend verticalAlign='top' height={36} />

						<Line
							type='monotone'
							dataKey='sales'
							stroke='var(--color-sales)'
							strokeWidth={2}
							dot={{ r: 4 }}
							activeDot={{ r: 6 }}
						/>
						<Line
							type='monotone'
							dataKey='inventory'
							stroke='var(--color-inventory)'
							strokeWidth={2}
							dot={{ r: 4 }}
							activeDot={{ r: 6 }}
						/>
					</LineChart>
				</ChartContainer>
			</div>
		</div>
	);
};

export default Sales;
