"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMoon, FiSun, FiDownload, FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Tracks", href: "#tracks" },
  { label: "Timeline", href: "#timeline" },
  { label: "FAQ", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const handleThemeToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-black dark:text-white flex items-center gap-4">
          <button
            aria-label="Toggle theme"
            onClick={handleThemeToggle}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>
          <h1 className="text-xl font-bold tracking-tight">
            am<span className="uppercase">BIT</span>ion
          </h1>
        </div>

        {/* --- DESKTOP LINKS FIX --- */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              // The className is now directly on the Link component
              className="text-sm font-medium uppercase text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
            >
              {link.label}
            </Link>
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

        <button
          className="md:hidden p-2 text-black dark:text-white"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* --- MOBILE MENU FIX --- */}
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-2">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              // The className is now directly on the Link component
              className="block text-gray-600 dark:text-gray-300 py-2 uppercase font-medium hover:text-black dark:hover:text-white transition"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/brochure.pdf"
            download
            className="block mt-2 text-gray-600 dark:text-gray-300 py-2 uppercase font-medium hover:text-black dark:hover:text-white transition"
          >
            Brochure
          </a>
        </div>
      )}
    </nav>
  );
}