import DashboardSidebar, { SidebarItem } from "../../components/DashboardSidebar";
import { FiBriefcase, FiBook, FiPlusCircle, FiDollarSign } from "react-icons/fi";

export default function AgentLayout({ children }: { children: React.ReactNode }) {
  const items: SidebarItem[] = [
    { label: "Overview", href: "/dashboard/agent", icon: <FiBriefcase /> },
    { label: "Leads", href: "/dashboard/agent/leads", icon: <FiBook /> },
    { label: "Create Quote", href: "/dashboard/agent/quotes", icon: <FiPlusCircle /> },
    { label: "Commissions", href: "/dashboard/agent/commissions", icon: <FiDollarSign /> },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[16rem_1fr] gap-6">
      <DashboardSidebar items={items} accent="orange" />
      <main className="min-h-[60vh]">{children}</main>
    </div>
  );
}
