import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Badge } from "./badge";
import { LOW_STOCK_THRESHOLD } from "@/lib/datas";

interface ProductCardProps {
	name: string;
	sales: number;
	rating: number;
	inStock: number;
	image: string;
}
const ProductCard = ({
	name,
	sales,
	rating,
	inStock,
	image,
}: ProductCardProps) => {
	if (rating > 5) {
		rating = 5;
	}
	return (
		<div className='flex w-full min-h-max px-3 py-2  mt-2 bg-secondary cursor-pointer hover:bg-background transition duration-100'>
			<Image
				src={image}
				height={100}
				width={100}
				alt={name}
				className='object-contain rounded-md'
			/>
			<div className='flex flex-col px-3 gap-1 w-full'>
				<div className='flex justify-between group'>
					<div>
						<div className='text-nowrap max-w-52 text-ellipsis overflow-hidden'>
							<p className='truncate font-medium'>{name}</p>
						</div>
					</div>
					<ChevronRight className='size-4' />
				</div>
				<div className='flex w-full justify-between'>
					<div className='flex  items-center gap-2 '>
						<div className='flex items-center '>
							{Array.from({ length: rating }, (_, index) => (
								<span
									key={index}
									className='text-yellow-300 text-lg leading-4 select-none'>
									&#9733;
								</span>
							))}
							{Array.from({ length: 5 - rating }, (_, index) => (
								<span
									key={index}
									className='text-secondary-foreground text-lg leading-4 select-none'>
									&#9733;
								</span>
							))}
						</div>
						<p className='text-sm text-secondary-foreground'>{sales} sales</p>
						<p className='text-sm text-secondary-foreground'>
							<span
								className={`font-semibold	${
									inStock < LOW_STOCK_THRESHOLD && "text-red-500"
								}`}>
								{inStock}{" "}
							</span>
							in stock
						</p>
					</div>
					{inStock < LOW_STOCK_THRESHOLD && (
						<Badge className='bg-red-600/30 border border-red-500 rounded-full'>
							Low Stock
						</Badge>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
