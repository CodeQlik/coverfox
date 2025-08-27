import { SidebarItem } from "../../components/DashboardSidebar";
import DashboardTwoCol from "../components/DashboardTwoCol";
import { FiBriefcase, FiBook, FiPlusCircle, FiDollarSign, FiUserCheck } from "react-icons/fi";

export default function AgentLayout({ children }: { children: React.ReactNode }) {
  const items: SidebarItem[] = [
    { label: "Overview", href: "/dashboard/agent", icon: <FiBriefcase /> },
    { label: "Leads", href: "/dashboard/agent/leads", icon: <FiBook /> },
    { label: "Create Quote", href: "/dashboard/agent/quotes", icon: <FiPlusCircle /> },
    { label: "Commissions", href: "/dashboard/agent/commissions", icon: <FiDollarSign /> },
    { label: "KYC", href: "/dashboard/agent/kyc", icon: <FiUserCheck /> },
  ];

  return <DashboardTwoCol items={items} accent="orange">{children}</DashboardTwoCol>;
}
