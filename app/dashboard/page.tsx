import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const ROLE_ROUTES: Record<string, string> = {
  admin: "/dashboard/admin",
  user: "/dashboard/user",
  seo: "/dashboard/seo",
  agent: "/dashboard/agent",
};

export default async function DashboardIndex() {
  const jar = await cookies();
  const role = jar.get("cf_role")?.value || "user";
  const target = ROLE_ROUTES[role] || "/dashboard/user";
  redirect(target);
}
