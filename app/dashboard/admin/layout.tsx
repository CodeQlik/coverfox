import { SidebarItem } from "../../components/DashboardSidebar";
import DashboardTwoCol from "../components/DashboardTwoCol";
import { FiGrid, FiUsers, FiFileText, FiSettings } from "react-icons/fi";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const items: SidebarItem[] = [
    { label: "Overview", href: "/dashboard/admin", icon: <FiGrid /> },
    { label: "Users", href: "/dashboard/admin/users", icon: <FiUsers /> },
    { label: "Policies", href: "/dashboard/admin/policies", icon: <FiFileText /> },
    { label: "Settings", href: "/dashboard/admin/settings", icon: <FiSettings /> },
  ];

  return <DashboardTwoCol items={items} accent="violet">{children}</DashboardTwoCol>;
}
