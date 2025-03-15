import React from "react";
import InsightsLayout from "./InsightsLayout";
import {
	AlertTriangle,
	Box,
	ChevronRight,
	PackageCheck,
	PackagePlus,
	ShoppingCart,
	Timer,
} from "lucide-react";
import { Badge } from "../ui/badge";
import { recentActivities } from "@/lib/datas";
import { RecentCardProps } from "@/lib/types";


const RecentActivites = () => {
	return (
		<InsightsLayout className="lg:w-3/4 w-full" title='Recent Activities' icon={<Timer />}>
			<div className='flex flex-col'>
				{
					recentActivities.length > 0 ? (
						recentActivities.map((item, index) => (
							<Card
								key={index}
								type={item.type as RecentCardProps["type"]}
								info={item.info}
								by={item.by}
								time={item.time}
								name={item.name}	
							/>
						))
					) : (
						<p className="self-center py-12 text-secondary-foreground/70 select-none">	
							No recent activities
						</p>
					)
				}
			</div>
		</InsightsLayout>
	);
};

const Card = ({ type, info, by, time, name }: RecentCardProps) => {
	const typeData = {
		"stock-update": {
			icon: <Box />,
			color: "blue-500",
			title: "Stock Updated",
		},
		"new-order": {
			icon: <ShoppingCart />,
			color: "green-500",
			title: "New Order Received",
		},
		"low-stock": {
			icon: <AlertTriangle />,
			color: "yellow-500",
			title: "Low Stock Alert",
		},
		"order-done": {
			icon: <PackageCheck />,
			color: "purple-500",
			title: "Order Completed",
		},
		"new-product": {
			icon: <PackagePlus />,
			color: "pink-500",
			title: "New Product Added",
		},
	};
	const { icon, title, color } = typeData[type];
	return (
		<div className='bg-accent rounded-md flex gap-3 px-3 py-4 mt-2 group cursor-pointer'>
			<div className={`p-2 text-${color}  bg-white/10  rounded-full max-h-max`}>
				{icon}
			</div>
			<div className='flex flex-col min-w-0'>
				<p className={`font-semibold text-lg truncate text-${color}`}>
					{title}
				</p>
				<p className='text-[15px] text-neutral-900 text-medium dark:text-neutral-300'>
					{name}
				</p>
				<p className='text-secondary-foreground text-[13px] leading-3 mb-2'>
					{info}
				</p>
				<p className='text-[12px] text-secondary-foreground'>by {by}</p>
			</div>
			<div className='ml-auto flex flex-col items-end justify-between'>
				<Badge className='rounded-full bg-primary/30'>{time} </Badge>
				<div className='p-1 text-secondary-foreground/60 transition-colors duration-100 group-hover:text-white'>
					<ChevronRight />
				</div>
			</div>
		</div>
	);
};

export default RecentActivites;
