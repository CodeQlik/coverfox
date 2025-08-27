"use client";
import { Flex, Box } from "@chakra-ui/react";
import DashboardSidebar, { SidebarItem } from "../../components/DashboardSidebar";

export default function DashboardTwoCol({
  items,
  accent,
  children,
}: {
  items: SidebarItem[];
  accent: "orange" | "blue" | "emerald" | "violet";
  children: React.ReactNode;
}) {
  return (
    <Flex gap={6} direction={{ base: "column", lg: "row" }}>
      <DashboardSidebar items={items} accent={accent} />
      <Box as="main" minH="calc(100vh - 9rem)" flex="1">
        {children}
      </Box>
    </Flex>
  );
}
