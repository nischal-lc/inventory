"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Overview from "./Overview";
import Sales from "./Sales";


const Report = () => {
	return (
		<Tabs defaultValue='overview' className="mb-3">
			<TabsList className="py-5">
				<TabsTrigger value='overview' className="p-4 cursor-pointer">Overview</TabsTrigger>
				<TabsTrigger value='sales' className="p-4 cursor-pointer">Sales</TabsTrigger>
			</TabsList>
			<TabsContent value='overview'>
				<Overview />
			</TabsContent>
			<TabsContent value='sales'>
				<Sales />
			</TabsContent>
		</Tabs>
	);
};

export default Report;
