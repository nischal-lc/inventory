"use client";
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ArrowDownNarrowWide,
  Eye,
  Filter,
  Pen,
  Plus,
  Trash2,
} from "lucide-react";
import { LOW_STOCK_THRESHOLD } from "@/lib/datas";
import { editProduct, fetchProductData, removeProduct } from "@/lib/actions";
import { allProductsProps, Product } from "@/lib/types";
import Link from "next/link";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { productSchema } from "@/lib/productSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

type Checked = DropdownMenuCheckboxItemProps["checked"];

const Page = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [update, setUpdate] = useState<boolean>(false);

  const fetchProducts = async () => {
    const data = await fetchProductData();
    const categories = [
      ...new Set(data.map((item: Product) => item.category)),
    ] as string[];
    setCategories(categories);
    setAllProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, [update]);

  const handleUpdate = () => {
    setUpdate((prev) => !prev);
  };
  const [lowStocks, setLowStocks] = React.useState<Checked>(false);
  const [highestSelling, setHighestSelling] = React.useState<Checked>(false);
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [sortCriteria, setSortCriteria] = React.useState<
    "price" | "quantity" | null
  >(null);
  const [sortOrder, setSortOrder] = React.useState<
    "ascending" | "descending" | null
  >(null);

  const [selectedCategory, setSelectedCategory] = React.useState<
    string | undefined | null
  >(null);

  const clearFilter = () => {
    setLowStocks(false);
    setHighestSelling(false);
    setSelectedCategory(null);
    setSearchTerm("");
    setSortCriteria(null);
    setSortOrder(null);
  };
  const filteredProducts = React.useMemo(() => {
    let products = allProducts.filter((item) => {
      if (lowStocks && item.inStock > LOW_STOCK_THRESHOLD) return false;
      if (highestSelling && item.sales < 1000) return false;
      if (selectedCategory && item.category !== selectedCategory) return false;
      if (
        searchTerm &&
        !item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
        return false;
      return true;
    });

    if (sortCriteria && sortOrder) {
      products = [...products].sort((a, b) => {
        if (sortCriteria === "price") {
          return sortOrder === "ascending"
            ? a.price - b.price
            : b.price - a.price;
        } else if (sortCriteria === "quantity") {
          return sortOrder === "ascending"
            ? a.inStock - b.inStock
            : b.inStock - a.inStock;
        }
        return 0;
      });
    }
    return products;
  }, [
    lowStocks,
    highestSelling,
    searchTerm,
    selectedCategory,
    sortCriteria,
    sortOrder,
    allProducts,
  ]);

  return (
    <div className="md:px-7 px-3 mt-3">
      <h1 className=" text-2xl font-bold">Inventory</h1>
      <div className="flex gap-2 mt-3 flex-wrap">
        <Input
          className="border-primary-foreground/20 w-[200px]"
          placeholder="Search products..."
          value={searchTerm}
          onInput={(e) => setSearchTerm(e.currentTarget.value)}
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="cursor-pointer">
              <Filter /> Filter
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel className="select-none">
              Filter Products
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={lowStocks}
              onCheckedChange={setLowStocks}
            >
              Low stocks
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={highestSelling}
              onCheckedChange={setHighestSelling}
            >
              Highest selling
            </DropdownMenuCheckboxItem>
            <DropdownMenuLabel className="select-none">
              Select Category
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={selectedCategory === null}
              onCheckedChange={() => setSelectedCategory(null)}
            >
              All Categories
            </DropdownMenuCheckboxItem>
            {[...new Set(allProducts.map((p) => p.category))].map(
              (category, index) => (
                <DropdownMenuCheckboxItem
                  key={index}
                  checked={selectedCategory === category}
                  onCheckedChange={() => setSelectedCategory(category)}
                >
                  {category}
                </DropdownMenuCheckboxItem>
              )
            )}
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="cursor-pointer">
              <ArrowDownNarrowWide /> Sort
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel className="select-none">
              Sort by
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={sortCriteria === "price" && sortOrder === "ascending"}
              onCheckedChange={() => {
                setSortCriteria("price");
                setSortOrder("ascending");
              }}
            >
              Price: Low to High
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={sortCriteria === "price" && sortOrder === "descending"}
              onCheckedChange={() => {
                setSortCriteria("price");
                setSortOrder("descending");
              }}
            >
              Price: High to Low
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={sortCriteria === "quantity" && sortOrder === "ascending"}
              onCheckedChange={() => {
                setSortCriteria("quantity");
                setSortOrder("ascending");
              }}
            >
              Quantity: Low to High
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={
                sortCriteria === "quantity" && sortOrder === "descending"
              }
              onCheckedChange={() => {
                setSortCriteria("quantity");
                setSortOrder("descending");
              }}
            >
              Quantity: High to Low
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button
          variant="destructive"
          className="cursor-pointer"
          onClick={clearFilter}
        >
          Clear filters
        </Button>
        <Link href="/inventory/add" className="md:ml-auto">
          <Button variant="default" className="cursor-pointer ml-2 text-white">
            <Plus />
            Add product
          </Button>
        </Link>
      </div>

      {allProducts.length > 0 ? (
        <>
          <div className="my-7 ">
            <div className="grid grid-cols-5 md:grid-cols-9 justify-items-start items-center border bg-accent p-3 font-medium ">
              <p className="hidden md:block">ID</p>
              <p className="col-span-1 md:col-span-2">Name</p>
              <p className="hidden md:block">Category</p>
              <p>Price</p>
              <p className="hidden md:block">Sales</p>
              <p>In Stock</p>
              <p>Supplier</p>
              <p>Actions</p>
            </div>
            <div>
              {filteredProducts.map((item, index) => (
                <InvProdCard
                  key={index}
                  update={handleUpdate}
                  id={item.id}
                  price={item.price}
                  supplier={item.supplier || "Unknown"}
                  inStock={item.inStock}
                  name={item.name}
                  category={item.category || "Unknown category"}
                  quantity={item.quantity || 0}
                  categories={categories}
                  sales={item.sales}
                  description={item.description || "No description"}
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center h-full">
          <p className="text-secondary-foreground select-none">
            No products yet. Add one to get started.
          </p>
        </div>
      )}
    </div>
  );
};

const InvProdCard = ({
  id,
  name,
  sales,
  inStock,
  supplier,
  price,
  quantity,
  category,
  description,
  categories,
  update,
}: allProductsProps) => {
  const [loading, setLoading] = useState(false);
  const handleRemove = async (id: string) => {
    setLoading(true);
    const response = await removeProduct(id);
    toast.warning(response.message);
    if (update) update();
    setLoading(false);
  };
  const [newCategory, setNewCategory] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      category: category,
      description: description,
      name: name,
      price: price,
      quantity: quantity,
      supplier: supplier,
    },
  });

  const onSubmit = async (values: z.infer<typeof productSchema>) => {
    console.log("Submitting");
    const validatedValues = productSchema.safeParse(values);
    console.log(validatedValues);
    if (validatedValues.success) {
      const response = await editProduct(id, validatedValues.data);
      toast(`${response.message}`);
      setNewCategory(false);
      if (update) {
        update();
      }
      setIsOpen(false);
      form.reset(validatedValues.data);
    } else {
      toast.error("Validation error!");
    }
  };
  return (
    <div className="grid grid-cols-5 md:grid-cols-9 border-b justify-items-start items-center px-3 py-2 ">
      <p className="hidden md:block truncate max-w-[50px]">{id}</p>
      <p className="col-span-1 md:col-span-2 truncate max-w-[70px] md:max-w-[100px] lg:max-w-max">
        {name}
      </p>
      <p className="hidden md:block truncate max-w-[120px]">{category}</p>
      <p>
        <span className="text-primary-foreground font-medium">Rs. {price}</span>
      </p>
      <p className="hidden md:block">{sales}</p>
      <p
        className={`${
          inStock <= LOW_STOCK_THRESHOLD ? "text-red-500 font-medium" : null
        }`}
      >
        {inStock}
      </p>
      <p className="truncate max-w-[60px]">{supplier}</p>
      <div className="flex gap-2">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger className="cursor-pointer bg-secondary p-1.5 rounded-md text-white">
            <Pen className="size-4" />
          </DialogTrigger>
          <DialogContent className="max-h-[500px] overflow-auto customScroll">
            <DialogHeader>
              <DialogTitle>Edit Product</DialogTitle>
              <DialogDescription>
                Editing specific details of the product. We will save this.
              </DialogDescription>
              <Form {...form}>
                <form
                  onSubmit={(e) => {
					e.preventDefault();
                    console.log("Form submitted");
                    form.handleSubmit(onSubmit);
                  }}
                >
                  <div className="grid w-full items-center gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <div className="flex flex-col space-y-2">
                            <Label htmlFor="name">Product Name</Label>
                            <FormControl>
                              <Input
                                id="name"
                                placeholder="Name of your product.."
                                className="border-primary-foreground/20"
                                {...field}
                              />
                            </FormControl>
                          </div>
                          <FormMessage className="text-red-600" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <>
                          {newCategory ? (
                            <FormItem>
                              <div className="flex flex-col space-y-2">
                                <Label htmlFor="name">Category</Label>
                                <FormControl>
                                  <Input
                                    id="category"
                                    placeholder="Category of the product..."
                                    className="border-primary-foreground/20"
                                    {...field}
                                  />
                                </FormControl>
                              </div>
                              <FormMessage className="text-red-600" />
                            </FormItem>
                          ) : (
                            <FormItem>
                              <div className="flex flex-col space-y-2">
                                <Label htmlFor="category">Category</Label>
                                <Select
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                >
                                  <FormControl>
                                    <SelectTrigger className="w-full border-primary-foreground/20">
                                      <SelectValue placeholder="Select a category" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {(categories || []).map((item, index) => (
                                      <SelectItem value={item} key={index}>
                                        {item}
                                      </SelectItem>
                                    ))}
                                    <Button
                                      size="sm"
                                      onClick={() => setNewCategory(true)}
                                      className="w-full text-sm bg-transparent justify-start hover:bg-accent cursor-pointer"
                                    >
                                      <Plus /> Add new category
                                    </Button>
                                  </SelectContent>
                                </Select>
                              </div>
                              <FormMessage className="text-red-600" />
                            </FormItem>
                          )}
                        </>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="price"
                      render={({ field }) => (
                        <FormItem>
                          <div className="flex flex-col space-y-2">
                            <Label htmlFor="price">Price</Label>
                            <FormControl>
                              <Input
                                type="number"
                                id="price"
                                placeholder="Rs.XXX"
                                className="border-primary-foreground/20"
                                {...field}
                              />
                            </FormControl>
                          </div>
                          <FormMessage className="text-red-600" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="quantity"
                      render={({ field }) => (
                        <FormItem>
                          <div className="flex flex-col space-y-2">
                            <Label htmlFor="quantity">Quantity</Label>
                            <FormControl>
                              <Input
                                type="number"
                                id="quantity"
                                placeholder="XXX"
                                className="border-primary-foreground/20"
                                {...field}
                              />
                            </FormControl>
                          </div>
                          <FormMessage className="text-red-600" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="supplier"
                      render={({ field }) => (
                        <FormItem>
                          <div className="flex flex-col space-y-2">
                            <Label htmlFor="supplier">Supplier</Label>
                            <FormControl>
                              <Input
                                id="supplier"
                                placeholder="Name of your supplier"
                                className="border-primary-foreground/20"
                                {...field}
                              />
                            </FormControl>
                          </div>
                          <FormMessage className="text-red-600" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <div className="flex flex-col space-y-2">
                            <Label htmlFor="name">Product description</Label>
                            <FormControl>
                              <Textarea
                                id="description"
                                placeholder="Description of your project..."
                                className="border-primary-foreground/20"
                                {...field}
                              />
                            </FormControl>
                          </div>
                          <FormMessage className="text-red-600" />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex gap-2 mt-2">
                    <Button type="submit" className="cursor-pointer">
                      Edit product
                    </Button>
                    <DialogClose asChild>
                      <Button variant="destructive">Cancel</Button>
                    </DialogClose>
                  </div>
                </form>
              </Form>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger className="cursor-pointer bg-destructive p-1.5 rounded-md text-white">
            <Trash2 className="size-4" />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete this
                product from our servers.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                type="submit"
                disabled={loading}
                onClick={() => handleRemove(id)}
                variant="destructive"
                className="cursor-pointer"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            ".spinner_OSmW{transform-origin:center;animation:spinner_T6mA .75s step-end infinite}@keyframes spinner_T6mA{8.3%{transform:rotate(30deg)}16.6%{transform:rotate(60deg)}25%{transform:rotate(90deg)}33.3%{transform:rotate(120deg)}41.6%{transform:rotate(150deg)}50%{transform:rotate(180deg)}58.3%{transform:rotate(210deg)}66.6%{transform:rotate(240deg)}75%{transform:rotate(270deg)}83.3%{transform:rotate(300deg)}91.6%{transform:rotate(330deg)}100%{transform:rotate(360deg)}}",
                        }}
                      />
                      <g className="spinner_OSmW">
                        <rect x={11} y={1} width={2} height={5} opacity=".14" />
                        <rect
                          x={11}
                          y={1}
                          width={2}
                          height={5}
                          transform="rotate(30 12 12)"
                          opacity=".29"
                        />
                        <rect
                          x={11}
                          y={1}
                          width={2}
                          height={5}
                          transform="rotate(60 12 12)"
                          opacity=".43"
                        />
                        <rect
                          x={11}
                          y={1}
                          width={2}
                          height={5}
                          transform="rotate(90 12 12)"
                          opacity=".57"
                        />
                        <rect
                          x={11}
                          y={1}
                          width={2}
                          height={5}
                          transform="rotate(120 12 12)"
                          opacity=".71"
                        />
                        <rect
                          x={11}
                          y={1}
                          width={2}
                          height={5}
                          transform="rotate(150 12 12)"
                          opacity=".86"
                        />
                        <rect
                          x={11}
                          y={1}
                          width={2}
                          height={5}
                          transform="rotate(180 12 12)"
                        />
                      </g>
                    </svg>
                    <p>Deleting...</p>
                  </div>
                ) : (
                  "Delete Product"
                )}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Link href={`/product/${id}`}>
          <Button size="sm">
            <Eye />
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default Page;
