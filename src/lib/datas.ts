import { allProductsProps, ProductCardProps, RecentCardProps } from "./types";

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

 export const popularProducts: ProductCardProps[] = [
  { name: "Ultra Gaming Mouse X1000", rating: 5, image: "/images/placeholderImg.svg", sales: 250, inStock: 30 },
  { name: "Mechanical Keyboard Pro V2", rating: 4, image: "/images/placeholderImg.svg", sales: 180, inStock: 15 },
  { name: "Wireless Noise-Canceling Headphones", rating: 4, image: "/images/placeholderImg.svg", sales: 320, inStock: 8 },
  { name: "Curved UltraWide Monitor 34 inch", rating: 5, image: "/images/placeholderImg.svg", sales: 150, inStock: 12 },
  { name: "Ergonomic Gaming Chair Deluxe", rating: 5, image: "/images/placeholderImg.svg", sales: 275, inStock: 20 },
  { name: "RGB Mechanical Gaming Keyboard", rating: 4, image: "/images/placeholderImg.svg", sales: 210, inStock: 25 },
  { name: "4K Webcam for Streaming", rating: 5, image: "/images/placeholderImg.svg", sales: 95, inStock: 10 },
  { name: "USB-C Docking Station", rating: 4, image: "/images/placeholderImg.svg", sales: 130, inStock: 18 },
  { name: "Smart LED Desk Lamp", rating: 4, image: "/images/placeholderImg.svg", sales: 175, inStock: 5 },
  { name: "Portable Bluetooth Speaker", rating: 5, image: "/images/placeholderImg.svg", sales: 220, inStock: 14 },
  { name: "Gaming Headset with Surround Sound", rating: 4, image: "/images/placeholderImg.svg", sales: 195, inStock: 22 },
  { name: "External SSD 1TB", rating: 5, image: "/images/placeholderImg.svg", sales: 285, inStock: 6 },
  { name: "Smartwatch Pro Edition", rating: 4, image: "/images/placeholderImg.svg", sales: 165, inStock: 10 },
  { name: "Adjustable Standing Desk", rating: 5, image: "/images/placeholderImg.svg", sales: 290, inStock: 9 },
  { name: "Noise-Isolating Earbuds", rating: 4, image: "/images/placeholderImg.svg", sales: 140, inStock: 11 },
  { name: "Triple Monitor Mount Stand", rating: 5, image: "/images/placeholderImg.svg", sales: 230, inStock: 13 },
  { name: "High-Speed WiFi Router", rating: 4, image: "/images/placeholderImg.svg", sales: 310, inStock: 16 },
  { name: "Gaming Capture Card", rating: 5, image: "/images/placeholderImg.svg", sales: 120, inStock: 17 },
  { name: "Mechanical Numpad for Productivity", rating: 4, image: "/images/placeholderImg.svg", sales: 135, inStock: 19 },
  { name: "Wireless Charging Pad", rating: 5, image: "/images/placeholderImg.svg", sales: 190, inStock: 7 },
  { name: "Ultra HD 4K Projector", rating: 5, image: "/images/placeholderImg.svg", sales: 275, inStock: 4 },
  { name: "Programmable Macro Keypad", rating: 4, image: "/images/placeholderImg.svg", sales: 160, inStock: 20 },
  { name: "Smart Home Security Camera", rating: 5, image: "/images/placeholderImg.svg", sales: 245, inStock: 6 },
  { name: "Compact Mechanical Gaming Keyboard", rating: 4, image: "/images/placeholderImg.svg", sales: 155, inStock: 21 },
  { name: "USB Microphone for Streaming", rating: 5, image: "/images/placeholderImg.svg", sales: 280, inStock: 12 }
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


  export const allProducts: allProductsProps[] = [
      {
        id: "P1001",
        image: "/images/placeholderImg.svg",
        name: "Gaming Laptop",
        sales: 320,
        inStock: 15,
        orderPending: true,
      },
      {
        id: "P1002",
        image: "/images/placeholderImg.svg",
        name: "Wireless Headphones",
        sales: 540,
        inStock: 30,
        orderPending: false,
      },
      {
        id: "P1003",
        image: "/images/placeholderImg.svg",
        name: "Smart Watch",
        sales: 270,
        inStock: 5,
        orderPending: true,
      },
      {
        id: "P1004",
        image: "/images/placeholderImg.svg",
        name: "Mechanical Keyboard",
        sales: 150,
        inStock: 10,
        orderPending: false,
      },
      {
        id: "P1005",
        image: "/images/placeholderImg.svg",
        name: "Gaming Mouse",
        sales: 410,
        inStock: 25,
        orderPending: true,
      },
      {
        id: "P1006",
        image: "/images/placeholderImg.svg",
        name: "4K Monitor",
        sales: 95,
        inStock: 8,
        orderPending: false,
      },
      {
        id: "P1007",
        image: "/images/placeholderImg.svg",
        name: "External SSD 1TB",
        sales: 200,
        inStock: 20,
        orderPending: true,
      },
      {
        id: "P1008",
        image: "/images/placeholderImg.svg",
        name: "Android Smartphone",
        sales: 670,
        inStock: 12,
        orderPending: false,
      },
      {
        id: "P1009",
        image: "/images/placeholderImg.svg",
        name: "WiFi 6 Router",
        sales: 340,
        inStock: 18,
        orderPending: false,
      },
      {
        id: "P1010",
        image: "/images/placeholderImg.svg",
        name: "RTX 4070 Graphics Card",
        sales: 50,
        inStock: 3,
        orderPending: true,
      },
    ];