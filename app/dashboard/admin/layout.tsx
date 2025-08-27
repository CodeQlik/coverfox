import DashboardSidebar, { SidebarItem } from "../../components/DashboardSidebar";
import { FiGrid, FiUsers, FiFileText, FiSettings } from "react-icons/fi";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const items: SidebarItem[] = [
    { label: "Overview", href: "/dashboard/admin", icon: <FiGrid /> },
    { label: "Users", href: "/dashboard/admin/users", icon: <FiUsers /> },
    { label: "Policies", href: "/dashboard/admin/policies", icon: <FiFileText /> },
    { label: "Settings", href: "/dashboard/admin/settings", icon: <FiSettings /> },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[18rem_1fr] gap-6">
      <DashboardSidebar items={items} accent="violet" />
      <main className="min-h-[calc(100vh-9rem)]">{children}</main>
    </div>
  );
}
