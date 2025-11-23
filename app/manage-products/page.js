"use client";
import { useEffect, useState } from "react";
import axios from "../../lib/axios";
import ProtectedRoute from "../../components/ProtectedRoute";

export default function ManageProducts() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await axios.get("/products");
    setProducts(res.data);
  };

  const handleDelete = async id => {
    await axios.delete(`/products/${id}`);
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProtectedRoute>
      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Manage Products</h1>
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Title</th>
              <th className="border px-4 py-2">Price</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p._id}>
                <td className="border px-4 py-2">{p.title}</td>
                <td className="border px-4 py-2">${p.price}</td>
                <td className="border px-4 py-2 space-x-2">
                  <button onClick={() => handleDelete(p._id)} className="px-2 py-1 bg-red-500 text-white rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ProtectedRoute>
  );
}
