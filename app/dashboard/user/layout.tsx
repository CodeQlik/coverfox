"use client";
import DashboardSidebar, { SidebarItem } from "../../components/DashboardSidebar";
import { FiHome, FiUser, FiShield, FiFileText } from "react-icons/fi";
import { Box } from "@chakra-ui/react";

export default function UserLayout({ children }: { children: React.ReactNode }) {
  const items: SidebarItem[] = [
    { label: "Overview", href: "/dashboard/user", icon: <FiHome /> },
    { label: "Profile", href: "/dashboard/user/profile", icon: <FiUser /> },
    { label: "KYC", href: "/dashboard/user/kyc", icon: <FiShield /> },
    { label: "Policies", href: "/dashboard/user/policies", icon: <FiFileText /> },
  ];

  return (
    <Box display="grid" gridTemplateColumns={{ base: "1fr", lg: "18rem 1fr" }} gap={6}>
      <DashboardSidebar items={items} accent="emerald" />
      <Box as="main" minH="calc(100vh - 9rem)">{children}</Box>
    </Box>
  );
}
