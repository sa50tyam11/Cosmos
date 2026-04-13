"use client";

import * as React from "react";
import Link from "next/link";
import { Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Work", href: "#work" },
  { name: "Services", href: "#services" },
  { name: "About us", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <header className="fixed top-6 left-0 right-0 z-50 pointer-events-none">
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between pointer-events-auto">
          {/* Left Pill (Logo) */}
          <Link 
            href="/" 
            className="h-12 px-6 bg-[#1a1a1a]/80 backdrop-blur-md rounded-full flex items-center justify-center border border-white/5 hover:bg-[#222]/80 transition-colors shadow-2xl"
          >
            <span className="text-sm font-medium tracking-wide">COSMOS</span>
          </Link>

          {/* Right Pill (Menu Toggle) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="h-12 px-5 bg-[#1a1a1a]/80 backdrop-blur-md rounded-full flex items-center gap-3 border border-white/5 hover:bg-[#222]/80 transition-colors text-sm font-medium shadow-2xl"
          >
            Menu
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Popover Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-20 right-4 lg:right-8 z-50 w-64 bg-[#111111]/90 backdrop-blur-xl border border-white/5 rounded-2xl p-2 shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between px-4 py-3 mb-2 border-b border-white/5">
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Navigation</span>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors flex items-center justify-between group"
                >
                  {link.name}
                  <span className="text-xs text-gray-600 group-hover:text-gray-400 transition-colors">—</span>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
