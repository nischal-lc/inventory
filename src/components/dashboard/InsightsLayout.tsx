import { cn } from "@/lib/utils";
import React from "react";

const InsightsLayout = ({
	title,
	icon,
	children,
	className,
}: {
	title: string;
	icon: React.ReactNode;
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div
			className={cn(
				"border rounded-md  max-h-96 overflow-scroll customScroll",
				className
			)}>
			<div className='bg-background pt-4 px-2 md:px-4  sticky top-0'>
				<div className='flex justify-between '>
					<h1 className='text-xl font-semibold'>{title}</h1>
					<span className='text-secondary-foreground/60'>{icon}</span>
				</div>{" "}
				<hr className='mt-1' />
			</div>
			<div className='pb-2 px-2 md:px-4 w-full'>{children}</div>
		</div>
	);
};

export default InsightsLayout;
