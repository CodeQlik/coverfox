"use client";
import { Box, SimpleGrid, Flex, Text, Badge, IconButton } from "@chakra-ui/react";
import { Table, Tooltip } from "@chakra-ui/react";

export default function AdminUsersPage() {
  const users = [
    { name: "Jane Doe", email: "jane@example.com", role: "user", kyc: "Pending" },
    { name: "John Admin", email: "admin@example.com", role: "admin", kyc: "Verified" },
    { name: "Sam Agent", email: "agent@example.com", role: "agent", kyc: "Pending" },
  ];

  const totals = {
    count: users.length,
    admins: users.filter(u => u.role === 'admin').length,
    verified: users.filter(u => u.kyc === 'Verified').length,
  };

  return (
    <Box>
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={4} mb={5}>
        <StatCard label="Total Users" value={totals.count} />
        <StatCard label="Admins" value={totals.admins} />
        <StatCard label="KYC Verified" value={totals.verified} />
      </SimpleGrid>

      <Box bg="white" borderWidth="1px" borderColor="gray.200" rounded="xl" shadow="sm" p={4}>
        <Text fontSize="lg" fontWeight="semibold" mb={3}>Users</Text>
        <Box overflowX="auto">
          <Table.Root size="sm">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>Name</Table.ColumnHeader>
                <Table.ColumnHeader>Email</Table.ColumnHeader>
                <Table.ColumnHeader>Role</Table.ColumnHeader>
                <Table.ColumnHeader>KYC</Table.ColumnHeader>
                <Table.ColumnHeader textAlign="end">Actions</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {users.map((u) => (
                <Table.Row key={u.email}>
                  <Table.Cell fontWeight="medium">{u.name}</Table.Cell>
                  <Table.Cell>{u.email}</Table.Cell>
                  <Table.Cell textTransform="uppercase">{u.role}</Table.Cell>
                  <Table.Cell>
                    <Badge colorScheme={u.kyc === 'Verified' ? 'green' : 'yellow'} variant="subtle">{u.kyc}</Badge>
                  </Table.Cell>
                  <Table.Cell textAlign="end">
                    <Tooltip.Root>
                      <Tooltip.Trigger asChild>
                        <IconButton aria-label="view" size="sm" variant="outline" mr={2}>
                          <span>👁️</span>
                        </IconButton>
                      </Tooltip.Trigger>
                      <Tooltip.Content>View</Tooltip.Content>
                    </Tooltip.Root>
                    <Tooltip.Root>
                      <Tooltip.Trigger asChild>
                        <IconButton aria-label="change role" size="sm" variant="outline">
                          <span>⚙️</span>
                        </IconButton>
                      </Tooltip.Trigger>
                      <Tooltip.Content>Change Role</Tooltip.Content>
                    </Tooltip.Root>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Box>
      </Box>
    </Box>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <Flex direction="column" bg="white" borderWidth="1px" borderColor="gray.200" rounded="xl" shadow="sm" p={4}>
      <Text fontSize="xs" color="gray.500">{label}</Text>
      <Text fontSize="2xl" fontWeight="semibold">{value}</Text>
    </Flex>
  );
}
