import { Product } from "./types";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Espresso",
    price: 3.99,
    description:
      "Rich and bold single-shot espresso made from premium arabica beans",
    image:
      "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=800&auto=format&fit=crop&q=60",
    category: "coffee",
  },
  {
    id: 2,
    name: "Green Tea Latte",
    price: 4.99,
    description: "Smooth and creamy matcha green tea with steamed milk",
    image:
      "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=800&auto=format&fit=crop&q=60",
    category: "tea",
  },
  {
    id: 3,
    name: "Cappuccino",
    price: 4.49,
    description:
      "Classic Italian coffee with equal parts espresso, steamed milk, and foam",
    image:
      "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&auto=format&fit=crop&q=60",
    category: "coffee",
  },
  {
    id: 4,
    name: "Butter Croissant",
    price: 3.49,
    description: "Flaky, buttery croissant baked fresh daily",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&auto=format&fit=crop&q=60",
    category: "pastry",
  },
  {
    id: 5,
    name: "Earl Grey Tea",
    price: 3.99,
    description: "Premium black tea flavored with oil of bergamot",
    image:
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&auto=format&fit=crop&q=60",
    category: "tea",
  },
  {
    id: 6,
    name: "Chocolate Muffin",
    price: 3.99,
    description: "Double chocolate muffin with chocolate chips",
    image:
      "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=800&auto=format&fit=crop&q=60",
    category: "pastry",
  },
];
