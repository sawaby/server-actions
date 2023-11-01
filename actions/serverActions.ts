'use server';
import { revalidateTag } from "next/cache";
import { Product } from "@/typing";
export const addProductToDatabase = async (e: FormData) => {

    const product = e.get("product")?.toString();
    const price = e.get("price")?.toString();

    if (!product || !price) return;

    // create a product object
    const newProduct: Product = {
      product,
      price,
    };

    // post the newproduct to mockapi
    await fetch('https://6541282ef0b8287df1fdef0a.mockapi.io/products', {
      method: 'POST',
      body: JSON.stringify(newProduct),
      headers: {
        "Content-Type": "application/json",
      },
    });

    revalidateTag('products');
  }