"use client";
import { Box, Flex, Text, SimpleGrid, Switch, Input, Button, Field } from "@chakra-ui/react";

export default function AdminSettingsPage() {
  return (
    <Box display="flex" flexDirection="column" gap={4}>
      <Text fontSize="lg" fontWeight="semibold">Settings</Text>

      <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
        <Card title="Profile">
          <Flex direction="column" gap={3}>
            <Field.Root>
              <Field.Label>Name</Field.Label>
              <Input placeholder="Admin name" size="sm" />
            </Field.Root>
            <Field.Root>
              <Field.Label>Email</Field.Label>
              <Input placeholder="admin@example.com" size="sm" type="email" />
            </Field.Root>
            <Flex justify="flex-end">
              <Button size="sm" colorPalette="blue">Save Profile</Button>
            </Flex>
          </Flex>
        </Card>

        <Card title="Notifications">
          <Flex direction="column" gap={3}>
            <Flex align="center" justify="space-between">
              <Text mb={0}>Email alerts</Text>
              <Switch.Root defaultChecked size="sm">
                <Switch.HiddenInput />
                <Switch.Control />
              </Switch.Root>
            </Flex>
            <Flex align="center" justify="space-between">
              <Text mb={0}>Policy updates</Text>
              <Switch.Root size="sm">
                <Switch.HiddenInput />
                <Switch.Control />
              </Switch.Root>
            </Flex>
            <Flex align="center" justify="space-between">
              <Text mb={0}>Weekly digest</Text>
              <Switch.Root size="sm">
                <Switch.HiddenInput />
                <Switch.Control />
              </Switch.Root>
            </Flex>
          </Flex>
        </Card>

        <Card title="Security">
          <Flex direction="column" gap={3}>
            <Field.Root>
              <Field.Label>New password</Field.Label>
              <Input type="password" placeholder="••••••••" size="sm" />
            </Field.Root>
            <Field.Root>
              <Field.Label>Confirm password</Field.Label>
              <Input type="password" placeholder="••••••••" size="sm" />
            </Field.Root>
            <Flex justify="flex-end">
              <Button size="sm" colorPalette="blue" variant="subtle">Update Password</Button>
            </Flex>
          </Flex>
        </Card>

        <Card title="Appearance">
          <Flex direction="column" gap={3}>
            <Flex align="center" justify="space-between">
              <Text mb={0}>Compact sidebar</Text>
              <Switch.Root size="sm">
                <Switch.HiddenInput />
                <Switch.Control />
              </Switch.Root>
            </Flex>
            <Flex align="center" justify="space-between">
              <Text mb={0}>High contrast</Text>
              <Switch.Root size="sm">
                <Switch.HiddenInput />
                <Switch.Control />
              </Switch.Root>
            </Flex>
          </Flex>
        </Card>
      </SimpleGrid>
    </Box>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box bg="white" borderWidth="1px" borderColor="gray.200" rounded="xl" shadow="sm" p={4}>
      <Text fontSize="sm" fontWeight="semibold" mb={3}>{title}</Text>
      {children}
    </Box>
  );
}
