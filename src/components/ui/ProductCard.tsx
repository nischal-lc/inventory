import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

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
	return (
		<div className='flex w-full min-h-max px-3 py-2  mt-2 bg-secondary cursor-pointer hover:bg-background transition duration-100'>
			<Image src={image} height={130} width={100} alt={name} />
			<div className='flex flex-col px-1 justify-between w-full'>
				<div className='flex justify-between group'>
					<div>
						<div className='text-nowrap max-w-52 text-ellipsis overflow-hidden'>
							<p className='truncate font-medium'>{name}</p>
						</div>
						<p className='text-secondary-foreground leading-3 text-sm font-medium'>
							Total Sales: {sales}
						</p>
					</div>
					<ChevronRight className='size-4' />
				</div>
				<div className='flex items-center justify-between w-full'>
					<div className='flex items-center'>
						{Array.from({ length: rating }, (_, index) => (
							<span key={index} className='text-yellow-300 text-lg leading-4'>
								&#9733;
							</span>
						))}
					</div>
					<p className='text-sm text-secondary-foreground'>
						In stock: {inStock}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
