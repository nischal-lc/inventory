import React from "react";
import InsightsLayout from "./InsightsLayout";
import {
	Activity,
	ChartArea,
	FileDigit,
	PackagePlus,
	Plus,
	ShoppingCart,
} from "lucide-react";

const QuickActions = () => {
	return (
		<InsightsLayout
			className='w-full lg:w-1/4 '
			title='Quick Actions'
			icon={<Activity />}>
			<div className='grid grid-flow-row mt-3 gap-2	'>
				<p className='flex bg-green-600/50 items-center p-2 text-sm font-medium cursor-pointer gap-3 rounded-sm '>
					<Plus className='size-5' /> Add new product
				</p>
				<p className='flex bg-blue-600/50 items-center p-2 text-sm font-medium cursor-pointer gap-3 rounded-sm '>
					<PackagePlus className='size-5' /> Update stock levels
				</p>
				<p className='flex bg-yellow-600/50 items-center p-2 text-sm font-medium cursor-pointer gap-3 rounded-sm '>
					<FileDigit className='size-5' /> View low stocks
				</p>
				<p className='flex bg-emerald-600/50 items-center p-2 text-sm font-medium cursor-pointer gap-3 rounded-sm '>
					<ShoppingCart className='size-5' /> Process Orders
				</p>
					<p className='flex bg-sky-600/50 items-center p-2 text-sm font-medium cursor-pointer gap-3 rounded-sm '>
						<ChartArea className='size-5' /> View Reports
					</p>
			</div>
		</InsightsLayout>
	);
};

export default QuickActions;
