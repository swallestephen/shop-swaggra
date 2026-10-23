"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const router = useRouter();

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const res = await signIn("credentials", { ...form, redirect: false });
    if (res?.error) return alert("Invalid credentials");
    
    const session = await fetch("/api/auth/session").then(r => r.json());
    if (session?.user?.role === "ADMIN") router.push("/admin");
    else router.push("/account/orders");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      <form onSubmit={submit} className="bg-white p-8 rounded-xl shadow-sm border w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-slate-800">Welcome Back</h1>
        <input className="w-full border rounded p-2" placeholder="Email" type="email" required onChange={e => setForm({ ...form, email: e.target.value })} />
        <input className="w-full border rounded p-2" placeholder="Password" type="password" required onChange={e => setForm({ ...form, password: e.target.value })} />
        <button className="w-full bg-slate-900 text-white py-2 rounded font-bold hover:bg-slate-800">Log In</button>
        <p className="text-sm text-center text-slate-600">New here? <Link href="/register" className="text-orange-500 font-semibold">Create account</Link></p>
      </form>
    </div>
  );
}