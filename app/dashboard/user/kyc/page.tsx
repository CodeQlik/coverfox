"use client";
import { Box, Text, SimpleGrid, Field, Input, Button } from "@chakra-ui/react";

export default function UserKycPage() {
  return (
    <Box display="grid" gap={6}>
      <Box bg="white" borderWidth="1px" borderColor="gray.200" rounded="xl" shadow="sm" p={6}>
        <Text fontSize="lg" fontWeight="semibold" mb={2}>KYC Verification</Text>
        <Text fontSize="sm" color="gray.600" mb={4}>Submit your KYC details to speed up policy issuance and claims.</Text>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} fontSize="sm">
          <Field.Root>
            <Field.Label>PAN</Field.Label>
            <Input placeholder="ABCDE1234F" size="sm" />
          </Field.Root>
          <Field.Root>
            <Field.Label>Aadhaar (last 4 digits)</Field.Label>
            <Input placeholder="1234" size="sm" />
          </Field.Root>
          <Field.Root>
            <Field.Label>Date of Birth</Field.Label>
            <Input type="date" size="sm" />
          </Field.Root>
          <Field.Root>
            <Field.Label>Upload ID Proof</Field.Label>
            <Input type="file" size="sm" />
          </Field.Root>
        </SimpleGrid>

        <Box mt={4} display="flex" alignItems="center" gap={3}>
          <Button size="sm" colorPalette="orange">Submit KYC</Button>
          <Text fontSize="xs" color="gray.500">Status: Pending Verification</Text>
        </Box>
      </Box>
    </Box>
  );
}
