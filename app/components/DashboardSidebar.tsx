"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type SidebarItem = { label: string; href: string; icon?: React.ReactNode };

const DEFAULT_MENU: Record<string, SidebarItem[]> = {
  user: [
    { label: "Overview", href: "/dashboard/user", icon: "🏠" },
    { label: "Profile", href: "/dashboard/user/profile", icon: "👤" },
    { label: "KYC", href: "/dashboard/user/kyc", icon: "🪪" },
    { label: "Policies", href: "/dashboard/user/policies", icon: "📄" },
  ],
  admin: [
    { label: "Overview", href: "/dashboard/admin", icon: "📊" },
    { label: "Users", href: "/dashboard/admin/users", icon: "👥" },
    { label: "Policies", href: "/dashboard/admin/policies", icon: "📑" },
  ],
  seo: [
    { label: "Overview", href: "/dashboard/seo", icon: "🔎" },
  ],
  agent: [
    { label: "Overview", href: "/dashboard/agent", icon: "💼" },
  ],
};

export default function DashboardSidebar({
  role = "user",
  items,
  accent = "orange",
}: {
  role?: string;
  items?: SidebarItem[];
  accent?: "orange" | "blue" | "emerald" | "violet";
}) {
  const pathname = usePathname();
  const menu = items || DEFAULT_MENU[role] || DEFAULT_MENU.user;

  const accentClasses: Record<string, { bg: string; border: string; text: string }> = {
    orange: { bg: "bg-orange-50", border: "border-orange-200", text: "text-orange-700" },
    blue: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-700" },
    emerald: { bg: "bg-emerald-50", border: "border-emerald-200", text: "text-emerald-700" },
    violet: { bg: "bg-violet-50", border: "border-violet-200", text: "text-violet-700" },
  };
  const activeStyle = accentClasses[accent] || accentClasses.orange;

  return (
    <aside className="hidden lg:block w-64 shrink-0">
      <div className="sticky top-6 bg-white border border-gray-200 rounded-xl shadow-sm p-3">
        <nav className="space-y-1">
          {menu.map(({ href, label, icon }) => {
            const active = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm border transition ${
                  active
                    ? `${activeStyle.bg} ${activeStyle.border} ${activeStyle.text}`
                    : "hover:bg-gray-50 border-transparent text-gray-700"
                }`}
              >
                <span className="text-base">{icon}</span>
                <span className="font-medium">{label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
