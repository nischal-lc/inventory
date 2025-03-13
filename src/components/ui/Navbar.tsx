"use client";
import { Bell, User2, Sun, Moon, Menu, Package2 } from "lucide-react";
import React, { useState } from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/contextProviders/SidebarProvider";

const Navbar = () => {
	const { setTheme } = useTheme();
	const [notificationNumber] = useState<string>("");
	const { toggleSidebar, isOpen } = useSidebar();

	return (
		<div className='w-full sticky top-0 z-50 flex items-center justify-between px-7 py-3 border-b shadow-sm bg-background'>
			<div className='flex gap-3 items-center'>
				<div
					className='p-2 hover:border-border border border-accent bg-accent rounded-full active:scale-105'
					onClick={toggleSidebar}>
					<Menu className='size-5 cursor-pointer' />
					<span className='sr-only'>toggle sidebar</span>
				</div>
				<p
					className={` ${
						isOpen ? "opacity-0 invisible" : " opacity-100 visible"
					} gap-1 items-center font-bold select-none flex text-lg transition-all duration-100`}>
					<Package2 className='size-5' />
					InvManage
				</p>
			</div>
			<div className='flex gap-2 items-center'>
				<div className='p-2 cursor-pointer rounded-full hover:bg-accent group transitionn duration-100 relative'>
					<Bell className='size-5 group-active:scale-105' />
					{notificationNumber && (
						<p className='absolute select-none -top-1 -right-3 bg-red-500 text-[12px] px-1.5 flex items-center justify-center rounded-full'>
							{notificationNumber}
						</p>
					)}
				</div>

				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant='outline'
							size='icon'
							className='cursor-pointer mr-3 rounded-full'>
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
				<div className='p-2 cursor-pointer rounded-full border hover:bg-accent group transitionn duration-100 relative'>
					<User2 className='size-6 group-active:scale-105' />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
