import { ProductCardProps, RecentCardProps } from "./types";

export const LOW_STOCK_THRESHOLD = 100;
export const recentActivities:RecentCardProps[] = [
    {
      type: "low-stock",
      info: "Added 25 nike shoes",
      by: "john",
      name: "Nike Air Jordan",
      time: "2 hours ago",
    },
    {
      type: "new-product",
      info: "Added 25 Acer Laptops",
      by: "adidas",
      name: "Acer aspire",
      time: "2 hours ago",
    },
    {
      type: "new-order",
      info: "Order #AS2SD3",
      by: "customer",
      name: "Air Purifier #21ACAED",
      time: "3 days ago",
    },
    {
      type: "order-done",
      info: "Order #AS2SD3",
      by: "customer",
      name: "Air Purifier #21ACAED",
      time: "3 days ago",
    },
    {
      type: "stock-update",
      info: "Added 25psc of #21ACAED",
      by: "john",
      name: "Air Purifier #21ACAED",
      time: "1 day ago",
    },
  ];

 export const productCards: ProductCardProps[] = [
    {
      name: "Really long name here",
      rating: 5,
      image: "/images/placeholderImg.svg",
      sales: 100,
      inStock: 512,
    },
    {
      name: "Reallllllly long longo long name here",
      rating: 4,
      image: "/images/placeholderImg.svg",
      sales: 100,
      inStock: 8,
    },
    {
      name: "Really long name here",
      rating: 6,
      image: "/images/placeholderImg.svg",
      sales: 100,
      inStock: 4,
    },
    {
      name: "Really long name here",
      rating: 4,
      image: "/images/placeholderImg.svg",
      sales: 100,
      inStock: 10,
    },
    {
      name: "Really long name here",
      rating: 4,
      image: "/images/placeholderImg.svg",
      sales: 100,
      inStock: 10,
    },
  ];
  