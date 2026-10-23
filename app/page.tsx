export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* White Navbar */}
      <nav className="bg-white shadow-sm p-4 sticky top-0">
        <h1 className="text-2xl font-black text-orange-500">Shop Swaggra</h1>
      </nav>

      {/* Orange Hero Banner */}
      <div className="bg-orange-500 text-white text-center py-20 px-4">
        <h2 className="text-4xl font-bold">Welcome to Shop Swaggra</h2>
        <p className="mt-2 text-orange-100">Find the best products at unbeatable prices.</p>
      </div>

      {/* Product Area */}
      <div className="p-10 max-w-7xl mx-auto">
        <h3 className="text-xl font-bold text-slate-800">Recommended for you</h3>
        <p className="text-slate-500 mt-2">No products added yet.</p>
      </div>
    </div>
  );
}