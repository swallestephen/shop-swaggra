import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();
    if (!name || !email || !password) return Response.json({ error: "Missing fields" }, { status: 400 });
    
    const exists = await prisma.user.findUnique({ where: { email } });
    if (exists) return Response.json({ error: "Email taken" }, { status: 400 });

    const passwordHash = await bcrypt.hash(password, 10);
    await prisma.user.create({ data: { name, email, passwordHash, role: "CLIENT" } });
    
    return Response.json({ ok: true });
  } catch (error) {
    console.error("Register error:", error);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}