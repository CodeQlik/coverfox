"use client";

export default function LogoutButton() {
  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/";
  };
  return (
    <button onClick={logout} className="border rounded-md px-3 py-2 text-sm">Logout</button>
  );
}
