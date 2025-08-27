"use client";
import { useEffect, useState } from "react";
import { ChakraProvider, defaultSystem, Box, Badge, Flex, Text } from "@chakra-ui/react";
import MUIProvider from "./components/MUIProvider";
import NotificationBell from "../components/NotificationBell";
import LogoutButton from "../components/LogoutButton";

type User = { name?: string; email?: string };

export default function DashboardShell({
  user,
  role,
  children,
}: {
  user: User;
  role: string;
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div suppressHydrationWarning>
      <MUIProvider>
        <ChakraProvider value={defaultSystem}>
        <Box px={{ base: 4, md: 6, lg: 8 }} py={6} bg="gray.50" minH="80vh">
          <Box maxW="100%">
            <Flex bg="white" borderWidth="1px" borderColor="gray.200" rounded="xl" shadow="sm" p={{ base: 4, md: 5 }} mb={6} align="center" justify="space-between">
              <Flex align="center" gap={3}>
                <Box w="36px" h="36px" rounded="full" bg="gray.100" borderWidth="1px" borderColor="gray.200" display="flex" alignItems="center" justifyContent="center" fontSize="sm" fontWeight="semibold" color="gray.700">
                  {(user.name || "G").charAt(0).toUpperCase()}
                </Box>
                <Box>
                  <Text fontSize="xs" color="gray.600">Signed in as</Text>
                  <Text fontSize="sm" fontWeight="medium">
                    {user.name || "Guest"}{" "}
                    <Text as="span" color="gray.500">({user.email || "-"})</Text>
                  </Text>
                </Box>
              </Flex>

              <Flex align="center" gap={3}>
                <Badge px={2.5} py={1} rounded="full" colorScheme="gray" fontSize="xs">Role: {role.toUpperCase()}</Badge>
                <NotificationBell role={role} />
                <LogoutButton />
              </Flex>
            </Flex>

            <Box as="main">{children}</Box>
          </Box>
        </Box>
        </ChakraProvider>
      </MUIProvider>
    </div>
  );
}
