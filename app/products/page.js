"use client";
import { useEffect, useState } from "react";
import axios from "../../lib/axios";
import ProductCard from "../../components/ProductCard";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/products").then(res => setProducts(res.data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(p => <ProductCard key={p._id} product={p} />)}
      </div>
    </div>
  );
}
