"use client";
import { Box, Text, SimpleGrid, Flex, Badge } from "@chakra-ui/react";
import { FiUsers, FiFilePlus, FiDollarSign, FiClipboard } from "react-icons/fi";

export default function AgentDashboard() {
  const cards = [
    { icon: <FiUsers />, title: "Leads", desc: "Your assigned leads & follow-ups", accent: "teal" },
    { icon: <FiFilePlus />, title: "Create Quotes", desc: "Generate quotes for customers", accent: "blue" },
    { icon: <FiDollarSign />, title: "Commissions", desc: "Track payouts & earnings", accent: "green" },
    { icon: <FiClipboard />, title: "Cases", desc: "Manage active and closed cases", accent: "purple" },
  ];

  return (
    <Box>
      <Text fontSize="lg" fontWeight="semibold" mb={4}>Agent Panel</Text>
      <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={4}>
        {cards.map((c) => (
          <AnimatedCard key={c.title} icon={c.icon} title={c.title} desc={c.desc} accent={c.accent} tag="Agent" />
        ))}
      </SimpleGrid>
    </Box>
  );
}

function AnimatedCard({ icon, title, desc, accent, tag }: { icon: React.ReactNode; title: string; desc: string; accent: string; tag: string }) {
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
          <Box w={10} h={10} rounded="lg" display="flex" alignItems="center" justifyContent="center" bg={`${accent}.50`} color={`${accent}.600`} borderWidth="1px" borderColor={`${accent}.100`} fontSize="xl">
            {icon}
          </Box>
          <Text fontWeight="semibold">{title}</Text>
        </Flex>
        <Badge colorScheme={accent} variant="subtle">{tag}</Badge>
      </Flex>
      <Text fontSize="sm" color="gray.600">{desc}</Text>
    </Box>
  );
}
