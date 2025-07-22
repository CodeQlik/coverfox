"use client";
import React, { useState, useEffect } from "react";

const clients = [
  "Acme Corp",
  "Globex Inc.",
  "Umbrella Co.",
  "Wayne Enterprises",
  "Stark Industries",
];

const ClientSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % clients.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="clients" className="w-full py-12 bg-gray-50 dark:bg-neutral-900 text-center">
      <h2 className="text-2xl font-bold mb-6 text-foreground">Our Clients</h2>
      <div className="flex justify-center items-center h-16">
        <span className="text-xl font-semibold text-blue-600 dark:text-blue-400 transition-all duration-500">
          {clients[index]}
        </span>
      </div>
    </section>
  );
};

export default ClientSlider; 