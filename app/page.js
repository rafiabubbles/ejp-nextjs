import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="h-screen bg-indigo-100 flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to RafiaShop</h1>
        <p className="text-xl mb-6">Best products for your needs</p>
        <Link href="/products" className="px-6 py-3 bg-indigo-600 text-white rounded">Shop Now</Link>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white shadow rounded hover:shadow-lg">Feature 1</div>
        <div className="p-6 bg-white shadow rounded hover:shadow-lg">Feature 2</div>
        <div className="p-6 bg-white shadow rounded hover:shadow-lg">Feature 3</div>
      </section>

      {/* Products preview */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Popular Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border p-4 rounded shadow">Product 1</div>
          <div className="border p-4 rounded shadow">Product 2</div>
          <div className="border p-4 rounded shadow">Product 3</div>
        </div>
      </section>
    </div>
  );
}
