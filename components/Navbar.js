"use client";
import Link from "next/link";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-indigo-600">RafiaShop</Link>
        <div className="flex items-center space-x-4">
          <Link href="/products" className="hover:text-indigo-600">Products</Link>
          <Link href="/" className="hover:text-indigo-600">About</Link>
          <Link href="/" className="hover:text-indigo-600">Contact</Link>
          {!session && (
            <button onClick={() => signIn()} className="px-4 py-2 bg-indigo-600 text-white rounded">Login</button>
          )}
          {session && (
            <div className="relative">
              <button onClick={() => setDropdown(!dropdown)} className="px-4 py-2 bg-indigo-600 text-white rounded">
                {session.user.name}
              </button>
              {dropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2">
                  <Link href="/add-product" className="block px-4 py-2 hover:bg-indigo-100">Add Product</Link>
                  <Link href="/manage-products" className="block px-4 py-2 hover:bg-indigo-100">Manage Products</Link>
                  <button onClick={() => signOut()} className="block px-4 py-2 w-full text-left hover:bg-indigo-100">Logout</button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
