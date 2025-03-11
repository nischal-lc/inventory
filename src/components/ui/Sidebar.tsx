"use client";
import {
	ChevronDown,
	Package2,
	ChartColumn,
	LayoutDashboard,
	Package,
	Settings,
	Users,
	ShoppingCart,
	Truck,
	LogOut,
  CircleDollarSign,
} from "lucide-react";
import React, { useState } from "react";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

interface LIprops {
	icon: React.ReactNode;
	text: string;
	className?: string;
}

const Sidebar = () => {
	const [isInvOpen, setIsInvOpen] = useState<boolean>(false);
	const [isAdminOpen, setIsAdminOpen] = useState<boolean>(false);

	return (
		<div className='min-w-[250px] h-screen border-r sticky top-0 overflow-y-auto'>
			<p className='flex gap-1 items-center font-bold text-lg border-b px-3 h-[67px] sticky top-0 '>
				<Package2 className='size-5' />
				InvManage
			</p>
			<div className='flex flex-col'>
				<p className='px-3 pt-4 pb-2 text-sm font-medium text-secondary-foreground'>
					Navigation
				</p>
				<ul className='flex flex-col gap-1'>
					<ListItem
						icon={<LayoutDashboard className='size-5' />}
						text='Dashboard'
					/>
					<ListItem icon={<Package className='size-5' />} text='Inventory' />
					<ListItem icon={<ChartColumn className='size-5' />} text='Reports' />
					<ListItem icon={<Users className='size-5' />} text='Users' />
				</ul>
				<Collapsible open={isInvOpen} onOpenChange={setIsInvOpen}>
					<div className='flex justify-between items-center px-3'>
						<p className=' pt-4 pb-2 text-sm font-medium text-secondary-foreground'>
							Inventory Management
						</p>
						<CollapsibleTrigger asChild>
							<div className='p-1 size-8 flex items-center justify-center rounded-full hover:bg-accent cursor-pointer'>
								<ChevronDown
									className={`size-4 transition duration-75 ${
										isInvOpen && "rotate-180"
									} `}
								/>
								<span className='sr-only'>Toggle</span>
							</div>
						</CollapsibleTrigger>
					</div>
					<CollapsibleContent className='space-y-1'>
						<ListItem icon={<Package className='size-5' />} text='Products' />
						<ListItem
							icon={<ShoppingCart className='size-5' />}
							text='Orders'
						/>
						<ListItem icon={<Truck className='size-5' />} text='Suppliers' />
					</CollapsibleContent>
				</Collapsible>

				<Collapsible open={isAdminOpen} onOpenChange={setIsAdminOpen}>
					<div className='flex justify-between items-center px-3'>
						<p className=' pt-4 pb-2 text-sm font-medium text-secondary-foreground'>
							Administration
						</p>
						<CollapsibleTrigger asChild>
							<div className='p-1 size-8 flex items-center justify-center rounded-full hover:bg-accent cursor-pointer'>
								<ChevronDown
									className={`size-4 transition duration-75 ${
										isAdminOpen && "rotate-180"
									} `}
								/>
								<span className='sr-only'>Toggle</span>
							</div>
						</CollapsibleTrigger>
					</div>
					<CollapsibleContent className='space-y-1'>
						<ListItem icon={<Settings className='size-5' />} text='Settings' />
						<ListItem
							icon={<CircleDollarSign className='size-5' />}
							text='Billings'
						/>
					</CollapsibleContent>
				</Collapsible>
				<ListItem
					icon={<LogOut className='size-5' />}
					text='Log out'
					className='my-3'
				/>
			</div>
		</div>
	);
};

const ListItem = ({ icon, text, className }: LIprops) => {
	return (
		<li
			className={cn(
				"flex items-center transition-colors duration-100 gap-1 text-sm rounded hover:bg-accent px-3 py-2 cursor-pointer",
				className
			)}>
			{icon}
			{text}
		</li>
	);
};
export default Sidebar;
