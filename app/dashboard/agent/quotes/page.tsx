"use client";
import { useState } from "react";
import { Box, Text, Input, Button, Stack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function AgentCreateQuotePage() {
  const router = useRouter();
  const [mode, setMode] = useState<"reg" | "noReg">("reg");
  const [reg, setReg] = useState("");
  const [bikeModel, setBikeModel] = useState("");
  const [rto, setRto] = useState("");
  const [expiry, setExpiry] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === "reg") {
      if (!reg.trim()) return;
      const params = new URLSearchParams({ reg, expiry });
      router.push(`/bike-insurance/quotes?${params.toString()}`);
      return;
    }
    if (!bikeModel.trim() || !rto.trim()) return;
    const params = new URLSearchParams({ bikeModel, rto, expiry });
    router.push(`/bike-insurance/quotes?${params.toString()}`);
  };

  return (
    <Box bg="white" borderWidth="1px" borderColor="gray.200" rounded="xl" shadow="sm" p={6}>
      <Text fontSize="lg" fontWeight="semibold" mb={4}>Create Quote</Text>
      <form onSubmit={submit}>
        <Stack gap={3}>
          <Box>
            <Text fontSize="sm" mb={1}>Mode</Text>
            <select
              value={mode}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setMode(e.target.value as any)}
              style={{ width: "100%", padding: "8px 10px", borderRadius: 8, border: "1px solid #E2E8F0", background: "white" }}
            >
              <option value="reg">Have Registration Number</option>
              <option value="noReg">Without Registration</option>
            </select>
          </Box>
          {mode === "reg" ? (
            <Input placeholder="Registration Number (e.g., MH12AB1234)" value={reg} onChange={(e) => setReg(e.target.value)} />
          ) : (
            <>
              <Input placeholder="Bike Model (e.g., Splendor Plus)" value={bikeModel} onChange={(e) => setBikeModel(e.target.value)} />
              <Input placeholder="RTO (e.g., Mumbai West)" value={rto} onChange={(e) => setRto(e.target.value)} />
            </>
          )}
          <Input type="date" placeholder="Policy Expiry (optional)" value={expiry} onChange={(e) => setExpiry(e.target.value)} />
          <Button type="submit" colorScheme="orange">Get Quotes</Button>
        </Stack>
      </form>
    </Box>
  );
}
