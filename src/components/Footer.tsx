import React from "react";

const Footer = () => (
  <footer className="w-full bg-gray-100 dark:bg-neutral-900 text-center py-4 mt-8 border-t border-gray-200 dark:border-neutral-800">
    <div className="text-sm text-foreground">© {new Date().getFullYear()} CoverFox. All rights reserved.</div>
    <div className="mt-2 space-x-4">
      <a href="#privacy" className="text-foreground hover:underline">Privacy Policy</a>
      <a href="#terms" className="text-foreground hover:underline">Terms of Service</a>
    </div>
  </footer>
);

export default Footer; 