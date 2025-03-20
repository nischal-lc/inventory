import React from "react";
import ProductCard from "@/components/ui/ProductCard";
import { Flame } from "lucide-react";
import InsightsLayout from "./InsightsLayout";
import { popularProducts } from "@/lib/datas";

const TopProducts = () => {
	return (
		<>
			<InsightsLayout className="lg:w-3/4 w-full" title='Top selling products' icon={<Flame />}>
				{popularProducts.length > 0 ? (
					popularProducts.sort((a,b)=>b.sales- a.sales).slice(0,8).map((item,index)=>(
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
