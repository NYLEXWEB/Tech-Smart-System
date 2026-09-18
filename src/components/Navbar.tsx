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

  // Close mobile menu on route change
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Brands", href: "/brands" },
    { name: "Clients", href: "/clients" },
    { name: "Social", href: "/social" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "top-2.5 sm:top-4 max-w-6xl mx-3 sm:mx-auto rounded-2xl sm:rounded-full bg-white/95 backdrop-blur-md shadow-md border border-slate-200/90 py-1.5 sm:py-2 px-3.5 sm:px-8"
            : mobileMenuOpen
            ? "top-0 bg-white shadow-md py-2.5 px-4 sm:px-8 border-b border-slate-200"
            : "top-0 bg-transparent py-2.5 sm:py-4 px-4 sm:px-8 border-transparent"
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
              className="inline-flex items-center px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-slate-950 bg-brand-yellow hover:bg-brand-yellow-hover rounded-full shadow-sm transition-all"
            >
              Quote
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="md:hidden bg-white text-[#111827] border border-slate-200/90 p-4 shadow-xl mt-2 rounded-2xl"
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
                      className={`text-sm py-2.5 px-3.5 rounded-xl transition-colors flex items-center justify-between font-medium ${
                        isActive
                          ? "text-slate-950 font-bold bg-amber-50 text-amber-950"
                          : "text-slate-600 hover:text-slate-950 hover:bg-slate-50"
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive ? (
                        <span className="w-2 h-2 rounded-full bg-brand-yellow" />
                      ) : (
                        <span className="text-slate-300 text-xs">→</span>
                      )}
                    </Link>
                  );
                })}
                <div className="pt-3 flex flex-col space-y-2 border-t border-slate-100 mt-2">
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center py-3 text-xs font-bold uppercase tracking-[0.08em] text-slate-950 bg-brand-yellow hover:bg-brand-yellow-hover rounded-xl shadow-sm transition-all"
                  >
                    Get a Quote
                  </Link>
                  <a
                    href="tel:+919048171666"
                    className="w-full text-center py-2.5 text-xs font-semibold text-slate-700 hover:text-slate-950 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <span>📞 Call: +91 9048 171 666</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Backdrop overlay when mobile menu is open */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 z-40 bg-slate-950/20 backdrop-blur-xs md:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
}
