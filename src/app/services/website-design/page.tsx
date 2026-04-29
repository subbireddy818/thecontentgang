"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import Link from "next/link";

export default function WebsiteDesignPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header onOpenModal={() => setIsModalOpen(true)} />
      
      <main className="bg-[#0B0B0B] min-h-screen text-white pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-neutral-950/40 z-10"></div>
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKj2DdUKSeaMm1nNnV_u-3BKoCWohM_epieFFtpUmiC7G6nRFYw1Oja74sV8IVkYvmroLA5Fw7CQK-WrW7ty8Hrzuw8ySO1W4Lg_olAxlCm36cqQ9KaKAIyDqkUU9oPYC-fwBFe0om2THSfPTS5Nz6w5vqIm2kZN0zch0wMHHneUxJ0UQpX2uLpMA8F_myXLTFZbtCWfECgJoV_NYkMJnAGArp-29liRJjH-ng_ZyWYVxo4Jg-5oEy7piswDmbh1p9M2luu2uBtNM"
              alt="Cinematic Tech Office"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent z-20"></div>
          </div>
          <div className="relative z-30 max-w-7xl mx-auto px-6 w-full py-24">
            <div className="max-w-4xl space-y-8">
              <span className="text-[var(--color-accent)] font-black uppercase tracking-[0.4em] text-xs block mb-6">High-Production Website Funnels</span>
              <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]" style={{ fontFamily: 'var(--font-epilogue)' }}>
                Your 24/7 <br />High-Ticket Salesman.
              </h1>
              <p className="text-zinc-400 text-xl leading-relaxed max-w-2xl font-medium mb-10">
                We don't build websites. We engineer cinematic sales environments that command authority and force conversions for professional service providers.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 pt-6">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[var(--color-accent)] text-white font-black px-12 py-6 hover:scale-105 transition-all text-sm uppercase tracking-widest flex items-center justify-center gap-3 shadow-2xl"
                >
                  DEPLOY YOUR FUNNEL
                  <span className="material-symbols-outlined">bolt</span>
                </button>
                <Link 
                  href="/#work"
                  className="border-2 border-white text-white font-black px-12 py-6 hover:bg-white hover:text-black transition-all text-sm uppercase tracking-widest text-center"
                >
                  VIEW AUTHORITY SAMPLES
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* The Funnel Architecture (Bento Grid) */}
        <section className="py-32 max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter" style={{ fontFamily: 'var(--font-epilogue)' }}>The Funnel.</h2>
            <div className="w-24 h-1.5 bg-[var(--color-accent)]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 bg-[#111111] border border-white/5 p-12 flex flex-col justify-between hover:border-[var(--color-accent)]/30 transition-all group relative overflow-hidden rounded-[3rem] min-h-[400px]">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-[var(--color-accent)] text-4xl mb-6">architecture</span>
                <h3 className="text-3xl font-black text-white mb-6 tracking-tight" style={{ fontFamily: 'var(--font-epilogue)' }}>Strategic UI/UX</h3>
                <p className="text-zinc-500 text-lg leading-relaxed max-w-lg font-medium">Every pixel is placed with intent. We guide your high-value prospects through a meticulously mapped visual journey designed for zero cognitive load.</p>
              </div>
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
                <span className="material-symbols-outlined text-9xl">grid_view</span>
              </div>
            </div>
            
            <div className="md:col-span-4 bg-[#111111] border border-white/5 p-12 flex flex-col justify-center text-center hover:border-[var(--color-accent)]/30 transition-all rounded-[3rem]">
              <div className="mb-8">
                <span className="material-symbols-outlined text-[var(--color-accent)] text-6xl fill-1">psychology</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight" style={{ fontFamily: 'var(--font-epilogue)' }}>Psychology Copy</h3>
              <p className="text-zinc-500 font-medium leading-relaxed">Words that cut through the noise and establish instant cinematic authority.</p>
            </div>

            <div className="md:col-span-4 bg-[#111111] border border-white/5 p-12 hover:border-[var(--color-accent)]/30 transition-all rounded-[3rem]">
              <h3 className="text-2xl font-black text-white mb-6 tracking-tight" style={{ fontFamily: 'var(--font-epilogue)' }}>Conversion Loops</h3>
              <p className="text-zinc-500 font-medium mb-8 leading-relaxed">Automated systems that nurture and recapture lost interest without you lifting a finger.</p>
              <div className="flex gap-2">
                <div className="h-1.5 flex-1 bg-[var(--color-accent)] rounded-full"></div>
                <div className="h-1.5 flex-1 bg-white/5 rounded-full"></div>
                <div className="h-1.5 flex-1 bg-white/5 rounded-full"></div>
              </div>
            </div>

            <div className="md:col-span-8 bg-[#111111] border border-white/5 p-12 flex items-center gap-12 hover:border-[var(--color-accent)]/30 transition-all rounded-[3rem] group">
              <div className="hidden sm:block w-48 h-48 bg-[#0B0B0B] rounded-2xl flex-shrink-0 relative overflow-hidden border border-white/5 shadow-2xl">
                <img 
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJcFUtp8SaFuQ5ZfcNb5mNTbxiW8fQef5FryyNoXvD1Cven5moIPJGjy_zrxCvBcbpha1d6rc0YnG5gmov7jiCPehC6P_hTHQJHycyzQT96Ap0SaIWTbeOuAZsS-radOtHmPjTq9wFdBRx7qgSE7R83Ym6CVPxYA5u6I5M72XtNb8nqZKngrBElyCp0sgHkRVt35q7rLRMlZNvX8tdjQXFyB4GcHKk-r5zAWg_H78eRxEglfvCrekfz2yflraXJ-_ApRUPvsxbOjg"
                  alt="Data Dashboard"
                />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white mb-3 tracking-tight" style={{ fontFamily: 'var(--font-epilogue)' }}>Data-Driven Refinement</h3>
                <p className="text-zinc-500 text-lg leading-relaxed font-medium">We iterate based on heatmaps and session recordings. We don't guess—we optimize for the win.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why It Works */}
        <section className="bg-[#080808] py-32 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-24">
              <div className="w-full md:w-1/2 space-y-12">
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter" style={{ fontFamily: 'var(--font-epilogue)' }}>Built for Velocity.</h2>
                <div className="space-y-12">
                  <div className="flex gap-8 group">
                    <div className="bg-[#111111] w-16 h-16 flex items-center justify-center border border-white/5 flex-shrink-0 rounded-2xl group-hover:bg-[var(--color-accent)]/10 transition-colors">
                      <span className="material-symbols-outlined text-[var(--color-accent)] text-3xl">speed</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-white mb-2 tracking-tight">Sub-Second Speed</h4>
                      <p className="text-zinc-500 leading-relaxed font-medium">Lag is friction. Friction is lost revenue. Our funnels load instantly, maintaining the high-production momentum.</p>
                    </div>
                  </div>
                  <div className="flex gap-8 group">
                    <div className="bg-[#111111] w-16 h-16 flex items-center justify-center border border-white/5 flex-shrink-0 rounded-2xl group-hover:bg-[var(--color-accent)]/10 transition-colors">
                      <span className="material-symbols-outlined text-[var(--color-accent)] text-3xl">smartphone</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-white mb-2 tracking-tight">Mobile-First Instinct</h4>
                      <p className="text-zinc-500 leading-relaxed font-medium">Your clients browse on the go. We design the mobile experience as the primary cinematic platform.</p>
                    </div>
                  </div>
                  <div className="flex gap-8 group">
                    <div className="bg-[#111111] w-16 h-16 flex items-center justify-center border border-white/5 flex-shrink-0 rounded-2xl group-hover:bg-[var(--color-accent)]/10 transition-colors">
                      <span className="material-symbols-outlined text-[var(--color-accent)] text-3xl">touch_app</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-white mb-2 tracking-tight">Zero Friction Path</h4>
                      <p className="text-zinc-500 leading-relaxed font-medium">We eliminate every hurdle between a visitor's curiosity and their signature on your contract.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 relative group">
                <div className="absolute -inset-8 bg-[var(--color-accent)]/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-[#111111] border border-white/10 p-4 rounded-[2rem] overflow-hidden shadow-2xl">
                  <img 
                    className="w-full h-auto rounded-xl grayscale-0 brightness-75 group-hover:brightness-100 transition-all duration-700" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDT1ZVI4uD8SkGjg8tw-DzSXtI6uAXDwntPRnCX9894z2fUaKa9Im2yH2WIkoG32Tqr7N3U43xdgALc8AZ24ZkAeCoLvWcxapP-4oFpBhpxAfNsKGVb8GmiEtfK-4ydneDOk3PtdXhHNtIkwmsP4zSQF4oLbGxPtqLjfAlCPt3K9MttpRTPaBA1pAdSXLgKOPMhFDQYUKtzXKTGOV9YTINkAFq-BQ1E1H6a1uVo8stOTnms0U2cWBVpaZtprJfI1CCbNECyIiBuLE"
                    alt="Mobile Experience"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="py-32 bg-[#0B0B0B]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div>
                <span className="text-[var(--color-accent)] font-black uppercase tracking-[0.4em] text-[10px] block mb-4">CASE STUDY 01</span>
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter" style={{ fontFamily: 'var(--font-epilogue)' }}>The High-End Pivot.</h2>
              </div>
              <Link href="/#work" className="text-white border-b-2 border-[var(--color-accent)] font-black uppercase tracking-widest text-xs pb-1">VIEW ALL WORK</Link>
            </div>
            <div className="relative group cursor-pointer overflow-hidden bg-[#111111] border border-white/5 rounded-[3rem] shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-[400px] lg:h-[600px] overflow-hidden">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVW2CZQgOHIx8yNpLZlJzQjKdItuf1lFFYi268U9hiJSZbW4QzlRcYtKy-MEePA8wlNqoFzJ3o-RHnhMO3hakdDa4CTLbWHzKrB5HEzpGZpinQw_-BFGwiVQMqTAMy9PNDiFSX8vGHCeKH7ZZMqAW3Hxt1OBqh4jovVg1CBEBLLvgIN-p33mPoNFa8DuY6e0NKw3Ip4YiDHH1avHDxwA-KcnKCAlKWcge1NE1Ukc7Wufo4x549XHA-aTxMcBlzbEV8rLMDPUkIV14"
                    alt="Luxury Interior Design"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-24 h-24 bg-[var(--color-accent)] rounded-full flex items-center justify-center shadow-2xl">
                      <span className="material-symbols-outlined text-white text-5xl fill-1">play_arrow</span>
                    </div>
                  </div>
                </div>
                <div className="p-12 md:p-20 flex flex-col justify-center space-y-10">
                  <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter" style={{ fontFamily: 'var(--font-epilogue)' }}>Interior Designer Authority Shift</h3>
                  <div className="space-y-8">
                    <div className="flex items-center gap-6 border-l-4 border-[var(--color-accent)] pl-6">
                      <span className="text-5xl md:text-6xl font-black text-white tracking-tighter italic">412%</span>
                      <span className="text-zinc-500 font-black uppercase tracking-widest text-xs leading-tight">Inquiry Value <br /> Increase</span>
                    </div>
                    <p className="text-zinc-500 text-lg leading-relaxed font-medium">Transformed a generic portfolio site into a cinematic conversion funnel that filtered for 6-figure residential projects automatically.</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {["UX REBUILD", "PSYCHOLOGY COPY", "AD AUTOMATION"].map(tag => (
                      <span key={tag} className="bg-white/5 px-4 py-2 text-[10px] font-black tracking-widest text-zinc-400 border border-white/5 rounded-lg">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Form */}
        <section className="py-32 relative">
          <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-20">
            <div className="text-center space-y-6">
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter" style={{ fontFamily: 'var(--font-epilogue)' }}>Deploy Your Authority.</h2>
              <p className="text-zinc-500 text-lg font-medium max-w-2xl mx-auto">Applications for Q3 strategy sessions are now open. Only for those who demand total market dominance.</p>
            </div>
            <form className="bg-[#111111] border border-white/5 p-12 md:p-16 space-y-10 rounded-[3rem] shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-zinc-600 text-[10px] font-black uppercase tracking-widest ml-4">FULL NAME</label>
                  <input className="w-full bg-[#0B0B0B] border-white/5 text-white focus:border-[var(--color-accent)] focus:ring-0 py-5 px-8 rounded-2xl transition-all font-bold placeholder:text-zinc-800" type="text" placeholder="John Wick" />
                </div>
                <div className="space-y-3">
                  <label className="text-zinc-600 text-[10px] font-black uppercase tracking-widest ml-4">EMAIL ADDRESS</label>
                  <input className="w-full bg-[#0B0B0B] border-white/5 text-white focus:border-[var(--color-accent)] focus:ring-0 py-5 px-8 rounded-2xl transition-all font-bold placeholder:text-zinc-800" type="email" placeholder="john@company.com" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-zinc-600 text-[10px] font-black uppercase tracking-widest ml-4">ANNUAL REVENUE GOAL</label>
                <select className="w-full bg-[#0B0B0B] border-white/5 text-white focus:border-[var(--color-accent)] focus:ring-0 py-5 px-8 rounded-2xl transition-all font-bold appearance-none cursor-pointer">
                  <option>$500k - $1M</option>
                  <option>$1M - $5M</option>
                  <option>$5M+</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-zinc-600 text-[10px] font-black uppercase tracking-widest ml-4">PROJECT OVERVIEW</label>
                <textarea className="w-full bg-[#0B0B0B] border-white/5 text-white focus:border-[var(--color-accent)] focus:ring-0 py-5 px-8 rounded-2xl transition-all font-bold placeholder:text-zinc-800" rows={4} placeholder="Tell us about your mission..."></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-[var(--color-accent)] text-white font-black py-7 rounded-2xl text-xl hover:brightness-110 transition-all uppercase tracking-[0.2em] shadow-2xl active:scale-[0.98]"
              >
                REQUEST DEPLOYMENT
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer onOpenModal={() => setIsModalOpen(true)} />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
