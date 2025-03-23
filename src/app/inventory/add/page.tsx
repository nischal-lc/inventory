"use client";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import * as z from "zod";
import { productSchema } from "@/lib/productSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { addProduct, fetchProductData } from "@/lib/actions";
import { toast } from "sonner";
import { Product } from "@/lib/types";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";

const Page = () => {
	const [categories, setCategories] = useState<string[]>([]);
	const [newCategory, setNewCategory] = useState(false);
	const form = useForm<z.infer<typeof productSchema>>({
		resolver: zodResolver(productSchema),
		defaultValues: {
			category: "",
			description: "",
			name: "",
			price: 0,
			quantity: 0,
			supplier: "",
		},
	});

	useEffect(() => {
		fetchProductData().then((data) => {
			const categories = [
				...new Set(data.map((item: Product) => item.category)),
			] as string[];
			setCategories(categories);
		});
	},[]);

	const onSubmit = async (values: z.infer<typeof productSchema>) => {
		const validatedValues = productSchema.safeParse(values);
		if (validatedValues.success) {
			const response = await addProduct(validatedValues.data);
			toast(`${response.message}`);
			setNewCategory(false);
			form.reset();
		} else {
			toast("Validation error!");
		}
	};

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
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)}>
							<div className='grid w-full items-center gap-4'>
								<FormField
									control={form.control}
									name='name'
									render={({ field }) => (
										<FormItem>
											<div className='flex flex-col space-y-2'>
												<Label htmlFor='name'>Product Name</Label>
												<FormControl>
													<Input
														id='name'
														placeholder='Name of your product..'
														className='border-primary-foreground/20'
														{...field}
													/>
												</FormControl>
											</div>
											<FormMessage className='text-red-600' />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='category'
									render={({ field }) => (
										<>
											{newCategory ? (
												<FormItem>
													<div className='flex flex-col space-y-2'>
														<Label htmlFor='name'>Category</Label>
														<FormControl>
															<Input
																id='category'
																placeholder='Category of the product...'
																className='border-primary-foreground/20'
																{...field}
															/>
														</FormControl>
													</div>
													<FormMessage className='text-red-600' />
												</FormItem>
											) : (
												<FormItem>
													<div className='flex flex-col space-y-2'>
														<Label htmlFor='category'>Category</Label>
														<Select
															onValueChange={field.onChange}
															defaultValue={field.value}>
															<FormControl>
																<SelectTrigger className='w-full border-primary-foreground/20'>
																	<SelectValue placeholder='Select a category' />
																</SelectTrigger>
															</FormControl>
															<SelectContent>
																{categories.map((item, index) => (
																	<SelectItem value={item} key={index}>
																		{item}
																	</SelectItem>
																))}
																<Button
																	size='sm'
																	onClick={() => setNewCategory(true)}
																	className='w-full text-sm bg-transparent justify-start hover:bg-accent cursor-pointer'>
																	<Plus /> Add new category
																</Button>
															</SelectContent>
														</Select>
													</div>
													<FormMessage className='text-red-600' />
												</FormItem>
											)}
										</>
									)}
								/>
								<FormField
									control={form.control}
									name='price'
									render={({ field }) => (
										<FormItem>
											<div className='flex flex-col space-y-2'>
												<Label htmlFor='price'>Price</Label>
												<FormControl>
													<Input
														type='number'
														id='price'
														placeholder='Rs.XXX'
														className='border-primary-foreground/20'
														{...field}
													/>
												</FormControl>
											</div>
											<FormMessage className='text-red-600' />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='quantity'
									render={({ field }) => (
										<FormItem>
											<div className='flex flex-col space-y-2'>
												<Label htmlFor='quantity'>Quantity</Label>
												<FormControl>
													<Input
														id='quantity'
														type='number'
														placeholder='No of products..'
														className='border-primary-foreground/20'
														{...field}
													/>
												</FormControl>
											</div>
											<FormMessage className='text-red-600' />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='supplier'
									render={({ field }) => (
										<FormItem>
											<div className='flex flex-col space-y-2'>
												<Label htmlFor='supplier'>Supplier</Label>
												<FormControl>
													<Input
														id='supplier'
														placeholder='Name of your supplier'
														className='border-primary-foreground/20'
														{...field}
													/>
												</FormControl>
											</div>
											<FormMessage className='text-red-600' />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='description'
									render={({ field }) => (
										<FormItem>
											<div className='flex flex-col space-y-2'>
												<Label htmlFor='name'>Product description</Label>
												<FormControl>
													<Textarea
														id='description'
														placeholder='Description of your project...'
														className='border-primary-foreground/20'
														{...field}
													/>
												</FormControl>
											</div>
											<FormMessage className='text-red-600' />
										</FormItem>
									)}
								/>
							</div>
							<div className='flex gap-2 mt-2'>
								<Button type='submit' className='cursor-pointer'>
									Add product
								</Button>
								<Link href='/inventory' className='cursor-pointer'>
									<Button variant='destructive'>Cancel</Button>
								</Link>
							</div>
						</form>
					</Form>
				</CardContent>
			</Card>
		</div>
	);
};

export default Page;
