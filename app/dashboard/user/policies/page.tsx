"use client";
import { useState } from "react";
import { Box, Text, Table, Button, Badge, DialogRoot, DialogContent, DialogHeader, DialogBody, DialogFooter, useDisclosure } from "@chakra-ui/react";

export default function UserPoliciesPage() {
  type Policy = { id: string; product: string; reg: string; status: string; expiry: string };
  const policies: Policy[] = [
    { id: "POL12345", product: "Bike Insurance", reg: "MH12AB1234", status: "Active", expiry: "2026-05-01" },
    { id: "POL67890", product: "Health Insurance", reg: "-", status: "Expired", expiry: "2024-11-12" },
  ];

  const { open, onOpen, onClose, setOpen } = useDisclosure();
  const [selected, setSelected] = useState<Policy | null>(null);

  const downloadBikePolicy = async (p: { id: string; reg: string; expiry: string }) => {
    const { jsPDF } = await import("jspdf");
    const doc = new jsPDF();
    let y = 18;
    doc.setFontSize(18);
    doc.text("Coverfox - Two Wheeler Policy", 14, y); y += 10;
    doc.setFontSize(12);
    doc.text(`Policy ID: ${p.id}`, 14, y); y += 8;
    doc.text(`Registration: ${p.reg}`, 14, y); y += 8;
    doc.text(`Status: Active`, 14, y); y += 8;
    doc.text(`Expiry: ${p.expiry}`, 14, y); y += 12;
    doc.text("Insured: Demo User", 14, y); y += 8;
    doc.text("Insurer: Coverfox General Insurance (Demo)", 14, y); y += 8;
    doc.text("Coverage: Comprehensive · PA Cover Included", 14, y); y += 12;
    doc.setFontSize(10);
    doc.text("Note: This is a demo policy PDF generated for testing.", 14, y);
    doc.save(`Bike-Policy-${p.reg || p.id}.pdf`);
  };
  return (
    <Box bg="white" borderWidth="1px" borderColor="gray.200" rounded="xl" shadow="sm" p={6}>
      <Text fontSize="lg" fontWeight="semibold" mb={4}>Your Policies</Text>
      <Box overflowX="auto">
        <Table.Root size="sm">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Policy ID</Table.ColumnHeader>
              <Table.ColumnHeader>Product</Table.ColumnHeader>
              <Table.ColumnHeader>Reg/Ref</Table.ColumnHeader>
              <Table.ColumnHeader>Status</Table.ColumnHeader>
              <Table.ColumnHeader>Expiry</Table.ColumnHeader>
              <Table.ColumnHeader>Actions</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {policies.map((p) => (
              <Table.Row key={p.id}>
                <Table.Cell fontWeight="medium">{p.id}</Table.Cell>
                <Table.Cell>{p.product}</Table.Cell>
                <Table.Cell>{p.reg}</Table.Cell>
                <Table.Cell>
                  <Badge colorScheme={p.status === 'Active' ? 'green' : 'gray'}>{p.status}</Badge>
                </Table.Cell>
                <Table.Cell>{p.expiry}</Table.Cell>
                <Table.Cell display="flex" gap={2}>
                  <Button size="xs" variant="outline" onClick={() => { setSelected(p); onOpen(); }}>View</Button>
                  {p.product === 'Bike Insurance' ? (
                    <Button size="xs" variant="solid" colorScheme="orange" onClick={() => downloadBikePolicy(p)}>
                      Download PDF
                    </Button>
                  ) : (
                    <Button size="xs" variant="outline" disabled title="Download available for Bike Insurance">
                      Download
                    </Button>
                  )}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Box>

      {/* View Policy Dialog */}
      <DialogRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
        <DialogContent>
          <DialogHeader>Policy Details</DialogHeader>
          <DialogBody>
            {selected ? (
              <Box fontSize="sm" lineHeight={1.8}>
                <Text><b>Policy ID:</b> {selected.id}</Text>
                <Text><b>Product:</b> {selected.product}</Text>
                <Text><b>Registration/Ref:</b> {selected.reg}</Text>
                <Text><b>Status:</b> {selected.status}</Text>
                <Text><b>Expiry:</b> {selected.expiry}</Text>
              </Box>
            ) : (
              <Text fontSize="sm">No policy selected.</Text>
            )}
          </DialogBody>
          <DialogFooter>
            <Button size="sm" onClick={onClose}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </DialogRoot>
    </Box>
  );
}
