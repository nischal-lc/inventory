import React from "react";
import ProductCard from "@/components/ui/ProductCard";
import { Flame } from "lucide-react";
import InsightsLayout from "./InsightsLayout";

const TopProducts = () => {
	return (
		<>
			<InsightsLayout title='Top selling products' icon={<Flame />}>
				<ProductCard
					name='Really long name here'
					rating={5}
					image='/images/placeholderImg.svg'
					sales={100}
					inStock={512}
				/>
				<ProductCard
					name='Reallllllly long longo long name here'
					rating={4}
					image='/images/placeholderImg.svg'
					sales={100}
					inStock={8}
				/>
				<ProductCard
					name='Really long name here'
					rating={6}
					image='/images/placeholderImg.svg'
					sales={100}
					inStock={4}
				/>
				<ProductCard
					name='Really long name here'
					rating={4}
					image='/images/placeholderImg.svg'
					sales={100}
					inStock={10}
				/>
				<ProductCard
					name='Really long name here'
					rating={4}
					image='/images/placeholderImg.svg'
					sales={100}
					inStock={10}
				/>
			</InsightsLayout>
		</>
	);
};

export default TopProducts;
