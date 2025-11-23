"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "../../../lib/axios";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const router = useRouter();

  useEffect(() => {
    axios.get(`/products/${id}`).then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <button onClick={() => router.back()} className="mb-4 text-indigo-600 underline">Back</button>
      <img src={product.image || "/placeholder.png"} className="w-full h-96 object-cover rounded mb-4"/>
      <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
      <p className="text-gray-500 mb-2">{product.fullDesc}</p>
      <p className="font-bold text-xl">${product.price}</p>
    </div>
  );
}
