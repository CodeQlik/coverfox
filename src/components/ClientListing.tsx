import React from "react";

const clientList = [
  { name: "Acme Corp" },
  { name: "Globex Inc." },
  { name: "Umbrella Co." },
  { name: "Wayne Enterprises" },
  { name: "Stark Industries" },
];

const ClientListing = () => (
  <section className="w-full py-12 px-8 bg-white dark:bg-neutral-950 text-center">
    <h2 className="text-2xl font-bold mb-6 text-foreground">Trusted by Leading Companies</h2>
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 max-w-4xl mx-auto">
      {clientList.map((client) => (
        <div key={client.name} className="bg-gray-100 dark:bg-neutral-900 rounded-lg p-4 shadow text-foreground font-semibold">
          {client.name}
        </div>
      ))}
    </div>
  </section>
);

export default ClientListing; 