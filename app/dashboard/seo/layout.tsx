import DashboardSidebar, { SidebarItem } from "../../components/DashboardSidebar";
import { FiSearch, FiMap, FiCpu, FiTag } from "react-icons/fi";
import { Box } from "@chakra-ui/react";

export default function SEOLayout({ children }: { children: React.ReactNode }) {
  const items: SidebarItem[] = [
    { label: "Overview", href: "/dashboard/seo", icon: <FiSearch /> },
    { label: "Sitemap", href: "/dashboard/seo/sitemap", icon: <FiMap /> },
    { label: "Robots", href: "/dashboard/seo/robots", icon: <FiCpu /> },
    { label: "Metadata", href: "/dashboard/seo/metadata", icon: <FiTag /> },
  ];

  return (
    <Box display="grid" gridTemplateColumns={{ base: "1fr", lg: "18rem 1fr" }} gap={6}>
      <DashboardSidebar items={items} accent="blue" />
      <Box as="main" minH="calc(100vh - 9rem)">{children}</Box>
    </Box>
  );
}
