"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Sales from "./Sales";
import Trends from "./Trends";
import Overview from "./Overview";

const Report = () => {
	return (
		<Tabs defaultValue='overview' className='mb-3'>
			<TabsList className='py-5'>
				<TabsTrigger value='overview' className='p-4 cursor-pointer'>
					Overview
				</TabsTrigger>
				<TabsTrigger value='trends' className='p-4 cursor-pointer'>
					Trends
				</TabsTrigger>
				<TabsTrigger value='sales' className='p-4 cursor-pointer'>
					Sales
				</TabsTrigger>
			</TabsList>
			<TabsContent value='overview'>
				<Overview />
			</TabsContent>
			<TabsContent value='trends'>
				<Trends />
			</TabsContent>
			<TabsContent value='sales'>
				<Sales />
			</TabsContent>
		</Tabs>
	);
};

export default Report;
