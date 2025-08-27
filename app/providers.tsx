"use client";
export default function Providers({ children }: { children: React.ReactNode }) {
  // Chakra UI not installed yet. This is a no-op wrapper.
  // Once approved and installed, we'll import ChakraProvider and wrap here.
  return <>{children}</>;
}
