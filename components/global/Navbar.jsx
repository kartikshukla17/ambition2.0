"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { FiMoon, FiSun, FiDownload, FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Tracks", href: "#tracks" },
  { label: "Timeline", href: "#timeline" },
  { label: "Prizes", href: "#prizes" },
  { label: "FAQ", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeToggle = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  if (!mounted) {
    return null;
  }

  return (
    <nav className="bg-gradient-to-r from-white via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-pink-900 shadow-2xl sticky top-0 z-50 border-b-4 border-black">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-10 w-8 h-8 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-0 right-20 w-6 h-6 bg-gradient-to-br from-green-300 to-blue-400 rounded-full opacity-30"></div>
        </div>
        
        <div className="text-black dark:text-white flex items-center gap-4 relative z-10">
          <button
            aria-label="Toggle theme"
            onClick={handleThemeToggle}
            className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg border-2 border-black transform hover:scale-110"
          >
            {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>
          <h1 className="text-2xl font-black tracking-tight">
            <span className="text-black dark:text-white">am</span><span className="uppercase text-green-600 dark:text-green-400">BIT</span><span className="text-black dark:text-white">ion</span>
          </h1>
        </div>

        {/* --- DESKTOP LINKS FIX --- */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6 relative z-10">
          {navLinks.map((link, index) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="relative text-xs xl:text-sm font-bold uppercase text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 px-2 xl:px-3 py-2 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 border-2 border-transparent hover:border-purple-300 dark:hover:border-purple-600"
            >
              {link.label}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 hover:w-full"></div>
            </Link>
          ))}
          
           
        </div>

        <button
          className="lg:hidden p-4 text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-2 border-black shadow-lg transform hover:scale-110 transition-all duration-300 relative z-10 min-w-[48px] min-h-[48px] flex items-center justify-center"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* --- MOBILE MENU FIX --- */}
      {open && (
        <div className="lg:hidden px-4 pb-6 space-y-2 bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-purple-900 border-t-2 border-purple-300 dark:border-purple-600 max-h-screen overflow-y-auto">
          {navLinks.map((link, index) => (
            <Link 
              key={link.href} 
              href={link.href}
              className="block text-gray-700 dark:text-gray-300 py-4 px-4 uppercase font-bold hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 rounded-lg hover:bg-white/70 dark:hover:bg-gray-800/70 border-2 border-transparent hover:border-purple-300 dark:hover:border-purple-600 min-h-[48px] flex items-center"
              onClick={() => setOpen(false)}
            >
              <span className="flex items-center gap-3 w-full">
                <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex-shrink-0"></span>
                <span className="text-base">{link.label}</span>
              </span>
            </Link>
          ))}
          
            
        </div>
      )}
    </nav>


  );
}