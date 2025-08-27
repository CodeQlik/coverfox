import DashboardSidebar, { SidebarItem } from "../../components/DashboardSidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const items: SidebarItem[] = [
    { label: "Overview", href: "/dashboard/admin", icon: "📊" },
    { label: "Users", href: "/dashboard/admin/users", icon: "👥" },
    { label: "Policies", href: "/dashboard/admin/policies", icon: "📑" },
    { label: "Settings", href: "/dashboard/admin/settings", icon: "⚙️" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[16rem_1fr] gap-6">
      <DashboardSidebar items={items} accent="violet" />
      <main className="min-h-[60vh]">{children}</main>
    </div>
  );
}
