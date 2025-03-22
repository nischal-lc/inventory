import { pieChartConfig } from "./chartConfigs";
import {Product, RecentCardProps } from "./types";

export const LOW_STOCK_THRESHOLD = 100;
const TOTAL_ITEMS = 1500;

export async function fetchProductData() {
  try {
      const response = await fetch("/api/products");
      if (!response.ok) {
          throw new Error("Failed to fetch product data");
      }
      const data = await response.json();
      return data;
  } catch (error) {
      console.error("Error fetching product data:", error);
      return [];
  }
}

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

  export const barChartData = fetchProductData().then((data)=>{
    const categories= [...new Set(data.map((item: Product)=>item.category))];
    const chartData = categories.map((category)=>{
      const items = data.filter((item: Product)=>item.category === category);
      const quantity = items.reduce((acc: number, item: Product)=>acc + item.inStock, 0);
      return {type: category, quantity}
    })
    return chartData;
  })

  export const pieChartData = fetchProductData().then((data)=>{
    const categories= [...new Set(data.map((item: Product)=>item.category))] as string[];

    const chartData = categories.map((category)=>{
      const items = data.filter((item: Product)=>item.category === category);
      const stock: number = items.reduce((acc: number, item: Product)=>acc + item.inStock, 0);
      const configEntry = pieChartConfig[category as keyof typeof pieChartConfig];

      return {type: category, quantity: Number(((stock / TOTAL_ITEMS * 100)).toFixed(2)),
        fill: configEntry && "color" in configEntry ? configEntry.color : "var(--color-other)"
      }
      
    })
  
    return chartData;
  })