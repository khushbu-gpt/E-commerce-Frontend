"use client";

import { use } from "react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}


export default function SingleCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/category/${slug}`);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching category products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryProducts();
  }, [slug]);

  return (
    <main className="min-h-screen bg-gray-50 px-5 py-24 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-purple-700 border-b-4 border-purple-700 pb-2 mb-10 capitalize">
        {slug.replace(/-/g, " ")} Products
      </h1>

      {loading ? (
        <p className="text-gray-500 text-lg">Loading products...</p>
      ) : products.length > 0 ? (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl w-full">
          {products.map(({ id, title, price, image }) => (
            <div
              key={id}
              className="bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition duration-300 p-4 text-center"
            >
              <Image
                src={image}
                width={200}
                height={200}
                alt={title}
                className="w-full h-60 object-contain mb-4"
              />
              <p className="text-purple-600 font-semibold text-lg mb-2">${price}</p>
              <p className="text-gray-800 font-medium text-base line-clamp-2">{title}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-lg">No products found in this category.</p>
      )}
    </main>
  );
}
