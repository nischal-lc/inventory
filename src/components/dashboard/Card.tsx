import { CardProps } from "@/lib/types";
import { cn } from "@/lib/utils";
import React from "react";


const Card = ({
	title,
	icon,
	quantity,
	subtext,
	className,
	titleClass,
}: CardProps) => {
	return (
		<div
			className={cn(
				" w-full rounded-md border px-4 py-7 shadow-sm",
				className
			)}>
			<div className='flex justify-between items-center'>
				<p
					className={
						(cn("font-medium text-sm text-secondary-foreground select-none"),
						titleClass)
					}>
					{title}
				</p>
				<span className='text-secondary-foreground'>{icon}</span>
			</div>
			<h4 className='text-3xl mt-2 font-semibold geist'>{quantity}</h4>
			<p className='text-[12px] text-secondary-foreground'>{subtext}</p>
		</div>
	);
};

export default Card;
