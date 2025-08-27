import { cookies } from "next/headers";
import LogoutButton from "../components/LogoutButton";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const jar = await cookies();
  const role = jar.get("cf_role")?.value || "user";
  const userRaw = jar.get("cf_user")?.value || "{}";
  let user: { name?: string; email?: string } = {};
  try { user = JSON.parse(userRaw); } catch {}

  return (
    <div className="px-4 md:px-6 lg:px-8 py-6">
      <div className="mx-auto max-w-6xl">
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 mb-6 flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-600">Signed in as</div>
            <div className="font-medium">{user.name || "Guest"} <span className="text-gray-500">({user.email || "-"})</span></div>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-2 py-1 text-xs rounded bg-gray-100 border">Role: <span className="font-medium">{role.toUpperCase()}</span></span>
            <LogoutButton />
          </div>
        </div>

        {children}
      </div>
    </div>
  );
}
