"use client";

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    business_type: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Final check for gmail
    if (!formData.user_email.toLowerCase().endsWith("@gmail.com")) {
      alert("Please use a @gmail.com address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const SERVICE_ID = "service_9t5kfbj"; 
      const TEMPLATE_ID = "template_2l73jtm";
      const PUBLIC_KEY = "IoK7NADHy4nUF5IvP";

      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current!,
        PUBLIC_KEY
      );

      setSubmitted(true);
    } catch (error) {
      console.error("FAILED...", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="py-32 px-6 bg-[#0B0B0B] relative overflow-hidden"
      id="contact"
    >
      {/* Background Accent */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[var(--color-accent)]/5 blur-[120px] rounded-full pointer-events-none" />

      <div
        className="mx-auto bg-[#111111] border border-white/5 p-10 md:p-14 rounded-[2.5rem] shadow-2xl relative z-10"
        style={{ maxWidth: "600px" }}
      >
        <div className="mb-10">
          <h2
            className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter uppercase leading-[1.1]"
            style={{ fontFamily: "var(--font-epilogue)" }}
          >
            Engineer Your <span className="text-[var(--color-accent)]">Growth</span>
          </h2>
          <p className="text-zinc-500 font-bold text-sm leading-relaxed border-l-2 border-[var(--color-accent)] pl-6">
            Stop guessing. Let's audit your current content strategy and build a market-dominating roadmap.
          </p>
        </div>

        {submitted ? (
          <div className="py-16 text-center animate-in fade-in zoom-in duration-500">
            <div className="w-24 h-24 bg-[var(--color-accent)]/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <span className="material-symbols-outlined text-[var(--color-accent)] text-6xl font-bold">check_circle</span>
            </div>
            <h3 className="text-3xl font-black text-white tracking-tighter uppercase mb-4">You're On The List</h3>
            <p className="text-zinc-500 font-bold">
              Our lead strategist will review your profile and reach out within 24 hours.
            </p>
          </div>
        ) : (
          <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="group">
              <label className="text-[10px] font-black text-zinc-500 block mb-3 tracking-[0.2em] uppercase group-focus-within:text-[var(--color-accent)] transition-colors">
                Full Name
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-zinc-600 text-xl group-focus-within:text-[var(--color-accent)] transition-colors">person</span>
                <input
                  name="user_name"
                  type="text"
                  required
                  value={formData.user_name}
                  onChange={(e) => setFormData({...formData, user_name: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-12 py-4 text-white text-sm font-bold focus:bg-white/10 focus:border-[var(--color-accent)] outline-none transition-all shadow-inner"
                  placeholder="e.g. Marcus Thorne"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email */}
              <div className="group">
                <label className="text-[10px] font-black text-zinc-500 block mb-3 tracking-[0.2em] uppercase group-focus-within:text-[var(--color-accent)] transition-colors">
                  Email
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-zinc-600 text-xl group-focus-within:text-[var(--color-accent)] transition-colors">mail</span>
                  <input
                    name="user_email"
                    type="email"
                    required
                    pattern=".*@gmail\.com$"
                    title="Please use a @gmail.com address"
                    value={formData.user_email}
                    onChange={(e) => setFormData({...formData, user_email: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-12 py-4 text-white text-sm font-bold focus:bg-white/10 focus:border-[var(--color-accent)] outline-none transition-all shadow-inner"
                    placeholder="marcus@gmail.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="group">
                <label className="text-[10px] font-black text-zinc-500 block mb-3 tracking-[0.2em] uppercase group-focus-within:text-[var(--color-accent)] transition-colors">
                  Phone
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-zinc-600 text-xl group-focus-within:text-[var(--color-accent)] transition-colors">call</span>
                  <input
                    name="user_phone"
                    type="tel"
                    required
                    inputMode="numeric"
                    value={formData.user_phone}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^0-9]/g, "");
                      setFormData({...formData, user_phone: val});
                    }}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-12 py-4 text-white text-sm font-bold focus:bg-white/10 focus:border-[var(--color-accent)] outline-none transition-all shadow-inner"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
            </div>

            {/* Business type */}
            <div className="group">
              <label className="text-[10px] font-black text-zinc-500 block mb-3 tracking-[0.2em] uppercase group-focus-within:text-[var(--color-accent)] transition-colors">
                What is your business?
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-zinc-600 text-xl group-focus-within:text-[var(--color-accent)] transition-colors">business</span>
                <input
                  name="business_type"
                  type="text"
                  required
                  value={formData.business_type}
                  onChange={(e) => setFormData({...formData, business_type: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-12 py-4 text-white text-sm font-bold focus:bg-white/10 focus:border-[var(--color-accent)] outline-none transition-all shadow-inner"
                  placeholder="e.g. Luxury Real Estate, Tech SaaS..."
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[var(--color-accent)] text-white py-5 rounded-[20px] font-black text-lg tracking-widest shadow-[0_20px_40px_-10px_rgba(255,59,31,0.5)] hover:scale-[1.02] hover:brightness-110 transition-all active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "TRANSMITTING..." : "BOOK FREE AUDIT"}
              {!isSubmitting && <span className="material-symbols-outlined text-2xl">arrow_forward</span>}
            </button>

            <p className="text-center text-[9px] font-bold text-zinc-600 pt-4 flex items-center justify-center gap-2 uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm">shield</span>
              Your data is secured by enterprise-grade encryption
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
