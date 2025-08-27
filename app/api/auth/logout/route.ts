import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set("cf_role", "", { maxAge: 0, path: "/" });
  res.cookies.set("cf_user", "", { maxAge: 0, path: "/" });
  return res;
}
