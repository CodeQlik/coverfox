import { cookies } from "next/headers";
import LogoutButton from "../components/LogoutButton";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const jar = await cookies();
  const role = jar.get("cf_role")?.value || "user";
  const userRaw = jar.get("cf_user")?.value || "{}";
  let user: { name?: string; email?: string } = {};
  try { user = JSON.parse(userRaw); } catch {}

  return (
    <div className="px-4 md:px-6 lg:px-8 py-6 bg-gray-50 min-h-[80vh]">
      <div className="mx-auto max-w-7xl">
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 md:p-5 mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gray-100 border flex items-center justify-center text-sm font-semibold text-gray-700">
              {(user.name || "G").charAt(0).toUpperCase()}
            </div>
            <div>
              <div className="text-xs text-gray-600">Signed in as</div>
              <div className="text-sm font-medium">{user.name || "Guest"} <span className="text-gray-500">({user.email || "-"})</span></div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 text-xs rounded-full bg-gray-100 border">Role: <span className="font-medium">{role.toUpperCase()}</span></span>
            <LogoutButton />
          </div>
        </div>

        {children}
      </div>
    </div>
  );
}
