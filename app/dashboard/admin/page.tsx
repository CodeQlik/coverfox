"use client";
import { Box, Text, SimpleGrid, Flex, Badge } from "@chakra-ui/react";
import { FiUsers, FiBarChart2, FiPackage, FiSliders } from "react-icons/fi";

export default function AdminDashboard() {
  const cards = [
    { icon: <FiUsers />, title: "Users & Roles", desc: "Manage accounts, roles, and permissions", accent: "blue" },
    { icon: <FiBarChart2 />, title: "System Metrics", desc: "Monitor KPIs and performance", accent: "purple" },
    { icon: <FiPackage />, title: "Products", desc: "Configure products and pricing", accent: "teal" },
    { icon: <FiSliders />, title: "Settings", desc: "Platform configuration", accent: "orange" },
  ];

  return (
    <Box>
      <Text fontSize="lg" fontWeight="semibold" mb={4}>Admin Panel</Text>
      <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={4}>
        {cards.map((c) => (
          <AnimatedCard key={c.title} icon={c.icon} title={c.title} desc={c.desc} accent={c.accent} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

function AnimatedCard({ icon, title, desc, accent }: { icon: React.ReactNode; title: string; desc: string; accent: string }) {
  return (
    <Box
      bg="white"
      borderWidth="1px"
      borderColor="gray.200"
      rounded="xl"
      shadow="sm"
      p={5}
      transition="all 200ms ease"
      _hover={{ transform: "translateY(-4px)", shadow: "md" }}
      _active={{ transform: "translateY(-1px)" }}
    >
      <Flex align="center" justify="space-between" mb={3}>
        <Flex align="center" gap={3}>
          <Box
            w={10}
            h={10}
            rounded="lg"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg={`${accent}.50`}
            color={`${accent}.600`}
            borderWidth="1px"
            borderColor={`${accent}.100`}
            fontSize="xl"
          >
            {icon}
          </Box>
          <Text fontWeight="semibold">{title}</Text>
        </Flex>
        <Badge colorScheme={accent} variant="subtle">Admin</Badge>
      </Flex>
      <Text fontSize="sm" color="gray.600">{desc}</Text>
    </Box>
  );
}
