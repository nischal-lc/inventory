import Card from "@/components/dashboard/Card";
import { DollarSign, Package, TrendingUp, TriangleAlert } from "lucide-react";
import React from "react";

const Dashboard = () => {
	return (
		<div className='px-7 mt-6'>
			<h1 className=' text-xl font-bold'>Dashboard</h1>
			<div className='my-7 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3'>
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
					title='Inventory Turnover'
					icon={<TrendingUp className='size-5' />}
					quantity='100'
					subtext='+2.5% more than last month'
				/>
			</div>
		</div>
	);
};

export default Dashboard;
