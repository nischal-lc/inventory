import React from "react";
import ProductCard from "@/components/ui/ProductCard";
import { Flame } from "lucide-react";
import InsightsLayout from "./InsightsLayout";
import { Product } from "@/lib/types";

const TopProducts = ({ products }: { products: Product[] }) => {
	return (
		<>
			<InsightsLayout
				className='lg:w-3/4 w-full'
				title='Top selling products'
				icon={<Flame />}>
				<div className="space-y-3 mt-3">
					{products.length > 0 ? (
						products
							.sort((a, b) => b.sales - a.sales)
							.slice(0, 8)
							.map((item, index) => (
								<ProductCard
									key={index}
									image={item.image}
									quantity={item.quantity}
									name={item.name}
									category={item.category || ""}
									rating={item.rating || 0}
									sales={item.sales}
									price={item.price}
								/>
							))
					) : (
						<p className='text-center py-12 text-secondary-foreground/70 select-none'>
							No data available
						</p>
					)}
				</div>
			</InsightsLayout>
		</>
	);
};

export default TopProducts;
