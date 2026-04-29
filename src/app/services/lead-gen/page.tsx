"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import Link from "next/link";
import Image from "next/image";

export default function LeadGenPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header onOpenModal={() => setIsModalOpen(true)} />
      
      <main className="bg-[#0B0B0B] min-h-screen text-white pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[800px] flex items-center px-6 md:px-24 overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
            <img 
              className="w-full h-full object-cover grayscale opacity-40" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuByax39EMBN0WJd4ErsjLS05nfUU3qtBCVysbfszHUNkbsSqvkhNQv35jYnU2Qpw2N2fIdKyYsxUY4rzyka08xxASoFuNqJi36_scDw89Myp--DhzLbLC_PqJsXlXOCtOfAGM8UWuBnPLzJUxtDUw6vYxg3AReGKyU_rlTyPQ4uEw4OjtWqYzHc6HyVZDRNkOnqKKdS8ry1Z6rpca-i8xovwlSz2xuOWSQdlMzLlJuMy0haVFVDxrRZz_b_susqFMy7rYeDmTcYTN4"
              alt="Cinematic Noir Professional Setting"
            />
          </div>
          <div className="relative z-20 max-w-4xl space-y-8">
            <p className="text-[var(--color-accent)] font-black uppercase tracking-[0.4em] text-xs">LEAD GENERATION SYSTEMS</p>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]" style={{ fontFamily: 'var(--font-epilogue)' }}>
              Stop Chasing.<br/><span className="text-[var(--color-accent)]">Start Closing.</span>
            </h1>
            <p className="text-zinc-400 text-xl leading-relaxed max-w-2xl font-medium">
              We build automated acquisition engines that deliver high-intent prospects while you sleep. No more cold calling. No more manual follow-ups. Just high-production authority and predictable revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-[var(--color-accent)] text-white px-10 py-5 font-black tracking-widest text-sm hover:brightness-110 transition-all shadow-2xl uppercase"
              >
                SYSTEM AUDIT
              </button>
              <Link 
                href="/#work"
                className="border-2 border-white text-white px-10 py-5 font-black tracking-widest text-sm hover:bg-white hover:text-black transition-all text-center uppercase"
              >
                VIEW CASE STUDIES
              </Link>
            </div>
          </div>
        </section>

        {/* The System - Bento Grid */}
        <section className="py-32 px-6 md:px-24 max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter" style={{ fontFamily: 'var(--font-epilogue)' }}>The System</h2>
            <div className="h-1.5 w-24 bg-[var(--color-accent)] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 bg-[#111111] border border-white/5 p-12 flex flex-col justify-end relative group overflow-hidden rounded-3xl min-h-[400px]">
              <div className="absolute top-0 right-0 p-12">
                <span className="material-symbols-outlined text-[var(--color-accent)] text-7xl opacity-20 group-hover:opacity-40 transition-opacity">nest_cam_magnet_mount</span>
              </div>
              <p className="text-[var(--color-accent)] font-black uppercase tracking-[0.3em] text-[10px] mb-4">PHASE 01</p>
              <h3 className="text-3xl font-black text-white mb-4 tracking-tight" style={{ fontFamily: 'var(--font-epilogue)' }}>Lead Magnets</h3>
              <p className="text-zinc-500 text-lg leading-relaxed max-w-md font-medium">High-authority digital assets that command attention and filter for serious buyers before they even speak to you.</p>
            </div>
            
            <div className="md:col-span-4 bg-[#111111] border border-white/5 p-12 flex flex-col justify-center text-center group hover:bg-[#161616] transition-colors rounded-3xl">
              <span className="material-symbols-outlined text-[var(--color-accent)] text-5xl mb-8 group-hover:scale-110 transition-transform">psychology</span>
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight" style={{ fontFamily: 'var(--font-epilogue)' }}>Automated Nurture</h3>
              <p className="text-zinc-500 text-sm leading-relaxed font-medium">A multi-channel sequence that builds trust and authority on autopilot until they are ready to buy.</p>
            </div>

            <div className="md:col-span-4 bg-[#111111] border border-white/5 p-12 flex flex-col justify-center text-center group hover:bg-[#161616] transition-colors rounded-3xl">
              <span className="material-symbols-outlined text-[var(--color-accent)] text-5xl mb-8 group-hover:scale-110 transition-transform">hub</span>
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight" style={{ fontFamily: 'var(--font-epilogue)' }}>CRM Integration</h3>
              <p className="text-zinc-500 text-sm leading-relaxed font-medium">Every lead is tracked, tagged, and assigned. Zero leakage in your sales pipeline.</p>
            </div>

            <div 
              onClick={() => setIsModalOpen(true)}
              className="md:col-span-8 bg-[var(--color-accent)] p-12 flex items-center justify-between group overflow-hidden rounded-3xl cursor-pointer"
            >
              <div className="max-w-md">
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tighter" style={{ fontFamily: 'var(--font-epilogue)' }}>Ready to Automate?</h3>
                <p className="text-white/80 font-bold leading-relaxed">Scale your professional services without scaling your workload. Engineering the future of your pipeline.</p>
              </div>
              <span className="material-symbols-outlined text-white text-8xl -mr-10 opacity-30 group-hover:translate-x-6 transition-transform">arrow_forward</span>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-[#080808] py-32 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6 md:px-24 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter" style={{ fontFamily: 'var(--font-epilogue)' }}>Unfair <br /> Advantages</h2>
              <div className="space-y-16">
                <div className="flex gap-8 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-[var(--color-accent)] flex items-center justify-center rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-white text-3xl">trending_up</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-white mb-3 tracking-tight" style={{ fontFamily: 'var(--font-epilogue)' }}>Predictable Revenue</h4>
                    <p className="text-zinc-500 text-lg leading-relaxed font-medium">Move from "feast or famine" to a consistent, mathematical growth trajectory based on data, not luck.</p>
                  </div>
                </div>
                <div className="flex gap-8 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-[var(--color-accent)] flex items-center justify-center rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-white text-3xl">verified_user</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-white mb-3 tracking-tight" style={{ fontFamily: 'var(--font-epilogue)' }}>High-Intent Leads</h4>
                    <p className="text-zinc-500 text-lg leading-relaxed font-medium">Our systems qualify prospects based on their pain points and readiness to invest, so you only talk to the best.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-10 bg-[var(--color-accent)]/10 blur-[120px] rounded-full"></div>
              <div className="relative bg-[#111111] border border-white/10 p-12 rounded-[3rem] aspect-square flex flex-col justify-between overflow-hidden group shadow-2xl">
                <div className="flex justify-between items-start">
                  <span className="text-4xl font-black text-white tracking-tighter leading-none" style={{ fontFamily: 'var(--font-epilogue)' }}>DATA<br/>DASHBOARD</span>
                  <span className="material-symbols-outlined text-[var(--color-accent)] text-5xl">monitoring</span>
                </div>
                <div className="space-y-6">
                  <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <div className="h-full bg-[var(--color-accent)] w-[85%] animate-shimmer"></div>
                  </div>
                  <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <div className="h-full bg-[var(--color-accent)] w-[65%] animate-shimmer"></div>
                  </div>
                  <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <div className="h-full bg-[var(--color-accent)] w-[92%] animate-shimmer"></div>
                  </div>
                </div>
                <div className="text-8xl font-black text-white italic tracking-tighter group-hover:scale-105 transition-transform">+240%</div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-32 px-6 md:px-24 max-w-7xl mx-auto">
          <div className="bg-[#111111] border border-white/5 rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-2xl">
            <div className="md:w-1/2 relative group h-[400px] md:h-auto">
              <img 
                className="w-full h-full object-cover grayscale brightness-50 group-hover:brightness-75 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwq6kGb5-I4jXKqxUu4cyLkSAbV3trXO7ZIIIY9lTF9g-njutZiUbhk-VynMeUqVbu-MWn46FmKKrZA5KV66lPy-2HkENwCovSRpkNBWv8VKgoboGDbpQblTKJCOCISDCbjWYNKejvn3kBdaf6kTRyraXJi3Xv3eT5eV1qAtBEZajW0D4h4EsEtTyqsRwMNn0pgL3qMQDaTHWN1wkbhhGuSaAIKlxe72qx2TauAZrorjWqJIQq8g5kuYX5EG40YTVbP_yX067M_44"
                alt="Case Study Showcase"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-[var(--color-accent)] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer shadow-2xl">
                  <span className="material-symbols-outlined text-white text-5xl fill-1">play_arrow</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-12 md:p-20 flex flex-col justify-center space-y-8">
              <p className="text-[var(--color-accent)] font-black uppercase tracking-[0.4em] text-[10px]">CLIENT SUCCESS STORY</p>
              <h3 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tighter" style={{ fontFamily: 'var(--font-epilogue)' }}>Dentist seeing 3X appointment bookings.</h3>
              <p className="text-zinc-500 text-lg leading-relaxed font-medium">By implementing a cinematic authority funnel and automated SMS nurture, we transformed their digital presence into a patient acquisition machine.</p>
              <div className="grid grid-cols-2 gap-10 border-t border-white/10 pt-10">
                <div className="space-y-2">
                  <p className="text-[var(--color-accent)] font-black text-5xl tracking-tighter italic">312%</p>
                  <p className="text-zinc-600 text-[10px] font-black uppercase tracking-widest">ROI INCREASE</p>
                </div>
                <div className="space-y-2">
                  <p className="text-[var(--color-accent)] font-black text-5xl tracking-tighter italic">14 Days</p>
                  <p className="text-zinc-600 text-[10px] font-black uppercase tracking-widest">IMPLEMENTATION</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-32 px-6 md:px-24 max-w-4xl mx-auto text-center space-y-16">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white" style={{ fontFamily: 'var(--font-epilogue)' }}>Contact The Gang</h2>
            <p className="text-zinc-500 text-lg font-medium leading-relaxed">Apply for a Premium Strategy Session. We only partner with 3 new clients per quarter to ensure cinematic quality and surgical precision.</p>
          </div>
          <form className="space-y-8 text-left bg-[#111111] p-12 md:p-16 rounded-[3rem] border border-white/5 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-3">
                <label className="text-zinc-500 text-[10px] font-black uppercase tracking-widest ml-4">Full Name</label>
                <input className="w-full bg-[#0B0B0B] border-white/5 rounded-2xl focus:border-[var(--color-accent)] focus:ring-0 text-white p-5 font-bold transition-all placeholder:text-zinc-700" type="text" placeholder="John Doe" />
              </div>
              <div className="space-y-3">
                <label className="text-zinc-500 text-[10px] font-black uppercase tracking-widest ml-4">Business Email</label>
                <input className="w-full bg-[#0B0B0B] border-white/5 rounded-2xl focus:border-[var(--color-accent)] focus:ring-0 text-white p-5 font-bold transition-all placeholder:text-zinc-700" type="email" placeholder="john@company.com" />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-zinc-500 text-[10px] font-black uppercase tracking-widest ml-4">Monthly Revenue Target</label>
              <select className="w-full bg-[#0B0B0B] border-white/5 rounded-2xl focus:border-[var(--color-accent)] focus:ring-0 text-white p-5 font-bold transition-all appearance-none cursor-pointer">
                <option>$10k - $50k</option>
                <option>$50k - $200k</option>
                <option>$200k+</option>
              </select>
            </div>
            <div className="space-y-3">
              <label className="text-zinc-500 text-[10px] font-black uppercase tracking-widest ml-4">The Challenge</label>
              <textarea className="w-full bg-[#0B0B0B] border-white/5 rounded-2xl focus:border-[var(--color-accent)] focus:ring-0 text-white p-5 font-bold transition-all placeholder:text-zinc-700" placeholder="What is stopping you from scaling right now?" rows={4}></textarea>
            </div>
            <button className="w-full bg-[var(--color-accent)] text-white py-6 rounded-2xl font-black tracking-[0.2em] text-lg hover:brightness-110 transition-all active:scale-[0.98] shadow-2xl uppercase" type="submit">SUBMIT APPLICATION</button>
          </form>
        </section>
      </main>

      <Footer onOpenModal={() => setIsModalOpen(true)} />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
