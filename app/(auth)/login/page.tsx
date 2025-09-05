"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ROLES = ["user", "admin"] as const;

type Role = typeof ROLES[number];

export default function LoginPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<Role>("user");
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, role }),
    });
    setLoading(false);
    if (res.ok) router.push("/dashboard");
  };

  return (
    <main className="px-4 md:px-6 lg:px-8 py-10">
      <section className="mx-auto max-w-md bg-white border border-gray-200 rounded-lg shadow-sm p-6">
        <h1 className="text-xl font-semibold mb-4">Dummy Login</h1>
        <p className="text-sm text-gray-600 mb-4">Choose a role to preview the corresponding dashboard.</p>
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input className="w-full border rounded-md px-3 py-2" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Jane Doe" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="w-full border rounded-md px-3 py-2" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="jane@email.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <div className="mt-2 flex flex-wrap gap-3 text-sm">
              {ROLES.map(r => (
                <label key={r} className={`px-3 py-2 border rounded-md cursor-pointer ${role===r?"border-orange-500 text-orange-600":""}`}>
                  <input type="radio" name="role" value={r} className="mr-2" checked={role===r} onChange={()=>setRole(r)} />
                  {r.toUpperCase()}
                </label>
              ))}
            </div>
          </div>
          <button disabled={loading} className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-semibold rounded-md px-6 py-3">
            {loading?"Logging in...":"Login"}
          </button>
        </form>
      </section>
    </main>
  );
}
