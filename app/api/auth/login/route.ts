import { NextResponse } from "next/server";

const ONE_WEEK = 7 * 24 * 60 * 60;

export async function POST(req: Request) {
  const { name = "", email = "", role = "user" } = await req.json().catch(() => ({}));
  const valid = ["user", "admin", "seo", "agent"];
  const r = valid.includes(role) ? role : "user";
  const payload = { name, email, role: r };

  const res = NextResponse.json({ ok: true, role: r });
  res.cookies.set("cf_role", r, { httpOnly: false, sameSite: "lax", maxAge: ONE_WEEK, path: "/" });
  res.cookies.set("cf_user", JSON.stringify(payload), { httpOnly: false, sameSite: "lax", maxAge: ONE_WEEK, path: "/" });
  return res;
}
