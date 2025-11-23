"use client";
import { useState } from "react";
import axios from "../../lib/axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "../../components/ProtectedRoute";

export default function AddProduct() {
  const [form, setForm] = useState({ title: "", shortDesc: "", fullDesc: "", price: "" });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("/products", form);
      toast.success("Product added successfully!");
      setForm({ title: "", shortDesc: "", fullDesc: "", price: "" });
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <ProtectedRoute>
      <div className="max-w-md mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Add Product</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Title" value={form.title} onChange={e => setForm({...form,title:e.target.value})} className="w-full p-2 border rounded"/>
          <input type="text" placeholder="Short Description" value={form.shortDesc} onChange={e => setForm({...form,shortDesc:e.target.value})} className="w-full p-2 border rounded"/>
          <textarea placeholder="Full Description" value={form.fullDesc} onChange={e => setForm({...form,fullDesc:e.target.value})} className="w-full p-2 border rounded"/>
          <input type="number" placeholder="Price" value={form.price} onChange={e => setForm({...form,price:e.target.value})} className="w-full p-2 border rounded"/>
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded">Submit</button>
        </form>
        <ToastContainer />
      </div>
    </ProtectedRoute>
  );
}
