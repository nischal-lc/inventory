"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Filter } from "lucide-react";
import { productCards } from "@/lib/datas";
import ProductCard from "@/components/ui/ProductCard";

type Checked = DropdownMenuCheckboxItemProps["checked"];

const Page = () => {
	const [pendingOrders, setPendingOrders] = React.useState<Checked>(false);
	const [lowStocks, setLowStocks] = React.useState<Checked>(false);
	const [highestSelling, setHighestSelling] = React.useState<Checked>(false);
	const clearFilter = () => {
		setPendingOrders(false);
		setLowStocks(false);
		setHighestSelling(false);
	};
	return (
		<div className='md:px-7 px-3 mt-3'>
			<h1 className=' text-2xl font-bold'>Inventory</h1>
			<div className='flex gap-2 mt-3 flex-wrap z-50'>
				<Input
					className='border-primary-foreground/20 w-[200px]'
					placeholder='Search products...'
				/>
				<Button className='cursor-pointer'>Search</Button>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant='outline' className='cursor-pointer'>
							<Filter /> Filter
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className='w-56'>
						<DropdownMenuLabel>Filter Products</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuCheckboxItem
							checked={pendingOrders}
							onCheckedChange={setPendingOrders}>
							Order Pending
						</DropdownMenuCheckboxItem>
						<DropdownMenuCheckboxItem
							checked={lowStocks}
							onCheckedChange={setLowStocks}>
							Low stocks
						</DropdownMenuCheckboxItem>
						<DropdownMenuCheckboxItem
							checked={highestSelling}
							onCheckedChange={setHighestSelling}>
							Highest selling
						</DropdownMenuCheckboxItem>
					</DropdownMenuContent>
				</DropdownMenu>
				<Button
					variant='destructive'
					className='cursor-pointer'
					onClick={clearFilter}>
					Clear filters
				</Button>
			</div>
			<div className='space-y-3 my-7'>
				{productCards.length > 0 ? (
					productCards.map((item, index) => (
						<ProductCard
							key={index}
							image={item.image}
							inStock={item.inStock}
							name={item.name}
							rating={item.rating}
							sales={item.sales}
						/>
					))
				) : (
					<p className='text-center py-12 text-secondary-foreground/70 select-none'>
						No data available
					</p>
				)}
			</div>
		</div>
	);
};

export default Page;
