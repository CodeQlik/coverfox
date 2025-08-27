"use client";
import { Box, Text, Button, Table } from "@chakra-ui/react";

export default function SEOMetadataPage() {
  const pages = [
    { path: "/", title: "Coverfox - Insurance made easy", desc: "Compare and buy insurance" },
    { path: "/bike-insurance", title: "Bike Insurance - Coverfox", desc: "Instant quotes for 2-wheeler" },
  ];
  return (
    <Box display="grid" gap={6}>
      <Box bg="white" borderWidth="1px" borderColor="gray.200" rounded="xl" shadow="sm" p={6}>
        <Text fontSize="lg" fontWeight="semibold" mb={4}>Metadata</Text>
        <Box overflowX="auto">
          <Table.Root size="sm">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>Path</Table.ColumnHeader>
                <Table.ColumnHeader>Title</Table.ColumnHeader>
                <Table.ColumnHeader>Description</Table.ColumnHeader>
                <Table.ColumnHeader>Actions</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {pages.map((p) => (
                <Table.Row key={p.path}>
                  <Table.Cell fontWeight="medium">{p.path}</Table.Cell>
                  <Table.Cell>{p.title}</Table.Cell>
                  <Table.Cell>{p.desc}</Table.Cell>
                  <Table.Cell>
                    <Button size="xs" variant="outline">Edit</Button>
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
