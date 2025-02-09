"use client";

import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Navbar() {
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    const handleIncrementCart = () => {
      setCartItems((prev) => prev + 1);
    };

    window.addEventListener("incrementCart", handleIncrementCart);

    return () => {
      window.removeEventListener("incrementCart", handleIncrementCart);
    };
  }, []);

  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold">POS System</span>
          <div className="relative">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-6 w-6" />
              <span className="sr-only">Cart</span>
            </Button>
            {cartItems > 0 && (
              <Badge
                variant="destructive"
                className="absolute -top-2 -right-2 px-2 py-1 text-xs"
              >
                {cartItems}
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
