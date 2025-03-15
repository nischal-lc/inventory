import React from "react";
import ProductCard from "@/components/ui/ProductCard";
import { Flame } from "lucide-react";
import InsightsLayout from "./InsightsLayout";
import { productCards } from "@/lib/datas";

const TopProducts = () => {
	return (
		<>
			<InsightsLayout title='Top selling products' icon={<Flame />}>
				{productCards.length > 0 ? (
					productCards.map((item, index) => (
						<ProductCard
							key={index}
							image={item.image}
							inStock={item.inStock}
							name={item.name}
							rating={item.rating}
							sales={item.sales}
						/>
					))
				) : (
					<p className='text-center py-12 text-secondary-foreground/70 select-none'>
						No data available	
					</p>
				)}
			</InsightsLayout>
		</>
	);
};

export default TopProducts;
