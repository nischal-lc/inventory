import { z } from "zod";

export const productSchema = z.object({
    name: z.string().min(1,"Product name is required"),
    category: z.string().min(1, "Category is required! "),
    price: z.coerce.number().min(1, "Price cannot be 0!"),
    quantity: z.coerce.number().min(1, "Quantity cannot  be 0!"),
    supplier: z.string().min(1, "Supplier name is required"),
    description: z.string().min(1, "Enter a product description..."),
    id: z.string().min(1, "Product ID is required"),
    warehouseId: z.string().min(1, "Warehouse ID is required"),
});