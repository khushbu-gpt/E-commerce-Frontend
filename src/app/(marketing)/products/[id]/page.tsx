"use client";

import { use } from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export default function Products({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProduct() {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    }

    getProduct();
  }, [id]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">

      <div className="text-center pt-24">
        <h1 className="border-purple-700 border-b-4 text-4xl font-bold text-black inline-block">
          Product <span className="text-purple-700">Details</span>
        </h1>
      </div>

      <div className="flex justify-center items-center py-10 px-4">
        {/* {loading ? (
          <p className="text-gray-500 text-lg">Loading product...</p>): */}
        {product && (
          <div className="w-80 md:w-80 bg-white rounded-lg shadow-md border overflow-hidden text-center p-4 hover:shadow-lg transition">
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
              className="w-full h-64 object-contain mb-4"
            />
            <p className="text-purple-600 font-semibold text-xl">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-lg font-medium text-gray-800 mt-2">
              {product.title}
            </p>
            <p className="text-sm font-medium text-gray-800 mt-2 px-4 line-clamp-3">
              {product.description}
            </p>
          </div>
        )}
      </div>

    </div>
  );
}
