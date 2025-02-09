"use server";

import { BASE_URL } from "~lib/constant";
import { Product } from "~lib/types";

export async function getProducts(): Promise<Product[]> {
  const url =
    process.env.NODE_ENV === "development"
      ? `${BASE_URL}/api/products`
      : "https://pos-nextjs-waafipay.vercel.app/api/products";

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}
