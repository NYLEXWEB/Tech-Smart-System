import React from "react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal-950 text-white border-t border-brand-charcoal-800 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8">
          {/* Col 1: Brand & Tagline */}
          <div className="sm:col-span-2 lg:col-span-5 space-y-3.5 sm:space-y-4">
            <Logo variant="light" size="lg" />
            <p className="text-[11px] sm:text-xs font-mono tracking-wider uppercase text-brand-yellow font-semibold">
              Think Smart. Stay Secure.
            </p>
            <p className="text-xs text-brand-slate-400 max-w-sm leading-relaxed font-normal">
              Serving customers since 1999, based in Kollam, Kerala. Professional provider of CCTV surveillance, security systems and home automation solutions for homes, businesses, and institutions.
            </p>
            <div className="flex items-center space-x-2 pt-1">
              <span className="inline-block w-2 h-2 rounded-sm bg-brand-yellow flex-shrink-0" />
              <span className="text-[10px] sm:text-[11px] text-brand-slate-400 uppercase tracking-widest font-mono">
                CCTV • Security Systems • Automation
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-brand-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-brand-slate-400 font-medium">
              <li>
                <a href="#about" className="hover:text-white hover:underline transition-colors block py-0.5">
                  About TechSmart Systems
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white hover:underline transition-colors block py-0.5">
                  Security & Automation Services
                </a>
              </li>
              <li>
                <a href="#clients" className="hover:text-white hover:underline transition-colors block py-0.5">
                  Major Clients & Track Record
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white hover:underline transition-colors block py-0.5">
                  Contact & Location
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Summary */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-brand-slate-200">
              Office Information
            </h4>
            <div className="space-y-2 text-xs text-brand-slate-400">
              <p className="leading-relaxed">
                <strong className="text-white block font-medium">TechSmart Systems</strong>
                Punnathanam, Asramam P.O. <br />
                Kollam, Kerala – 691002
              </p>
              <div className="pt-1 space-y-1.5 font-mono">
                <div>
                  <span className="text-brand-slate-400 font-sans mr-2">Landline:</span>
                  <a href="tel:04742766666" className="text-white hover:text-brand-yellow transition-colors">
                    0474 276 6666
                  </a>
                </div>
                <div>
                  <span className="text-brand-slate-400 font-sans mr-2">Mobile:</span>
                  <a href="tel:+919048171666" className="text-brand-yellow font-semibold hover:underline">
                    +91 9048 171 666
                  </a>
                </div>
                <div className="pt-1">
                  <a
                    href="mailto:techsmartsystemskollam@gmail.com"
                    className="text-brand-slate-300 hover:text-white underline transition-colors break-all"
                  >
                    techsmartsystemskollam@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-brand-charcoal-800 flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-[11px] text-brand-slate-400 gap-3 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} TechSmart Systems. All rights reserved.
          </div>
          <div className="flex items-center space-x-3 sm:space-x-4">
            <span>Kollam, Kerala, India</span>
            <span>•</span>
            <span className="text-brand-yellow font-mono">Think Smart. Stay Secure.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
