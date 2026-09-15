"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Clients", href: "#clients" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3 sm:py-3.5"
          : "bg-white/60 backdrop-blur-md border-b border-slate-200/40 py-3.5 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
          <Logo variant="dark" size="md" />
        </a>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-slate-950 hover:text-brand-yellow-hover transition-colors duration-150"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Pill Button (Desktop/Tablet) */}
        <div className="hidden sm:flex items-center space-x-3 lg:space-x-4">
          <a
            href="tel:+919048171666"
            className="text-xs font-mono font-bold text-slate-950 hover:underline transition-colors"
          >
            +91 9048 171 666
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-5 lg:px-6 py-2.5 text-xs font-bold text-slate-900 bg-brand-yellow hover:bg-brand-yellow-hover rounded-full shadow-sm transition-all duration-200 hover:shadow"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile quick buttons */}
        <div className="flex md:hidden items-center space-x-2.5">
          <a
            href="#contact"
            className="inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-black text-slate-950 bg-brand-yellow rounded-full shadow-sm hover:bg-brand-yellow-hover transition-colors"
          >
            <span>Quote</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-slate-950 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-b border-slate-200 px-5 py-5 shadow-2xl animate-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-800 hover:text-black py-2.5 px-2 rounded-lg hover:bg-slate-50 transition-colors border-b border-slate-100/70"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 flex flex-col space-y-2.5">
              <a
                href="tel:+919048171666"
                className="flex items-center justify-center gap-2 text-xs font-bold text-slate-700 py-3 rounded-xl bg-slate-100 active:bg-slate-200 transition-colors"
              >
                <span>📞 Call: +91 9048 171 666</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 text-xs font-bold uppercase tracking-wider text-slate-950 bg-brand-yellow active:bg-brand-yellow-hover rounded-xl shadow-sm transition-colors"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
