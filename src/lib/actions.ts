import { z } from "zod";
import { productSchema } from "./productSchema";

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


export async function addProduct(value: z.infer<typeof productSchema>){
    try{
        console.log(value)
        const response = await fetch("/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({...value}),
        });
        return response.json();
    }
    catch(error){
        return error;
    }
}


export async function removeProduct(id: string){
    try{
        const response = await fetch(`/api/products/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.json();
    }
    catch(error){
        return error;
    }
}

export async function editProduct(id: string, values: z.infer<typeof productSchema>){
    try{
        const response = await fetch(`/api/products/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({...values}),
        });
        return response.json();
    }
    catch(error){
        return error;
    }
}


export async function fetchProductDataById(id: string|string[]) {
    try {
        const response = await fetch(`/api/products/${id}`);
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
  