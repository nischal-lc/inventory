"use client";
import Image from "next/image";

interface ProductCardProps {
	name: string;
	category: string;
	price: number;
	rating: number;
	quantity?: number;
	image: string;
	sales?: number;
}

const ProductCard = ({
	name,
	category,
	price,
	rating,
	image,
}: ProductCardProps) => {
	return (
		<div className='bg-accent rounded-lg overflow-hidden shadow-lg transition hover:cursor-pointer hover:shadow-xl'>
			<div className='w-full relative'>
				{image && (
					<Image
						src={image}
						alt={name}
						fill
						className='object-cover'
						sizes='(max-width: 768px) 100vw, 33vw'
					/>
				)}
			</div>

			<div className='p-4'>
				<h2 className='text-xl font-semibold text-primary-foreground'>
					{name}
				</h2>
				<p className='text-sm text-secondary-foreground'>{category}</p>
				<p className='text-green-500 text-md font-semibold mt-1'>${price}</p>
				<div className='flex items-center gap-1 mt-2 text-yellow-400 text-lg'>
					{Array.from({ length: rating }, (_, i) => (
						<span key={i}>&#9733;</span>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
