"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Clients", href: "/clients" },
    { name: "Social", href: "/social" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "top-3 sm:top-4 max-w-6xl mx-4 sm:mx-auto rounded-full bg-white/95 backdrop-blur-md shadow-md border border-slate-200/90 py-2.5 sm:py-3 px-5 sm:px-8"
          : mobileMenuOpen
          ? "top-0 bg-white shadow-sm py-3.5 px-5 sm:px-8 border-b border-slate-200"
          : "top-0 bg-transparent py-5 sm:py-6 px-5 sm:px-8 border-b border-transparent"
      }`}
    >
      <div className={`${isScrolled ? "w-full" : "max-w-7xl mx-auto"} flex items-center justify-between`}>
        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
          <Logo variant="dark" size="lg" />
        </Link>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-7 lg:space-x-9">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm transition-colors duration-150 relative py-1 ${
                  isActive
                    ? "text-[#111827] font-semibold"
                    : "text-[#4B5563] hover:text-[#111827] font-medium"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F59E0B] rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Button (Desktop) */}
        <div className="hidden sm:flex items-center">
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.08em] text-slate-950 bg-brand-yellow hover:bg-brand-yellow-hover rounded-full transition-all duration-200 shadow-sm"
            >
              Get a Quote
            </Link>
          </motion.div>
        </div>

        {/* Mobile Quick Actions */}
        <div className="flex md:hidden items-center space-x-2">
          <Link
            href="/contact"
            className="inline-flex items-center px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-slate-950 bg-brand-yellow rounded-full shadow-sm"
          >
            Quote
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#4B5563] hover:text-[#111827] hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden bg-white text-[#111827] border border-slate-200 p-5 shadow-lg mt-2 rounded-2xl"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-sm py-2.5 px-3 rounded-lg transition-colors flex items-center justify-between ${
                      isActive
                        ? "text-[#111827] font-semibold bg-slate-100"
                        : "text-[#4B5563] hover:text-[#111827] hover:bg-slate-50 font-medium"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />}
                  </Link>
                );
              })}
              <div className="pt-3 flex flex-col space-y-2 border-t border-slate-100 mt-2">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 text-xs font-semibold uppercase tracking-[0.08em] text-slate-950 bg-brand-yellow active:bg-brand-yellow-hover rounded-xl shadow-sm"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
