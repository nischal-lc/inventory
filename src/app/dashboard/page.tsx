import Card from "@/components/dashboard/Card";
import TopProducts from "@/components/dashboard/TopProducts";
import { DollarSign, Package, TrendingUp, TriangleAlert } from "lucide-react";
import React from "react";

const Dashboard = () => {
	return (
		<div className='px-7 mt-2'>
			<h1 className=' text-xl font-bold'>Dashboard</h1>
			<p className='mt-1 pt-4 pb-2 text-sm font-medium text-secondary-foreground'>
				Overview
			</p>
			<div className=' grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3'>
				<Card
					title='Total items'
					icon={<Package className='size-5' />}
					quantity='100'
					subtext='+2.5% more than last month'
				/>
				<Card
					title='Low stock items'
					icon={<TriangleAlert className='text-yellow-500 size-5' />}
					quantity='100'
					subtext='+3 since last week'
				/>
				<Card
					title='Total value'
					icon={<DollarSign className='size-5 text-emerald-600' />}
					quantity='Rs. 1,00,0203'
					subtext='+20.1% from last month'
				/>
				<Card
					title='Total Sales'
					icon={<TrendingUp className='size-5' />}
					quantity='12,507'
					subtext='+2.5% more than last month'
				/>
			</div>
			<p className='pt-4 text-sm font-medium text-secondary-foreground'>
				Insights
			</p>
			<div className='grid grid-rows-2 md:grid-cols-2 md:grid-rows-none gap-2 my-2 min-h-[100vh]'>
				<TopProducts />
				<div className='border  rounded-md'></div>
			</div>
		</div>
	);
};

export default Dashboard;
