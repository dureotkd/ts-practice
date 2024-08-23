interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// BEST ✔
async function fetchProducts(): Promise<Product[]> {
  return [
    {
      id: 1,
      name: "NIKE-01",
      price: 100,
      brand: "nike",
      stock: 2,
    },
  ];
}

// BEST SOLUTIONS ✔
async function fetchProductDetail(): Promise<Pick<Product, "id" | "name">> {
  return {
    id: 1,
    name: "NIKE-01",
  };
}
