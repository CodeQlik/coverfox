import DashboardSidebar, { SidebarItem } from "../../components/DashboardSidebar";
import { FiHome, FiUser, FiShield, FiFileText } from "react-icons/fi";

export default function UserLayout({ children }: { children: React.ReactNode }) {
  const items: SidebarItem[] = [
    { label: "Overview", href: "/dashboard/user", icon: <FiHome /> },
    { label: "Profile", href: "/dashboard/user/profile", icon: <FiUser /> },
    { label: "KYC", href: "/dashboard/user/kyc", icon: <FiShield /> },
    { label: "Policies", href: "/dashboard/user/policies", icon: <FiFileText /> },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[16rem_1fr] gap-6">
      <DashboardSidebar items={items} accent="emerald" />
      <main className="min-h-[60vh]">{children}</main>
    </div>
  );
}
