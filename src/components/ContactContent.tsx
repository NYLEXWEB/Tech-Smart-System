"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactContent() {
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
    <div className="pt-24 sm:pt-28 bg-white">
      {/* Header */}
      <section className="py-12 sm:py-16 bg-slate-50/70 border-b border-slate-200/70">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <div className="eyebrow-badge mb-3">
            <span className="eyebrow-bullet" />
            <span>Connect With Us</span>
          </div>

          <h1 className="text-[clamp(2.25rem,4vw,3.25rem)] font-bold text-[#111827] tracking-[-0.028em] leading-[1.18] mb-4">
            Contact & Quote Request
          </h1>

          <p className="text-base font-normal text-[#4B5563] max-w-2xl mx-auto leading-[1.65]">
            Reach out to our engineering team in Kollam for on-site property evaluations, custom security estimates, and technical support across Kerala.
          </p>
        </motion.div>
      </section>

      {/* Main Contact Content & Form */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-start max-w-6xl mx-auto">
            
            {/* Left Column: Official Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-6 text-left"
            >
              <div>
                <h2 className="text-[clamp(1.35rem,2.2vw,1.75rem)] font-semibold text-[#111827] tracking-[-0.02em] leading-[1.28] mb-2">
                  TechSmart Systems
                </h2>

                <p className="text-base font-normal text-[#4B5563] leading-[1.65]">
                  Serving Kollam and clients across Kerala since 1999. Reach out to our technical team for site evaluations and custom estimates.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {/* Address */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="text-xs font-semibold uppercase tracking-[0.08em] text-[#6B7280]">
                    Head Office
                  </div>
                  <div className="text-sm font-semibold text-[#111827] leading-snug">
                    Punnathanam, Asramam P.O. <br />
                    Kollam, Kerala – 691002
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <div className="text-xs font-semibold uppercase tracking-[0.08em] text-[#6B7280]">
                    Direct Line & Mobile
                  </div>
                  <div className="text-sm font-semibold text-[#111827] space-y-1">
                    <div className="flex items-center justify-between sm:justify-start sm:gap-3">
                      <span className="text-[#6B7280] font-normal">Landline:</span>
                      <a href="tel:04742766666" className="hover:underline">0474 276 6666</a>
                    </div>
                    <div className="flex items-center justify-between sm:justify-start sm:gap-3">
                      <span className="text-[#6B7280] font-normal">Mobile:</span>
                      <a href="tel:+919048171666" className="text-[#111827] font-semibold hover:underline">+91 9048 171 666</a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1">
                  <div className="text-xs font-semibold uppercase tracking-[0.08em] text-[#6B7280]">
                    Email Address
                  </div>
                  <div className="text-sm font-semibold text-[#111827] break-all">
                    <a href="mailto:techsmartsystemskollam@gmail.com" className="hover:underline">
                      techsmartsystemskollam@gmail.com
                    </a>
                  </div>
                </div>

                {/* Working Hours & Quick Action */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="text-xs font-semibold uppercase tracking-[0.08em] text-[#6B7280]">
                    Working Hours
                  </div>
                  <div className="text-sm text-[#4B5563]">
                    Monday – Saturday: <strong className="text-[#111827]">9:00 AM – 7:00 PM</strong><br />
                    Sunday: <span className="text-[#6B7280]">Emergency Support By Appointment</span>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-2">
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      href="https://wa.me/919048171666?text=Hello%20TechSmart%20Systems,%20I%20would%20like%20to%20request%20a%20security%20system%20quote."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold tracking-wide transition-colors"
                    >
                      <span>💬 Chat on WhatsApp</span>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      href="tel:+919048171666"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111827] hover:bg-slate-800 text-white text-xs font-semibold tracking-wide transition-colors"
                    >
                      <span>📞 Call Now</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Clean Quote Form */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-7 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-slate-50/70 border border-slate-200 shadow-sm text-left"
            >
              <div className="mb-6 space-y-1">
                <h3 className="text-xl font-semibold text-[#111827] tracking-[-0.015em]">
                  Request a System Quote
                </h3>
                <p className="text-sm text-[#6B7280] font-normal">
                  Share your property requirements for a tailored quote from our engineers.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="p-8 rounded-2xl bg-white border border-slate-200 text-center space-y-3 shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#F59E0B]/20 text-[#111827] flex items-center justify-center mx-auto text-lg font-bold">
                      ✓
                    </div>
                    <div className="text-base font-semibold text-[#111827]">
                      Inquiry Submitted Successfully
                    </div>
                    <p className="text-sm text-[#4B5563] max-w-sm mx-auto leading-[1.65]">
                      Thank you, <strong>{formData.name}</strong>. Our engineering team in Kollam will connect with you at <strong>{formData.phone}</strong>.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-6 py-2.5 text-xs font-semibold text-slate-950 bg-brand-yellow rounded-full shadow-sm"
                    >
                      Send Another Inquiry
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-[0.08em] text-[#6B7280] mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul Nair"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-[#111827] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition-all text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-[0.08em] text-[#6B7280] mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. +91 90481 71666"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-[#111827] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition-all text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-[0.08em] text-[#6B7280] mb-1.5">
                          Email (Optional)
                        </label>
                        <input
                          type="email"
                          placeholder="e.g. client@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-[#111827] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition-all text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-[0.08em] text-[#6B7280] mb-1.5">
                          Service Required
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition-all text-sm"
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
                      <label className="block text-xs font-semibold uppercase tracking-[0.08em] text-[#6B7280] mb-1.5">
                        Property Location & Details
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Describe your property location and security needs..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-[#111827] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition-all resize-none text-sm"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      type="submit"
                      className="w-full py-3.5 text-xs font-semibold uppercase tracking-[0.08em] text-slate-950 bg-brand-yellow hover:bg-brand-yellow-hover rounded-full shadow-sm transition-all duration-200"
                    >
                      Submit Quote Request
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
