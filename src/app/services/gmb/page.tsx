"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import Link from "next/link";

export default function GMBPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header onOpenModal={() => setIsModalOpen(true)} />
      
      <main className="bg-[#0B0B0B] min-h-screen pt-32 text-white">
        {/* Cinematic Hero */}
        <section className="px-6 py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--color-accent)]/5 to-transparent pointer-events-none" />
          
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center relative z-10">
            <div className="flex-1 space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Local Market Dominance</p>
                </div>
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]" style={{ fontFamily: 'var(--font-epilogue)' }}>
                  GMB <br /> Search <br /><span className="text-[var(--color-accent)]">Dominance.</span>
                </h1>
                <p className="text-zinc-500 text-xl leading-relaxed max-w-xl font-medium">
                  Be the first business your local clients see. We optimize your Google My Business profile to drive consistent calls, walk-ins, and local authority.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 pt-6">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[var(--color-accent)] text-white px-12 py-6 rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-[0_20px_50px_-10px_rgba(255,59,31,0.5)]"
                >
                  Rank #1 Locally
                </button>
                <div className="flex items-center gap-4 px-8 py-6 rounded-full bg-white/5 border border-white/10">
                  <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Growth:</p>
                  <p className="text-white text-lg font-black tracking-tighter">+300% CALLS</p>
                </div>
              </div>
            </div>
            
            <div className="flex-1 w-full aspect-square relative group">
               {/* Illustration of local map / pins */}
               <div className="absolute inset-0 bg-[var(--color-accent)]/10 blur-[100px] rounded-full" />
               <div className="relative w-full h-full rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl bg-zinc-900 flex items-center justify-center p-12">
                  <div className="text-center space-y-8 group-hover:scale-110 transition-transform duration-1000">
                     <span className="material-symbols-outlined text-[160px] text-[var(--color-accent)] opacity-40 group-hover:opacity-100 transition-opacity">location_on</span>
                     <div className="space-y-2">
                        <div className="h-2 w-32 bg-white/10 rounded-full mx-auto overflow-hidden">
                           <div className="h-full w-4/5 bg-[var(--color-accent)] animate-shimmer" />
                        </div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Ranking Efficiency: 98%</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Local Dominance Pillars */}
        <section className="py-32 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="mb-24 space-y-4">
              <h2 className="text-sm font-black uppercase tracking-[0.4em] text-[var(--color-accent)]">The Local Strategy</h2>
              <h3 className="text-4xl md:text-6xl font-black tracking-tighter" style={{ fontFamily: 'var(--font-epilogue)' }}>Search Authority.</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: "#1 Local Pack", 
                  desc: "We optimize every signal—from categories to keywords—to ensure your business appears in the coveted top 3 Google results.",
                  icon: "leaderboard"
                },
                { 
                  title: "Review Systems", 
                  desc: "Implementation of automated feedback loops that consistently generate high-quality reviews to build massive social proof.",
                  icon: "star"
                },
                { 
                  title: "Call Optimization", 
                  desc: "Strategic profile updates designed specifically to turn browsers into callers with high-intent call-to-actions.",
                  icon: "phone_callback"
                }
              ].map((pill, idx) => (
                <div key={idx} className="bg-[#111111] border border-white/5 p-12 rounded-[3rem] hover:border-[var(--color-accent)]/30 transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-[var(--color-accent)]/10 mb-10 transition-colors">
                    <span className="material-symbols-outlined text-zinc-500 group-hover:text-[var(--color-accent)] text-3xl">
                      {pill.icon}
                    </span>
                  </div>
                  <h4 className="text-2xl font-black mb-4 tracking-tight text-white">{pill.title}</h4>
                  <p className="text-zinc-500 leading-relaxed font-medium text-lg">{pill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GMB Optimization Roadmap */}
        <section className="py-32 px-6 bg-[#080808]">
          <div className="max-w-4xl mx-auto space-y-24">
            <div className="text-center space-y-6">
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white" style={{ fontFamily: 'var(--font-epilogue)' }}>Local Roadmap.</h2>
              <p className="text-zinc-500 text-lg font-medium max-w-xl mx-auto">A step-by-step strategy to take over your local search landscape.</p>
            </div>
            
            <div className="space-y-4">
              {[
                "Profile Audit & Competitor Benchmark",
                "Advanced Category & Keyword Optimization",
                "Citation Building & Geo-Tagging",
                "Review Generation & Authority Posts",
                "Monthly Performance & Ranking Scaling"
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-10 p-10 bg-white/5 border border-white/5 rounded-[2.5rem] hover:bg-white/10 transition-all group">
                  <span className="text-6xl font-black text-white/5 group-hover:text-[var(--color-accent)]/20 transition-colors">0{idx + 1}</span>
                  <p className="text-2xl font-bold tracking-tight text-zinc-300">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-40 px-6">
          <div className="max-w-6xl mx-auto bg-[var(--color-accent)] rounded-[4rem] p-16 md:p-32 text-center space-y-12 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10">
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white mb-8" style={{ fontFamily: 'var(--font-epilogue)' }}>
                Own your <br /> local market.
              </h2>
              <p className="text-white/80 text-xl font-medium max-w-2xl mx-auto mb-12">
                Don't let competitors take your local leads. Let's engineer a GMB presence that actually drives phone calls and walk-ins.
              </p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-[var(--color-accent)] px-16 py-8 rounded-full font-black text-sm uppercase tracking-[0.2em] hover:bg-zinc-100 transition-all active:scale-95 shadow-2xl"
              >
                Claim Your Local Audit
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer onOpenModal={() => setIsModalOpen(true)} />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
