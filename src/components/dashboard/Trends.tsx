import React from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import { overviewData } from "@/lib/datas";
import { chartConfig } from "@/lib/chartConfigs";

const Trends = () => {
	return (
		<div className='border rounded-md px-4 py-5'>
			<h1 className='text-2xl font-bold'>Total Inventory Value Over Time</h1>
			<p className='text-sm text-secondary-foreground'>
				Financial value of inventory across months
			</p>
			<div className='h-[350px] w-full'>
				<ChartContainer className='mt-6 h-full w-full' config={chartConfig}>
					<LineChart
						accessibilityLayer
						data={overviewData}
						margin={{
							left: 30,
							right: 30,
							top: 20,
							bottom: 20,
						}}>
						<CartesianGrid vertical={false} strokeDasharray='3 3' />
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
							className='geist'
							tickMargin={10}
							tickFormatter={(value) => `$${value.toLocaleString()}`}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
						/>
						<Line
							dataKey='value'
							type='monotone'
							stroke='var(--color-value)'
							strokeWidth={2}
							activeDot={{
								r: 6,
							}}
						/>
					</LineChart>
				</ChartContainer>
			</div>
		</div>
	);
};

export default Trends;
