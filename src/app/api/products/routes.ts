import { NextResponse } from "next/server";

export async function GET() {
  const products = [
    {
      id: 1,
      name: "Macbook Air",
      price: 1099,
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      price: 199,
    },
    {
      id: 3,
      name: "Monitor 4K",
      price: 499,
    },
  ];

  return NextResponse.json(products);
}
