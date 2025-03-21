export interface CardProps {
	title: string;
	icon: React.ReactNode;
	quantity: string;
	subtext?: string;
	className?: string;
	titleClass?: string;
}


export interface RecentCardProps {
	type:
		| "stock-update"
		| "new-order"
		| "low-stock"
		| "order-done"
		| "new-product";
	info: string;
	by: string;
	time: string;
	name: string;
}

export interface LIprops {
	icon: React.ReactNode;
	text: string;
	className?: string;
}

export interface ProductCardProps {
	name: string;
	sales: number;
	rating: number;
	inStock: number;
	image: string;
}

export interface SidebarContextType {
	isOpen: boolean;
	toggleSidebar: () => void;
}

export interface allProductsProps {
	id: string;
    name: string;
    sales: number;
	price: number;
    inStock: number;
    supplier: string;
	category: string;
}