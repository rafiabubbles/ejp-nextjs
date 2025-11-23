"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-8 border rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <button
          onClick={() => signIn("google")}
          className="w-full bg-red-500 text-white py-2 rounded"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
}
"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-8 border rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <button
          onClick={() => signIn("google")}
          className="w-full bg-red-500 text-white py-2 rounded"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
}
