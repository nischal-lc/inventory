import React from "react";

interface CardProps {
	title: string;
	icon: React.ReactNode;
	quantity: string;
	subtext: string;
}

const Card = ({ title, icon, quantity, subtext }: CardProps) => {
	return (
		<div className='min-h-[70px] w-full rounded-md border px-4 py-7 shadow-sm'>
			<div className='flex justify-between items-center'>
				<p className='font-medium text-sm text-secondary-foreground select-none'>
					{title}
				</p>
				<span className='text-secondary-foreground'>{icon}</span>
			</div>
			<h4 className='text-3xl mt-2 font-semibold'>{quantity}</h4>
			<p className='text-[12px] text-secondary-foreground'>{subtext}</p>
		</div>
	);
};

export default Card;
