"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import LayoutLabel from "@/components/ui/LayoutLabel";
import { Button } from "@/components/ui/button";
import { fetchProductDataById } from "@/lib/actions";
import { Product } from "@/lib/types";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const Page = () => {
	const params = useParams();
	const productId = params.productId || "";
	const [product, setProduct] = useState<Product | undefined>(undefined);

	const fetchProducts = async () => {
		const data = await fetchProductDataById(productId);
		setProduct(data);
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<div className='px-5 py-2'>
			<Link href='/inventory'>
				<div className='flex gap-1 items-center cursor-pointer underline'>
					<ArrowLeft className='size-4 mb-1' />
					Go back
				</div>
			</Link>
			<div className='flex gap-3 flex-col md:flex-row'>
				<Image
					src='/images/placeholderImg.svg'
					alt='Product image'
					height={500}
					width={500}
					className='rounded-md'
				/>
				<div className='flex flex-col'>
					<h1 className='text-2xl font-bold turncate max-w-[500px]'>
						{product?.name || "Product name not available"}
					</h1>
					<div>
						<LayoutLabel>Description</LayoutLabel>
						<p>{product?.description || "No description  available"}</p>
					</div>
					<div>
						<LayoutLabel>Reviews</LayoutLabel>
						<div className='flex items-center'>
							<p>56 reviews |</p>
							{Array.from({ length: product?.rating || 0 }, (_, index) => (
								<span
									key={index}
									className='text-yellow-300 text-lg leading-4 select-none'>
									&#9733;
								</span>
							))}
							{Array.from(
								{ length: 5 - (product?.rating ?? 0) },
								(_, index) => (
									<span
										key={index}
										className='text-secondary-foreground text-lg leading-4 select-none'>
										&#9733;
									</span>
								)
							)}
						</div>
					</div>
					<div className='flex items-center gap-1  mt-3'>
						<div className='flex gap-1 items-center'>
							<LayoutLabel className='p-0 m-0'>Stock: </LayoutLabel>
							<p className='text-sm'>{product?.quantity}</p>
						</div>
						<div className='flex gap-1 items-center'>
							<LayoutLabel className='p-0 m-0'>Category: </LayoutLabel>
							<p className='text-sm'>{product?.category}</p>
						</div>
					</div>
					<div>
						<LayoutLabel>Supplier</LayoutLabel>
						<>{product?.supplier}</>
					</div>
					<div className='flex mt-3 gap-2'>
						<Button>Add stock</Button>
						<Button variant='outline'>View Sales</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
