//abhinav

"use client";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Tracks", href: "#tracks" },
    { label: "Timeline", href: "#timeline" },
    { label: "FAQs", href: "#faqs" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">ambition 🚀</h1>
        <div className="hidden md:flex gap-6 text-sm">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-black text-gray-600 font-medium">
              {link.label}
            </a>
          ))}
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="block py-2 text-gray-600">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// TODO: Add smooth scroll
// TODO: Replace ☰ with an icon component if preferred
