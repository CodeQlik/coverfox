import DashboardSidebar, { SidebarItem } from "../../components/DashboardSidebar";

export default function SEOLayout({ children }: { children: React.ReactNode }) {
  const items: SidebarItem[] = [
    { label: "Overview", href: "/dashboard/seo", icon: "🔎" },
    { label: "Sitemap", href: "/dashboard/seo/sitemap", icon: "🗺️" },
    { label: "Robots", href: "/dashboard/seo/robots", icon: "🤖" },
    { label: "Metadata", href: "/dashboard/seo/metadata", icon: "🏷️" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[16rem_1fr] gap-6">
      <DashboardSidebar items={items} accent="blue" />
      <main className="min-h-[60vh]">{children}</main>
    </div>
  );
}
