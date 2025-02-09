"use server";

import { BASE_URL } from "~lib/constant";
import { Product } from "~lib/types";

export async function getProducts(): Promise<Product[]> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || BASE_URL;
  const res = await fetch(`${baseUrl}/api/products`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}
