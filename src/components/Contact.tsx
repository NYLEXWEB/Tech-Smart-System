"use client";

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "CCTV Surveillance",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-t border-slate-100 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start max-w-6xl mx-auto w-full">
          {/* Left Column: Official Contact Info from PDF */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500">
                Contact & Support
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                TechSmart Systems
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Serving Kollam and clients across Kerala since 1999. Reach out to our technical engineers for site evaluations and custom estimates.
              </p>
            </div>

            <div className="space-y-2.5 sm:space-y-3 pt-1">
              {/* Address */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#F0F2F5] space-y-1">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  Head Office
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                  Punnathanam, Asramam P.O. <br />
                  Kollam, Kerala – 691002
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#F0F2F5] space-y-1">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  Direct Line & Mobile
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 font-mono space-y-1">
                  <div className="flex items-center justify-between sm:justify-start sm:gap-2">
                    <span className="font-sans text-slate-500 font-normal">Landline:</span>
                    <a href="tel:04742766666" className="hover:underline">0474 276 6666</a>
                  </div>
                  <div className="flex items-center justify-between sm:justify-start sm:gap-2">
                    <span className="font-sans text-slate-500 font-normal">Mobile:</span>
                    <a href="tel:+919048171666" className="text-slate-950 font-bold hover:underline">+91 9048 171 666</a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#F0F2F5] space-y-1">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  Email Address
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-900 font-mono break-all">
                  <a href="mailto:techsmartsystemskollam@gmail.com" className="hover:underline">
                    techsmartsystemskollam@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form matching reference style */}
          <div className="lg:col-span-7 p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-100 shadow-sm">
            <div className="mb-5 sm:mb-6 space-y-1">
              <h3 className="text-lg sm:text-xl font-bold text-slate-950">
                Request a System Quote
              </h3>
              <p className="text-xs text-slate-500">
                Share your property requirements for a tailored quote from our engineers.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-emerald-200 text-center space-y-3 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-lg font-bold">
                  ✓
                </div>
                <div className="text-base font-bold text-slate-900">
                  Inquiry Submitted Successfully
                </div>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Our engineering team in Kollam will connect with you at <strong>{formData.phone}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2.5 text-xs font-bold text-slate-900 bg-brand-yellow rounded-full shadow-sm active:scale-95"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Nair"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 90481 71666"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Email (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. client@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Service Required
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent transition-all"
                    >
                      <option value="CCTV Surveillance">CCTV Surveillance (HD/IP/AI)</option>
                      <option value="Security Systems">Security Systems</option>
                      <option value="DVR & NVR Systems">DVR & NVR Systems</option>
                      <option value="Home Automation">Home Automation</option>
                      <option value="Access Control">Access Control & Smart Locks</option>
                      <option value="Biometric Systems">Biometric Systems</option>
                      <option value="Remote Monitoring">Remote Monitoring</option>
                      <option value="Installation & Service">Installation & Service Maintenance</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Property Location & Details
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your location in Kerala and security requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-brand-yellow hover:bg-brand-yellow-hover active:scale-[0.99] rounded-full shadow-sm transition-all duration-200"
                >
                  Submit Quote Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
