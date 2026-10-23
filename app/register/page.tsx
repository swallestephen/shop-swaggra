"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const router = useRouter();

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/register", { 
      method: "POST", 
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form) 
    });
    if (res.ok) { alert("Account created! Please login."); router.push("/login"); }
    else { alert("Error creating account"); }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      <form onSubmit={submit} className="bg-white p-8 rounded-xl shadow-sm border w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-slate-800">Create Account</h1>
        <input className="w-full border rounded p-2" placeholder="Full Name" required onChange={e => setForm({ ...form, name: e.target.value })} />
        <input className="w-full border rounded p-2" placeholder="Email" type="email" required onChange={e => setForm({ ...form, email: e.target.value })} />
        <input className="w-full border rounded p-2" placeholder="Password" type="password" required onChange={e => setForm({ ...form, password: e.target.value })} />
        <button className="w-full bg-orange-500 text-white py-2 rounded font-bold hover:bg-orange-600">Sign Up</button>
        <p className="text-sm text-center text-slate-600">Already have an account? <Link href="/login" className="text-orange-500 font-semibold">Log in</Link></p>
      </form>
    </div>
  );
}