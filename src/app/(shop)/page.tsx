import { connection } from "next/server";
import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/app/_components/ProductGrid";
import { getProducts } from "./actions";

export default async function Page() {
  await connection();

  const products = await getProducts();

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Our Menu</h1>
        <Button variant="outline">Filter</Button>
      </div>

      <ProductGrid products={products} />
    </div>
  );
}
