import { ProductCardProps, RecentCardProps } from "./types";

export const LOW_STOCK_THRESHOLD = 100;
const TOTAL_ITEMS = 1500;
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
  
  export const overviewData = [
      { month: "Jan", value: 115000 },
      { month: "Feb", value: 118500 },
      { month: "Mar", value: 122000 },
      { month: "Apr", value: 119800 },
      { month: "May", value: 124750 },
      { month: "Jun", value: 128300 },
      { month: "Jul", value: 132500 },
      { month: "Aug", value: 135000 },
      { month: "Sep", value: 131200 },
      { month: "Oct", value: 134500 },
      { month: "Nov", value: 138000 },
      { month: "Dec", value: 142500 },
    ];

    export const salesInvData = [
      { month: "Jan", sales: 85000, inventory: 115000 },
      { month: "Feb", sales: 92000, inventory: 118500 },
      { month: "Mar", sales: 98000, inventory: 122000 },
      { month: "Apr", sales: 90000, inventory: 119800 },
      { month: "May", sales: 105000, inventory: 124750 },
      { month: "Jun", sales: 110000, inventory: 128300 },
      { month: "Jul", sales: 118000, inventory: 132500 },
      { month: "Aug", sales: 125000, inventory: 135000 },
      { month: "Sep", sales: 115000, inventory: 131200 },
      { month: "Oct", sales: 122000, inventory: 134500 },
      { month: "Nov", sales: 130000, inventory: 138000 },
      { month: "Dec", sales: 145000, inventory: 142500 },
    ]

  export const barChartData = [
    { type: "Electronics", quantity: 186 },
    { type: "Clothing", quantity: 305 },
    { type: "Home Goods", quantity: 237 },
    { type: "Sports", quantity: 73 },
    { type: "Books", quantity: 209 },
    { type: "Toys", quantity: 214 },
  ]

  export const pieChartData = [
    { type: "electronics", quantity: parseFloat(((278 / TOTAL_ITEMS) * 100).toFixed(2)), fill: "var(--color-electronics)" },
    { type: "clothing", quantity: parseFloat(((312 / TOTAL_ITEMS) * 100).toFixed(2)), fill: "var(--color-clothing)" },
    { type: "homeGoods", quantity: parseFloat(((195 / TOTAL_ITEMS) * 100).toFixed(2)), fill: "var(--color-homeGoods)" },
    { type: "sports", quantity: parseFloat(((410 / TOTAL_ITEMS) * 100).toFixed(2)), fill: "var(--color-sports)" },
    { type: "other", quantity: parseFloat(((305 / TOTAL_ITEMS) * 100).toFixed(2)), fill: "var(--color-other)" },
    ]