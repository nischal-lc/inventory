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
import { ArrowDownNarrowWide, Filter, Pen, Plus, Trash2 } from "lucide-react";
import { allProducts, LOW_STOCK_THRESHOLD } from "@/lib/datas";
import { allProductsProps } from "@/lib/types";
import Link from "next/link";

type Checked = DropdownMenuCheckboxItemProps["checked"];

const Page = () => {
	const [lowStocks, setLowStocks] = React.useState<Checked>(false);
	const [highestSelling, setHighestSelling] = React.useState<Checked>(false);
	const [searchTerm, setSearchTerm] = React.useState<string>("");
	const [sortCriteria, setSortCriteria] = React.useState<
		"price" | "quantity" | null
	>(null);
	const [sortOrder, setSortOrder] = React.useState<
		"ascending" | "descending" | null
	>(null);

	const [selectedCategory, setSelectedCategory] = React.useState<string | null>(
		null
	);

	const clearFilter = () => {
		setLowStocks(false);
		setHighestSelling(false);
		setSelectedCategory(null);
		setSearchTerm("");
		setSortCriteria(null);
		setSortOrder(null);	
	};
	const filteredProducts = React.useMemo(() => {
		let products = allProducts.filter((item) => {
			if (lowStocks && item.inStock > LOW_STOCK_THRESHOLD) return false;
			if (highestSelling && item.sales < 1000) return false;
			if (selectedCategory && item.category !== selectedCategory) return false;
			if (
				searchTerm &&
				!item.name.toLowerCase().includes(searchTerm.toLowerCase())
			)
				return false;
			return true;
		});

		if (sortCriteria && sortOrder) {
			products = [...products].sort((a, b) => {
				if (sortCriteria === "price") {
					return sortOrder === "ascending"
						? a.price - b.price
						: b.price - a.price;
				} else if (sortCriteria === "quantity") {
					return sortOrder === "ascending"
						? a.inStock - b.inStock
						: b.inStock - a.inStock;
				}
				return 0;
			});
		}
		return products;
	}, [
		lowStocks,
		highestSelling,
		searchTerm,
		selectedCategory,
		sortCriteria,
		sortOrder,
	]);
	return (
		<div className='md:px-7 px-3 mt-3'>
			<h1 className=' text-2xl font-bold'>Inventory</h1>
			<div className='flex gap-2 mt-3 flex-wrap'>
				<Input
					className='border-primary-foreground/20 w-[200px]'
					placeholder='Search products...'
					value={searchTerm}
					onInput={(e) => setSearchTerm(e.currentTarget.value)}
				/>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant='outline' className='cursor-pointer'>
							<Filter /> Filter
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className='w-56'>
						<DropdownMenuLabel className='select-none'>
							Filter Products
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
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
						<DropdownMenuLabel className='select-none'>
							Select Category
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuCheckboxItem
							checked={selectedCategory === null}
							onCheckedChange={() => setSelectedCategory(null)}>
							All Categories
						</DropdownMenuCheckboxItem>
						{[...new Set(allProducts.map((p) => p.category))].map(
							(category, index) => (
								<DropdownMenuCheckboxItem
									key={index}
									checked={selectedCategory === category}
									onCheckedChange={() => setSelectedCategory(category)}>
									{category}
								</DropdownMenuCheckboxItem>
							)
						)}
					</DropdownMenuContent>
				</DropdownMenu>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant='outline' className='cursor-pointer'>
							<ArrowDownNarrowWide /> Sort
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className='w-56'>
						<DropdownMenuLabel className='select-none'>Sort by</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuCheckboxItem
							checked={sortCriteria === "price" && sortOrder === "ascending"}
							onCheckedChange={() => {
								setSortCriteria("price");
								setSortOrder("ascending");
							}}>
							Price: Low to High
						</DropdownMenuCheckboxItem>
						<DropdownMenuCheckboxItem
							checked={sortCriteria === "price" && sortOrder === "descending"}
							onCheckedChange={() => {
								setSortCriteria("price");
								setSortOrder("descending");
							}}>
							Price: High to Low
						</DropdownMenuCheckboxItem>
						<DropdownMenuCheckboxItem
							checked={sortCriteria === "quantity" && sortOrder === "ascending"}
							onCheckedChange={() => {
								setSortCriteria("quantity");
								setSortOrder("ascending");
							}}>
							Quantity: Low to High
						</DropdownMenuCheckboxItem>
						<DropdownMenuCheckboxItem
							checked={
								sortCriteria === "quantity" && sortOrder === "descending"
							}
							onCheckedChange={() => {
								setSortCriteria("quantity");
								setSortOrder("descending");
							}}>
							Quantity: High to Low
						</DropdownMenuCheckboxItem>
					</DropdownMenuContent>
				</DropdownMenu>

				<Button
					variant='destructive'
					className='cursor-pointer'
					onClick={clearFilter}>
					Clear filters
				</Button>
				<Link href='/inventory/add' className='md:ml-auto'>
					<Button variant='default' className='cursor-pointer ml-2 text-white'>
						<Plus />
						Add product
					</Button>
				</Link>
			</div>

			<div className='my-7 '>
				<div className='grid grid-cols-5 md:grid-cols-9 justify-items-start items-center border bg-accent p-3 font-medium '>
					<p className='hidden md:block'>ID</p>
					<p className='col-span-1 md:col-span-2'>Name</p>
					<p className='hidden md:block'>Category</p>
					<p>Price</p>
					<p className='hidden md:block'>Sales</p>
					<p>In Stock</p>
					<p>Supplier</p>
					<p>Actions</p>
				</div>
				<div>
					{filteredProducts.map((item, index) => (
						<InvProdCard
							key={index}
							id={item.id}
							price={item.price}
							supplier={item.supplier}
							inStock={item.inStock}
							name={item.name}
							category={item.category}
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
	name,
	sales,
	inStock,
	supplier,
	price,
	category,
}: allProductsProps) => {
	return (
		<div className='grid grid-cols-5 md:grid-cols-9 border-b justify-items-start items-center px-3 py-2 '>
			<p className='hidden md:block'>{id}</p>
			<p className='col-span-1 md:col-span-2 truncate text-ellipsis max-w-[70px] md:max-w-[100px] lg:max-w-max'>
				{name}
			</p>
			<p className='hidden md:block'>{category}</p>
			<p>
				<span className='text-primary-foreground font-medium'>Rs. {price}</span>
			</p>
			<p className='hidden md:block'>{sales}</p>
			<p
				className={`${
					inStock <= LOW_STOCK_THRESHOLD ? "text-red-500 font-medium" : null
				}`}>
				{inStock}
			</p>
			<p>{supplier}</p>
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
								This action cannot be undone. This will permanently delete this
								product from our servers.
							</DialogDescription>
						</DialogHeader>
						<DialogFooter>
							<Button
								type='submit'
								variant='destructive'
								className='cursor-pointer'>
								Delete product
							</Button>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</div>
		</div>
	);
};
export default Page;
