import { cookies } from "next/headers";
import DashboardShell from "./DashboardShell";
import Header from "../components/Header";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const jar = await cookies();
  const role = jar.get("cf_role")?.value || "user";
  const userRaw = jar.get("cf_user")?.value || "{}";
  let user: { name?: string; email?: string } = {};
  try {
    user = JSON.parse(userRaw);
  } catch {}

  return (
    <>
      <Header />
      <DashboardShell user={user} role={role}>{children}</DashboardShell>
    </>
  );
}
