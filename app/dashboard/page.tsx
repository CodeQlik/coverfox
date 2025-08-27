import { cookies } from "next/headers";
import Link from "next/link";

const ROLE_ROUTES: Record<string, string> = {
  admin: "/dashboard/admin",
  user: "/dashboard/user",
  seo: "/dashboard/seo",
  agent: "/dashboard/agent",
};

export default async function DashboardIndex() {
  const jar = await cookies();
  const role = (await jar).get("cf_role")?.value || "user";
  const target = ROLE_ROUTES[role] || "/dashboard/user";
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
      <h1 className="text-lg font-semibold mb-2">Dashboard</h1>
      <p className="text-sm text-gray-600 mb-4">You&apos;re logged in as <span className="font-medium">{role.toUpperCase()}</span>.</p>
      <Link href={target} className="inline-block bg-orange-500 hover:bg-orange-600 text-white rounded-md px-4 py-2">Go to your panel</Link>
    </div>
  );
}
