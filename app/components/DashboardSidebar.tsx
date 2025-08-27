"use client";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Box, Link, Text, Badge } from "@chakra-ui/react";

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
    { label: "Settings", href: "/dashboard/admin/settings", icon: "⚙️" },
  ],
  seo: [{ label: "Overview", href: "/dashboard/seo", icon: "🔎" }],
  agent: [{ label: "Overview", href: "/dashboard/agent", icon: "💼" }],
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

  const accentMap: Record<string, { bg: string; color: string; border: string }> = {
    orange: { bg: "orange.50", color: "orange.700", border: "orange.200" },
    blue: { bg: "blue.50", color: "blue.700", border: "blue.200" },
    emerald: { bg: "green.50", color: "green.700", border: "green.200" },
    violet: { bg: "purple.50", color: "purple.700", border: "purple.200" },
  };
  const active = accentMap[accent] || accentMap.orange;

  return (
    <Box display={{ base: "none", lg: "block" }} w="18rem" flexShrink={0}>
      <Box position="sticky" top={6} bg="white" borderWidth="1px" borderColor="gray.200" rounded="xl" shadow="sm" p={3} h="calc(100vh - 7rem)" overflowY="auto">
        {/* Header */}
        <Box display="flex" alignItems="center" justifyContent="space-between" px={2} py={1} mb={2}>
          <Text fontSize="sm" fontWeight="semibold">Dashboard</Text>
          <Badge colorPalette="gray" variant="outline" borderColor="gray.300">{role}</Badge>
        </Box>
        <Box h="1px" bg="gray.200" mx={2} mb={2} />

        <Box as="nav" display="flex" flexDirection="column" gap={1}>
          {menu.map(({ href, label, icon }) => {
            const isActive = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                as={NextLink}
                key={href}
                href={href}
                rounded="md"
                px={3}
                py={2}
                fontSize="sm"
                borderWidth={isActive ? "1px" : 0}
                bg={isActive ? active.bg : "transparent"}
                color={isActive ? active.color : "gray.700"}
                borderColor={isActive ? active.border : "transparent"}
                _hover={{ bg: isActive ? active.bg : "gray.50" }}
                display="flex"
                alignItems="center"
                gap={2}
                position="relative"
              >
                {/* active accent indicator */}
                {isActive && (
                  <Box position="absolute" left={0} top={1} bottom={1} width="2px" bg={active.border} rounded="sm" />
                )}
                <Text as="span" fontSize="md" lineHeight={1}>
                  {icon}
                </Text>
                <Text as="span" fontWeight="medium">
                  {label}
                </Text>
              </Link>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
