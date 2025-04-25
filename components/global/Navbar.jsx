"use client";

import { useState } from "react";
import { FiMoon, FiDownload, FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "Home",   href: "#home"    },
  { label: "About",  href: "#about"   },
  { label: "Tracks", href: "#tracks"  },
  { label: "Timeline", href: "#timeline" },
  { label: "FAQ",    href: "#faqs"    },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* logo + theme toggle */}
        <div className="text-black flex items-center gap-4">
          <button
            aria-label="Toggle theme"
            className="p-2 rounded-full  hover:bg-yellow-200 transition-colors duration-200"
          >
            <FiMoon size={20} />
          </button>
          <h1 className="text-black text-xl font-bold tracking-tight">
  am<span className="text-black uppercase">BIT</span>ion
          </h1> 
 </div>

        {/* desktop links + brochure button */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase text-gray-600 hover:text-black transition"
            >
              {link.label}
            </a>
          ))}

          <a
            href="/brochure.pdf"
            download
            className="ml-4 inline-flex items-center text-sm font-medium uppercase bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-full transition"
          >
            <FiDownload size={16} className="mr-2" />
            Brochure
          </a>
        </div>

        {/* mobile menu toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-gray-600 py-2 uppercase font-medium hover:text-black transition"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/brochure.pdf"
            download
            className="block mt-2 text-gray-600 py-2 uppercase font-medium hover:text-black transition"
          >
            Brochure
          </a>
        </div>
      )}
    </nav>
  );
}
