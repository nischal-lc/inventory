export interface CardProps {
	title: string;
	icon: React.ReactNode;
	quantity: string;
	subtext?: string;
	className?: string;
	titleClass?: string;
}

export interface Product {
	id: string;
	name: string;
	sales: number;
	quantity: number;
	supplier?: string;
	rating?: number;
	image: string;
	price: number;
	category?: string;
	description?: string;
	warehouseId?: string;
  };

export interface Warehouse {
	_id: string;
	name: string;
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
	quantity: number;
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
    quantity: number;
    supplier: string;
	category: string;
	description?: string;
	warehouseId?: string;
	warehouses?: Record<string, string>;
	categories?: string[];
	update?: ()=>void;
}