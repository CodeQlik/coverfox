import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ROLE_ROUTES: Record<string, string> = {
  admin: "/dashboard/admin",
  user: "/dashboard/user",
  seo: "/dashboard/seo",
  agent: "/dashboard/agent",
};

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (!pathname.startsWith("/dashboard")) return NextResponse.next();

  const role = req.cookies.get("cf_role")?.value;

  // If no role, redirect to login
  if (!role) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // If visiting a role-specific page with wrong role, redirect to correct
  const targetForRole = ROLE_ROUTES[role];
  if (!targetForRole) return NextResponse.next();

  const isRolePage = Object.values(ROLE_ROUTES).some((p) => pathname.startsWith(p));
  if (isRolePage && !pathname.startsWith(targetForRole)) {
    const url = req.nextUrl.clone();
    url.pathname = targetForRole;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
