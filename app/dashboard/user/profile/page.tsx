"use client";
import { Box, Text, SimpleGrid, Field, Input, Button } from "@chakra-ui/react";

export default function UserProfilePage() {
  return (
    <Box display="grid" gap={6}>
      <Box bg="white" borderWidth="1px" borderColor="gray.200" rounded="xl" shadow="sm" p={6}>
        <Text fontSize="lg" fontWeight="semibold" mb={4}>Profile</Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} fontSize="sm">
          <Field.Root>
            <Field.Label>Full Name</Field.Label>
            <Input size="sm" defaultValue="Jane Doe" />
          </Field.Root>
          <Field.Root>
            <Field.Label>Email</Field.Label>
            <Input size="sm" defaultValue="jane@example.com" />
          </Field.Root>
          <Field.Root>
            <Field.Label>Mobile</Field.Label>
            <Input size="sm" defaultValue="9876543210" />
          </Field.Root>
          <Field.Root>
            <Field.Label>Gender</Field.Label>
            <Box as="select" borderWidth="1px" borderColor="gray.300" rounded="md" px={3} py={2} fontSize="sm">
              <option>Female</option>
              <option>Male</option>
              <option>Other</option>
            </Box>
          </Field.Root>
        </SimpleGrid>
        <Box mt={4}>
          <Button size="sm" colorPalette="orange">Save changes</Button>
        </Box>
      </Box>

      <Box bg="white" borderWidth="1px" borderColor="gray.200" rounded="xl" shadow="sm" p={6}>
        <Text fontSize="md" fontWeight="semibold" mb={3}>Communication Address</Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} fontSize="sm">
          <Input size="sm" placeholder="Address line 1" defaultValue="221B Baker Street" />
          <Input size="sm" placeholder="Address line 2" defaultValue="Near Park" />
          <Input size="sm" placeholder="City" defaultValue="Mumbai" />
          <Input size="sm" placeholder="State" defaultValue="Maharashtra" />
          <Input size="sm" placeholder="Pincode" defaultValue="400001" />
        </SimpleGrid>
        <Box mt={4}>
          <Button size="sm" variant="outline">Update address</Button>
        </Box>
      </Box>
    </Box>
  );
}
