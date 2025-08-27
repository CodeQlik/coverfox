"use client";
import { Box, SimpleGrid, Flex, Text, Badge, IconButton } from "@chakra-ui/react";
import { Table, Tooltip } from "@chakra-ui/react";

export default function AdminPoliciesPage() {
  const rows = [
    { id: "POL12345", user: "Jane Doe", product: "Bike", status: "Active", premium: 2450 },
    { id: "POL67890", user: "Mark Ray", product: "Health", status: "Expired", premium: 12450 },
  ];
  const totalPremium = rows.reduce((s, r) => s + r.premium, 0);

  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={4}>
        <StatCard label="Total Policies" value={rows.length} />
        <StatCard label="Active" value={rows.filter(r=>r.status==='Active').length} />
        <StatCard label="Premium (₹)" value={totalPremium} isCurrency />
      </SimpleGrid>

      <Box bg="white" borderWidth="1px" borderColor="gray.200" rounded="xl" shadow="sm" p={4}>
        <Text fontSize="lg" fontWeight="semibold" mb={3}>Policies</Text>
        <Box overflowX="auto">
          <Table.Root size="sm">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>Policy ID</Table.ColumnHeader>
                <Table.ColumnHeader>User</Table.ColumnHeader>
                <Table.ColumnHeader>Product</Table.ColumnHeader>
                <Table.ColumnHeader>Status</Table.ColumnHeader>
                <Table.ColumnHeader>Premium</Table.ColumnHeader>
                <Table.ColumnHeader textAlign="end">Actions</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {rows.map((r) => (
                <Table.Row key={r.id}>
                  <Table.Cell fontWeight="medium">{r.id}</Table.Cell>
                  <Table.Cell>{r.user}</Table.Cell>
                  <Table.Cell>{r.product}</Table.Cell>
                  <Table.Cell>
                    <Badge colorScheme={r.status === 'Active' ? 'green' : 'gray'} variant="subtle">{r.status}</Badge>
                  </Table.Cell>
                  <Table.Cell>₹ {r.premium.toLocaleString()}</Table.Cell>
                  <Table.Cell textAlign="end">
                    <Tooltip.Root>
                      <Tooltip.Trigger asChild>
                        <IconButton aria-label="view" size="sm" variant="outline" mr={2}><span>👁️</span></IconButton>
                      </Tooltip.Trigger>
                      <Tooltip.Content>View</Tooltip.Content>
                    </Tooltip.Root>
                    <Tooltip.Root>
                      <Tooltip.Trigger asChild>
                        <IconButton aria-label="change status" size="sm" variant="outline"><span>✏️</span></IconButton>
                      </Tooltip.Trigger>
                      <Tooltip.Content>Change Status</Tooltip.Content>
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

function StatCard({ label, value, isCurrency = false }: { label: string; value: number; isCurrency?: boolean }) {
  return (
    <Flex direction="column" bg="white" borderWidth="1px" borderColor="gray.200" rounded="xl" shadow="sm" p={4}>
      <Text fontSize="xs" color="gray.500">{label}</Text>
      <Text fontSize="2xl" fontWeight="semibold">{isCurrency ? value.toLocaleString() : value}</Text>
    </Flex>
  );
}
