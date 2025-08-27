export default function SEORobotsPage() {
  const rules = [
    { userAgent: "*", allow: "/", disallow: "/admin" },
  ];
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Robots.txt</h2>
      <pre className="bg-gray-50 p-4 rounded border text-sm overflow-auto">
{`User-agent: *
Allow: /
Disallow: /admin
Sitemap: https://www.example.com/sitemap.xml`}
      </pre>
      <div className="mt-4 flex gap-2">
        <button className="border rounded px-3 py-2 text-sm">Validate</button>
        <button className="border rounded px-3 py-2 text-sm">Publish</button>
      </div>
    </div>
  );
}
