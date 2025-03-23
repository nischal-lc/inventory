"use client";
import Card from "@/components/dashboard/Card";
import QuickActions from "@/components/dashboard/QuickActions";
import RecentActivites from "@/components/dashboard/RecentActivites";
import Report from "@/components/dashboard/Report";
import Summary from "@/components/dashboard/Summary";
import TopProducts from "@/components/dashboard/TopProducts";
import { Button } from "@/components/ui/button";
import LayoutLabel from "@/components/ui/LayoutLabel";
import { LOW_STOCK_THRESHOLD } from "@/lib/datas";
import { fetchProductData } from "@/lib/actions";
import { Product } from "@/lib/types";
import {
	DollarSign,
	Package,
	Plus,
	TrendingUp,
	TriangleAlert,
} from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Dashboard = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [lowStocks, setLowStocks] = useState<Product[]>([]);
	const [totalValue, setTotalValue] = useState<number>(0);
	const [totalSales, setTotalSales] = useState<number>(0);
	const [topSelling, setTopSelling] = useState<Product[]>([]);
	useEffect(() => {
		fetchProductData()
			.then((data) => {
				setProducts(data);
				setLowStocks(
					data.filter(
						(product: Product) => product.inStock < LOW_STOCK_THRESHOLD
					)
				);
				setTotalValue(
					data.reduce((acc: number, product: Product) => acc + product.price, 0)
				);
				setTotalSales(
					data.reduce(
						(acc: number, product: Product) => acc + Number(product.sales),
						0
					)
				);
				setTopSelling(
					data.sort((a: Product, b: Product) => b.sales - a.sales).slice(0, 5)
				);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className='md:px-7 px-3 mt-2'>
			<div className='flex justify-between'>
				<h1 className=' text-2xl font-bold'>Dashboard</h1>
				<Link href='/inventory/add'>
					<Button variant='default' className='cursor-pointer text-white'>
						<Plus /> Add new product
					</Button>
				</Link>
			</div>
			<LayoutLabel>Overview</LayoutLabel>
			<div className=' grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3'>
				<Card
					title='Total items'
					icon={<Package className='size-5' />}
					quantity={`${products.length}`}
					subtext='+2.5% more than last month'
				/>
				<Card
					title='Low stock items'
					icon={<TriangleAlert className='text-yellow-500 size-5' />}
					quantity={`${lowStocks.length}`}
					subtext='+3 since last week'
				/>
				<Card
					title='Total value'
					icon={<DollarSign className='size-5 text-emerald-600' />}
					quantity={`Rs ${totalValue.toLocaleString()}`}
					subtext='+20.1% from last month'
				/>
				<Card
					title='Total Sales'
					icon={<TrendingUp className='size-5' />}
					quantity={`${totalSales}`}
					subtext='+2.5% more than last month'
				/>
			</div>
			<LayoutLabel>Insights</LayoutLabel>
			<div className='flex flex-col lg:flex-row-reverse gap-2 mt-2 mb-4'>
				<TopProducts products={topSelling} />
				<Summary />
			</div>
			<div className='flex flex-col lg:flex-row gap-2 my-2 '>
				<RecentActivites />
				<QuickActions />
			</div>
			<LayoutLabel>Reports</LayoutLabel>
			<Report />
		</div>
	);
};

export default Dashboard;
