"use client";
import { useState, useRef, useEffect, useMemo } from "react";
import { FiBell, FiCheckCircle, FiInfo } from "react-icons/fi";

export default function NotificationBell({ role = "user" }: { role?: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const items = useMemo(() => {
    switch (role) {
      case "admin":
        return [
          { id: 1, title: "New user registered", time: "5m ago", icon: <FiInfo className="text-blue-600" /> },
          { id: 2, title: "2 KYCs pending approval", time: "12m ago", icon: <FiCheckCircle className="text-violet-600" /> },
        ];
      case "agent":
        return [
          { id: 1, title: "3 new leads assigned", time: "just now", icon: <FiInfo className="text-orange-600" /> },
          { id: 2, title: "Commission statement ready", time: "1h ago", icon: <FiCheckCircle className="text-emerald-600" /> },
        ];
      case "seo":
        return [
          { id: 1, title: "Sitemap successfully rebuilt", time: "10m ago", icon: <FiCheckCircle className="text-emerald-600" /> },
          { id: 2, title: "Robots check warnings", time: "2h ago", icon: <FiInfo className="text-orange-600" /> },
        ];
      default:
        return [
          { id: 1, title: "Payment received", time: "2m ago", icon: <FiCheckCircle className="text-emerald-600" /> },
          { id: 2, title: "Policy expiring soon", time: "1d ago", icon: <FiInfo className="text-orange-600" /> },
        ];
    }
  }, [role]);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="relative h-9 w-9 inline-flex items-center justify-center rounded-full border bg-white hover:bg-gray-50"
        aria-label="Notifications"
      >
        <FiBell className="h-4 w-4" />
        <span className="absolute -top-0.5 -right-0.5 inline-flex items-center justify-center h-4 w-4 text-[10px] rounded-full bg-red-500 text-white">
          {items.length}
        </span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-md p-2 z-50">
          <div className="px-2 py-1.5 text-xs font-semibold text-gray-600">Notifications</div>
          <ul className="max-h-64 overflow-auto divide-y">
            {items.map((n) => (
              <li key={n.id} className="flex gap-2 items-start p-2 text-sm">
                <span className="mt-0.5">{n.icon}</span>
                <div>
                  <div className="font-medium text-gray-800">{n.title}</div>
                  <div className="text-xs text-gray-500">{n.time}</div>
                </div>
              </li>
            ))}
          </ul>
          <div className="px-2 pt-2">
            <button className="w-full border rounded-md px-3 py-1.5 text-sm">Mark all as read</button>
          </div>
        </div>
      )}
    </div>
  );
}
