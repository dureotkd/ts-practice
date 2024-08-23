// =========================== Pick ===========================
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

// =========================== Pick ===========================

// =========================== Omit ===========================

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  category: string;
}

async function fetchBooks(): Promise<Book[]> {
  return [
    {
      id: 1,
      title: "어린왕자",
      author: "생텍쥐페리",
      price: 1000,
      category: "소설",
    },
    {
      id: 2,
      title: "해리포터",
      author: "J.K롤링",
      price: 2000,
      category: "소설",
    },
  ];
}

async function getFetchBookDetail(
  id: number
): Promise<Omit<Book, "author" | "price" | "category">> {
  const book = (await fetchBooks()).find((item) => item.id === id);

  if (book === undefined) {
    throw new Error("book undefined");
  }

  return {
    id: book?.id,
    title: book?.title,
  };
}

// =========================== Omit ===========================
