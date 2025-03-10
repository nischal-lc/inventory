"use client";
import {
	ChartColumn,
	LayoutDashboard,
	Package,
	Package2,
	Settings,
	Users,
	Sun,
	Moon,
} from "lucide-react";
import React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface LIprops {
	icon: React.ReactNode;
	text: string;
}

const Navbar = () => {
	const { setTheme } = useTheme();

	return (
		<div className='w-full flex items-center justify-between px-7 py-3 border-b shadow-sm bg-background'>
			<p className='flex gap-1 items-center font-bold text-lg'>
				<Package2 className='size-5' />
				InvManage
			</p>
			<ul className='md:flex gap-2 hidden ml-auto'>
				<ListItem
					icon={<LayoutDashboard className='size-5' />}
					text='Dashboard'
				/>
				<ListItem icon={<Package className='size-5' />} text='Inventory' />
				<ListItem icon={<ChartColumn className='size-5' />} text='Reports' />
				<ListItem icon={<Users className='size-5' />} text='Users' />
				<ListItem icon={<Settings className='size-5' />} text='Settings' />
			</ul>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant='outline' size='icon' className='cursor-pointer'>
						<Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
						<Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
						<span className='sr-only'>Toggle theme</span>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align='end'>
					<DropdownMenuItem
						className='cursor-pointer'
						onClick={() => setTheme("light")}>
						Light
					</DropdownMenuItem>
					<DropdownMenuItem
						className='cursor-pointer'
						onClick={() => setTheme("dark")}>
						Dark
					</DropdownMenuItem>
					<DropdownMenuItem
						className='cursor-pointer'
						onClick={() => setTheme("system")}>
						System
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

const ListItem = ({ icon, text }: LIprops) => {
	return (
		<li className='flex items-center transition-colors duration-100 gap-1 text-sm rounded hover:bg-accent px-3 py-2 cursor-pointer'>
			{icon}
			{text}
		</li>
	);
};

export default Navbar;
