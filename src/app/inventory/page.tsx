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
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Filter, Pen, Trash2 } from "lucide-react";
import { allProducts, LOW_STOCK_THRESHOLD } from "@/lib/datas";
import { allProductsProps } from "@/lib/types";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

type Checked = DropdownMenuCheckboxItemProps["checked"];

const Page = () => {
	const [pendingOrders, setPendingOrders] = React.useState<Checked>(false);
	const [lowStocks, setLowStocks] = React.useState<Checked>(false);
	const [highestSelling, setHighestSelling] = React.useState<Checked>(false);
	const [searchTerm, setSearchTerm] = React.useState<string>("");
	const clearFilter = () => {
		setPendingOrders(false);
		setLowStocks(false);
		setHighestSelling(false);
	};
	const filteredProducts = React.useMemo(() => {
		return allProducts.filter((item) => {
			if (pendingOrders && !item.orderPending) return false;
			if (lowStocks && item.inStock > LOW_STOCK_THRESHOLD) return false;
			if (highestSelling && item.sales < 1000) return false;
			if (
				searchTerm &&
				!item.name.toLowerCase().includes(searchTerm.toLowerCase())
			)
				return false;
			return true;
		});
	}, [pendingOrders, lowStocks, highestSelling, searchTerm]);
	return (
		<div className='md:px-7 px-3 mt-3'>
			<h1 className=' text-2xl font-bold'>Inventory</h1>
			<div className='flex gap-2 mt-3 flex-wrap z-50'>
				<Input
					className='border-primary-foreground/20 w-[200px]'
					placeholder='Search products...'
					value={searchTerm}
					onInput={(e) => setSearchTerm(e.currentTarget.value)}
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
			<div className='my-7 '>
				<div className='grid grid-cols-6 md:grid-cols-8 justify-items-start items-center border bg-accent p-3 font-medium '>
					<p className='hidden md:block'>ID</p>
					<p className='col-span-2'>Name</p>
					<p className='hidden md:block'>Image</p>
					<p>Sales</p>
					<p>In Stock</p>
					<p>Status</p>
					<p>Actions</p>
				</div>
				<div className=''>
					{filteredProducts.map((item, index) => (
						<InvProdCard
							key={index}
							id={item.id}
							orderPending={item.orderPending}
							image={item.image}
							inStock={item.inStock}
							name={item.name}
							sales={item.sales}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

const InvProdCard = ({
	id,
	image,
	name,
	sales,
	inStock,
	orderPending,
}: allProductsProps) => {
	return (
		<div className='grid grid-cols-6 md:grid-cols-8 border-b justify-items-start items-center px-3 py-2 '>
			<p className='hidden md:block'>{id}</p>
			<p className='col-span-2 truncate text-ellipsis max-w-[100px] md:max-w-max'>
				{name}
			</p>
			<Image
				height={100}
				width={100}
				src={image}
				alt={name}
				className='rounded-md hidden md:block'
			/>
			<p>{sales}</p>
			<p
				className={`${
					inStock <= LOW_STOCK_THRESHOLD ? "text-red-500 font-medium" : null
				}`}>
				{inStock}
			</p>
			{orderPending ? (
				<Badge className='bg-yellow-500/60'>Pending</Badge>
			) : (
				<Badge>Completed</Badge>
			)}
			<div className='flex gap-2'>
				<Button
					variant='outline'
					size='sm'
					className='cursor-pointer'
					title='Edit'>
					<Pen className='size-4' />
					<div className='sr-only'>edit</div>
				</Button>
				<Dialog>
					<DialogTrigger className='cursor-pointer bg-destructive px-2 rounded-md text-white'>
						<Trash2 className='size-4' />
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Are you absolutely sure?</DialogTitle>
							<DialogDescription>
								This action cannot be undone. This will permanently delete your
								account and remove your data from our servers.
							</DialogDescription>
						</DialogHeader>
						<DialogFooter>
							<Button type='submit' variant="destructive" className="cursor-pointer">Delete product</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</div>
		</div>
	);
};
export default Page;
