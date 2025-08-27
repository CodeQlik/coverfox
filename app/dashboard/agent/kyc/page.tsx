"use client";
import { useState } from "react";
import { Box, Text, Badge, Button, Stack, Input } from "@chakra-ui/react";

export default function AgentKycPage() {
  type KycStatus = "not_started" | "in_review" | "approved";
  type User = { id: string; name: string; mobile: string; email: string };
  const users: User[] = [
    { id: "U001", name: "Amit Sharma", mobile: "+91 90000 00001", email: "amit@example.com" },
    { id: "U002", name: "Neha Gupta", mobile: "+91 90000 00002", email: "neha@example.com" },
    { id: "U003", name: "Ravi Kumar", mobile: "+91 90000 00003", email: "ravi@example.com" },
  ];

  const [selectedId, setSelectedId] = useState<string>(users[0]?.id || "");
  const [statusMap, setStatusMap] = useState<Record<string, KycStatus>>({});
  const [fileMap, setFileMap] = useState<Record<string, File[]>>({});

  const selected = users.find((u) => u.id === selectedId) || users[0];
  const status: KycStatus = statusMap[selected.id] || "not_started";
  const files: File[] = fileMap[selected.id] || [];

  const onUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = Array.from(e.target.files || []);
    setFileMap((m) => ({ ...m, [selected.id]: f }));
    if (f.length) setStatusMap((m) => ({ ...m, [selected.id]: "in_review" }));
  };

  const submitForReview = () => {
    if (files.length === 0) return;
    setStatusMap((m) => ({ ...m, [selected.id]: "in_review" }));
  };

  const approveDemo = () => setStatusMap((m) => ({ ...m, [selected.id]: "approved" }));

  return (
    <Box bg="white" borderWidth="1px" borderColor="gray.200" rounded="xl" shadow="sm" p={6}>
      <Text fontSize="lg" fontWeight="semibold" mb={4}>KYC Verification</Text>

      <Box display="grid" gridTemplateColumns={{ base: "1fr", md: "280px 1fr" }} gap={4}>
        {/* Left: User list */}
        <Box borderWidth="1px" borderColor="gray.200" rounded="lg" p={3}>
          <Text fontWeight="medium" mb={2}>Users</Text>
          <Stack gap={2}>
            {users.map((u) => {
              const st = statusMap[u.id] || "not_started";
              return (
                <Button
                  key={u.id}
                  justifyContent="space-between"
                  variant={selectedId === u.id ? "solid" : "outline"}
                  colorScheme="orange"
                  onClick={() => setSelectedId(u.id)}
                  size="sm"
                >
                  <Box textAlign="left">
                    <Text fontSize="sm" fontWeight="semibold">{u.name}</Text>
                    <Text fontSize="xs" color="gray.600">{u.mobile}</Text>
                  </Box>
                  {st === "approved" ? (
                    <Badge colorScheme="green">Approved</Badge>
                  ) : st === "in_review" ? (
                    <Badge colorScheme="orange">In Review</Badge>
                  ) : (
                    <Badge>New</Badge>
                  )}
                </Button>
              );
            })}
          </Stack>
        </Box>

        {/* Right: KYC detail for selected */}
        <Box borderWidth="1px" borderColor="gray.200" rounded="lg" p={4}>
          <Text fontWeight="medium" mb={2}>Selected User</Text>
          <Box mb={3} fontSize="sm" color="gray.700">
            <Text><b>Name:</b> {selected.name} ({selected.id})</Text>
            <Text><b>Mobile:</b> {selected.mobile}</Text>
            <Text><b>Email:</b> {selected.email}</Text>
            <Text><b>Status:</b> {status === "approved" ? <Badge colorScheme="green">Approved</Badge> : status === "in_review" ? <Badge colorScheme="orange">In Review</Badge> : <Badge>Not Started</Badge>}</Text>
          </Box>

          {(() => {
            const pct = status === "approved" ? 100 : status === "in_review" ? 60 : 10;
            const color = status === "approved" ? "green.500" : "orange.500";
            return (
              <Box h="10px" bg="gray.100" rounded="full" overflow="hidden" borderWidth="1px" borderColor="gray.200" mb={4}>
                <Box h="100%" width={`${pct}%`} bg={color} transition="width 200ms ease" />
              </Box>
            );
          })()}

          <Stack gap={3}>
            <Text fontWeight="medium">Upload Documents</Text>
            <Input type="file" multiple onChange={onUpload} />
            {files.length > 0 && (
              <Box fontSize="sm" color="gray.600">
                {files.length} file(s) selected
              </Box>
            )}
            <Stack direction="row" gap={3}>
              <Button colorScheme="orange" onClick={submitForReview} disabled={files.length === 0}>Submit</Button>
              <Button variant="outline" onClick={approveDemo}>Approve (Demo)</Button>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
