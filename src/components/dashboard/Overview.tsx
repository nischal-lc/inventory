import React from "react";
import {
	Bar,
	BarChart,
	CartesianGrid,
	LabelList,
	XAxis,
	YAxis,
	Pie,
	PieChart,
} from "recharts";
import {
	ChartContainer,
	ChartLegend,
	ChartLegendContent,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import { barChartConfig, pieChartConfig } from "@/lib/chartConfigs";
import { barChartData, pieChartData } from "@/lib/datas";

const Overview = () => {
	return (
		<div className='grid lg:grid-cols-4 md:grid-rows-none grid-rows-2 gap-3'>
			<div className='border rounded-md px-4 py-5 lg:col-span-3 md:col-span-2 sm:col-span-1'>
				<h1 className='text-2xl font-bold'>Inventory Levels by Category</h1>
				<p className='text-sm text-secondary-foreground mb-4'>
					Current stock levels across product categories
				</p>
				<div className='lg:h-[350px] w-full mt-9'>
					<ChartContainer config={barChartConfig} className='h-full w-full'>
						<BarChart
							accessibilityLayer
							data={barChartData}
							margin={{ top: 20 }}>
							<CartesianGrid vertical={false} />
							<XAxis
								dataKey='type'
								tickLine={false}
								tickMargin={10}
								axisLine={false}
							/>
							<YAxis tickLine={false} axisLine={false} tickMargin={10} />
							<ChartTooltip
								cursor={false}
								content={<ChartTooltipContent hideLabel />}
							/>
							<Bar dataKey='quantity' fill='var(--color-quantity)' radius={8}>
								<LabelList
									position='top'
									offset={12}
									className='fill-foreground'
									fontSize={12}
								/>
							</Bar>
						</BarChart>
					</ChartContainer>
				</div>
			</div>
			<div className='border rounded-md px-4 py-5 lg:col-span-1 md:col-span-2 sm:col-span-1'>
				<h1 className='text-2xl font-bold'>Inventory Distribution</h1>
				<p className='text-sm text-secondary-foreground mb-5'>
					Percentage by category
				</p>
				<div className='lg:h-[350px] w-full'>
					<ChartContainer
						config={pieChartConfig}
						className='mx-auto h-full w-full pb-0'>
						<PieChart margin={{ top:10, left: 20, right: 20 }}>
							<ChartTooltip content={<ChartTooltipContent />} />
							<Pie
								data={pieChartData}
								dataKey='quantity'
								label
								nameKey='type'
							/>
							<ChartLegend
								content={<ChartLegendContent nameKey='type' />}
								className='-translate-y-2 flex-wrap items-center text-nowrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center'
							/>
						</PieChart>
					</ChartContainer>
				</div>
			</div>
		</div>
	);
};

export default Overview;
