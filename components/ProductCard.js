"use client";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-md p-4 shadow hover:shadow-lg transition">
      <img src={product.image || "/placeholder.png"} className="w-full h-48 object-cover mb-2 rounded" />
      <h3 className="text-lg font-semibold">{product.title}</h3>
      <p className="text-gray-500 text-sm">{product.shortDesc?.substring(0, 50)}...</p>
      <p className="font-bold mt-2">${product.price}</p>
      <Link href={`/product/${product._id}`} className="mt-2 inline-block px-3 py-1 bg-indigo-600 text-white rounded">
        Details
      </Link>
    </div>
  );
}
