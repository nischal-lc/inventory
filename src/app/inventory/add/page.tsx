"use client";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import React from "react";

const Page = () => {
	return (
		<div className='px-7 py-3 flex items-center justify-center h-full relative'>
			<Card className='w-[400px] max-h-[500px] customScroll overflow-auto relative'>
				<CardHeader>
					<CardTitle className='text-3xl'>Add item</CardTitle>
					<CardDescription>
						Enter product details to add it to the inventory
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form>
						<div className='grid w-full items-center gap-4'>
							<div className='flex flex-col space-y-2'>
								<Label htmlFor='name'>Product Name</Label>
								<Input
									required
									id='name'
									placeholder='Name of your project'
									className='border-primary-foreground/20'
								/>
							</div>
							<div className='flex flex-col space-y-2'>
								<Label htmlFor='category'>Category</Label>
								<Input
									required
									id='category'
									placeholder='Enter a category'
									className='border-primary-foreground/20'
								/>
							</div>
							<div className='flex flex-col space-y-2'>
								<Label htmlFor='price'>Price</Label>
								<Input
									required
									id='price'
									placeholder='Rs.XXXX'
									type='number'
									min='0'
									className='border-primary-foreground/20'
								/>
							</div>
							<div className='flex flex-col space-y-2'>
								<Label htmlFor='quantity'>Quantity</Label>
								<Input
									required
									id='quantity'
									placeholder='No of product...'
									type='number'
									min='0'
									className='border-primary-foreground/20'
								/>
							</div>
							<div className='flex flex-col space-y-2'>
								<Label htmlFor='supplier'>Supplier</Label>
								<Input
									required
									id='supplier'
									placeholder='Name of supplier...'
									className='border-primary-foreground/20'
								/>
							</div>
							<div className='flex flex-col space-y-2'>
								<Label htmlFor='description'>Description</Label>
								<Textarea
									placeholder='Product description here...'
									className='border-primary-foreground/20'
									id='description'
								/>
							</div>
						</div>
					</form>
				</CardContent>
				<CardFooter className='gap-3'>
					<Button type='submit' className='cursor-pointer'>
						Add product
					</Button>
					<Link href='/inventory' className="cursor-pointer">	
						<Button variant='destructive'>Cancel</Button>
					</Link>
				</CardFooter>
			</Card>
		</div>
	);
};

export default Page;
