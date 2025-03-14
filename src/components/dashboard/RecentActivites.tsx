import React from "react";
import InsightsLayout from "./InsightsLayout";
import {
	AlertTriangle,
	Box,
	PackageCheck,
	PackagePlus,
	ShoppingCart,
	Timer,
} from "lucide-react";
import { Badge } from "../ui/badge";

interface CardProps {
	type:
		| "stock-update"
		| "new-order"
		| "low-stock"
		| "order-done"
		| "new-product";
	info: string;
	by: string;
	time: string;
	name: string;
}

const RecentActivites = () => {
	return (
		<InsightsLayout title='Recent Activities' icon={<Timer />}>
			<div className='flex flex-col'>
				<Card
					type='new-order'
					info='Added 25 nike shoes'
					by='john'
					name='Nike Air Jordan'
					time='2 hours ago'
				/>
			</div>
		</InsightsLayout>
	);
};

const Card = ({ type, info, by, time, name }: CardProps) => {
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
		<div className='bg-accent rounded-md flex gap-3 px-3 py-4 mt-2'>
			<div className={`p-2 text-${color} bg-white/10  rounded-full max-h-max`}>
				{icon}
			</div>
			<div className='flex flex-col min-w-0'>
				<p className='font-semibold text-lg truncate' >{title}</p>
				<p className='text-[15px] text-neutral-900 text-medium dark:text-neutral-300'>
					{name}
				</p>
				<p className='text-secondary-foreground text-[13px] leading-3 mb-2'>
					{info}
				</p>
				<p className='text-[12px] text-secondary-foreground'>by {by}</p>
			</div>
			<div className='ml-auto'>
				<Badge className="rounded-full bg-primary/30">{time} </Badge>
			</div>
		</div>
	);
};

export default RecentActivites;
