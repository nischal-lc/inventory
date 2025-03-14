import Card from "@/components/dashboard/Card";
import RecentActivites from "@/components/dashboard/RecentActivites";
import Summary from "@/components/dashboard/Summary";
import TopProducts from "@/components/dashboard/TopProducts";
import { Button } from "@/components/ui/button";
import LayoutLabel from "@/components/ui/LayoutLabel";
import {
	DollarSign,
	Package,
	Plus,
	TrendingUp,
	TriangleAlert,
} from "lucide-react";
import React from "react";

const Dashboard = () => {
	return (
		<div className='px-7 mt-2'>
			<div className='flex justify-between'>
				<h1 className=' text-xl font-bold'>Dashboard</h1>
				<Button variant='secondary' className="cursor-pointer text-white">
					<Plus /> Add new product
				</Button>
			</div>
			<LayoutLabel>Overview</LayoutLabel>
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
			<LayoutLabel>Insights</LayoutLabel>
			<div className='grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-none gap-2 my-2 '>
				<TopProducts />
				<Summary />
			</div>
			<div className='grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-none gap-2 my-2 '>
				<RecentActivites />
			</div>
		</div>
	);
};

export default Dashboard;
