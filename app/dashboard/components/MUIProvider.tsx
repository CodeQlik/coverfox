"use client";
import { StyledEngineProvider } from "@mui/material/styles";

export default function MUIProvider({ children }: { children: React.ReactNode }) {
  // ensure MUI styles are injected before other emotion styles for predictability
  return <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>;
}
