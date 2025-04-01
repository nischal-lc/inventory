"use client";
import ProductCard from "@/components/ui/ProductCard";

const products = [
  {
    id: "1",
    name: "iPhone 16",
    category: "Smartphone",
    price: 1299,
    rating: 4.5,
    image: "/images/iphone.jpg",
  },
  {
    id: "2",
    name: "Galaxy S24",
    category: "Smartphone",
    price: 999,
    rating: 5,
    image: "/images/galaxy.jpg",
  },
  {
    id: "3",
    name: "Pixel 9",
    category: "Smartphone",
    price: 899,
    rating: 2,
    image: "/images/pixel.jpg",
  },
];

export default function ProductPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
