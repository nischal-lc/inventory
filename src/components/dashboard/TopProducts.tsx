import React from "react";
import ProductCard from "@/components/ui/ProductCard";
import { Flame } from "lucide-react";

const TopProducts = () => {
	return (
		<>
			<div className='border rounded-md px-4 max-h-96 overflow-scroll customScroll'>
				<div className='bg-background pt-4 sticky top-0'>
					<div className='flex justify-between'>
						<h1 className='text-xl font-semibold'>Top selling products</h1>
						<Flame className='text-secondary-foreground' />
					</div>{" "}
					<hr className='mt-1' />
				</div>
				<div className='pb-2 '>
					<ProductCard
						name='Really long name here'
						rating={5}
						image='/images/placeholderImg.svg'
						sales={100}
						inStock={10}
					/>
					<ProductCard
						name='Reallllllly long longo long name here'
						rating={4}
						image='/images/placeholderImg.svg'
						sales={100}
						inStock={8}
					/>
					<ProductCard
						name='Really long name here'
						rating={6}
						image='/images/placeholderImg.svg'
						sales={100}
						inStock={4}
					/>
					<ProductCard
						name='Really long name here'
						rating={4}
						image='/images/placeholderImg.svg'
						sales={100}
						inStock={10}
					/>
					<ProductCard
						name='Really long name here'
						rating={4}
						image='/images/placeholderImg.svg'
						sales={100}
						inStock={10}
					/>
				</div>
			</div>
		</>
	);
};

export default TopProducts;
