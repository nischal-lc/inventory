import { cn } from "@/lib/utils";
import React from "react";

const LayoutLabel = ({
	children,
	className,
}: {
	children: string;
	className?: string;
}) => {
	return (
		<p
			className={cn(
				"pt-4 mb-1 text-sm font-medium text-secondary-foreground",
				className
			)}>
			{children}
		</p>
	);
};

export default LayoutLabel;
