import { z } from "zod";
import { productSchema } from "./productSchema";

export async function fetchProductData() {
  try {
      const response = await fetch("/api/products");
      if (!response.ok) {
          return {message: "Failed to fetch product data"};
      }
      const data = await response.json();
      return data;
  } catch (error) {
      console.error("Error fetching product data:", error);
      return [];
  }
}

export async function fetchWarehouses(){
    try{
        const response = await fetch("/api/warehouses");
        if (!response.ok) {
            return {message: "Failed to fetch warehouse data"};
        }
        const data = await response.json();
        return data;
    }
    catch(err){
        console.error("Error fetching warehouse data:", err);
        return {message: "Failed to fetch warehouse data"};
    }
}

export async function addProduct(value: z.infer<typeof productSchema>){
    try{
        const response = await fetch("/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({...value}),
        });
        if(response.ok){
            return {message: "Product added sucessfully"};
        }   
        const errorData = await response.json();
    return {
      message: errorData.message || "Failed to add product",
    };
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : "An unknown error occurred",
    };
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
        if(response.ok){
            return {message: "Product updated successfully"}
        }
    }
    catch(error){
        return {message: error};
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
  