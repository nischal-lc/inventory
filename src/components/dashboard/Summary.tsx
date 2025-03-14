import React from "react";
import InsightsLayout from "./InsightsLayout";
import {
	FileChartColumnIncreasing,
	PackageCheck,
	PackageOpen,
	PackageX,
	Users,
} from "lucide-react";
import Card from "./Card";

const Summary = () => {
	return (
		<>
			<InsightsLayout
				title='Inventory Summary'
				icon={<FileChartColumnIncreasing />}>
				<div className="mt-3 space-y-2">
					<Card
						title='Orders Completed'
						icon={<PackageCheck className='size-5' />}
						quantity='10'
						subtext='+10 this week'
						titleClass='text-green-500 text-sm'
						className='!border-none bg-accent px-3 py-2'
					/>
					<Card
						title='Orders Returned'
						icon={<PackageX className='size-5' />}
						quantity='30'
						subtext='-10 this week'
						titleClass='text-red-500 text-sm'
						className='!border-none bg-accent px-3 py-2'
					/>
					<Card
						title='Returning Customers'
						icon={<Users className='size-5' />}
						quantity='50'
						titleClass='text-gray-400 text-sm'
						className='!border-none bg-accent px-3 py-2'
					/>
					<Card
						title='New Packages'
						icon={<PackageOpen className='size-5' />}
						quantity='50'
						titleClass='text-gray-400 text-sm'
						subtext="+3 this week"
						className='!border-none bg-accent px-3 py-2'
					/>
				</div>
			</InsightsLayout>
		</>
	);
};

export default Summary;
