"use client";
import { Box, Text, SimpleGrid, Flex, Badge } from "@chakra-ui/react";
import { FiFileText, FiCreditCard, FiMessageCircle, FiUser } from "react-icons/fi";

export default function UserDashboard() {
  const cards = [
    { icon: <FiFileText />, title: "Policies", desc: "View and manage your policies", accent: "green" },
    { icon: <FiCreditCard />, title: "Payments", desc: "Payments & receipts history", accent: "orange" },
    { icon: <FiMessageCircle />, title: "Support", desc: "Tickets & help center", accent: "blue" },
    { icon: <FiUser />, title: "Profile", desc: "Personal details and KYC", accent: "purple" },
  ];

  return (
    <Box>
      <Text fontSize="lg" fontWeight="semibold" mb={4}>User Panel</Text>
      <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={4}>
        {cards.map((c) => (
          <AnimatedCard key={c.title} icon={c.icon} title={c.title} desc={c.desc} accent={c.accent} tag="User" />
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
