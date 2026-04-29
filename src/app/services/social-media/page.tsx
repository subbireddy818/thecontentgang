"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import Link from "next/link";

export default function SocialMediaPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Header onOpenModal={() => setIsModalOpen(true)} />
      
      <main className="bg-[#0B0B0B] min-h-screen text-white pt-20">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover grayscale brightness-50" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNH1mb8lQpYFKAaacE9kprSUxv8yE_BOYUOwlztPCvYU0o7BNVVDXOfHtwdug7DZTOAbz_ZhTWTQI-Q15yPoyzZNuD73aXX6WOrezxWjO4mq33qUcXs0AGbuXZfb_MKjEdVWqMjHH5yDzg-H1efpGJm6fbEBDvD2JYg67uF_SXRB8bzwg10Kkj8eliLDh8hC8jrJMUGI9WHoTUKvMIrQzcW6ifOvNvk84Qfx2JnXLioEEexXIERhNVpc1JzJriygOvSxJuYWhDtXg"
              alt="Cinematic Camera Lens"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent z-10"></div>
          </div>
          <div className="relative z-20 text-center px-6 max-w-5xl mx-auto space-y-10">
            <span className="text-[var(--color-accent)] font-black uppercase tracking-[0.4em] text-xs block mb-6">Social Media Authority</span>
            <h1 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.8]" style={{ fontFamily: 'var(--font-epilogue)' }}>
              Dominance Beyond <br /> the Algorithm.
            </h1>
            <p className="text-zinc-400 text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-12">
              We don't just post content. We build digital empires for industry titans who refuse to be ignored. Aggressive growth through cinematic storytelling.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center pt-6">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-[var(--color-accent)] text-white font-black px-12 py-6 text-sm tracking-widest uppercase hover:scale-105 transition-all shadow-2xl"
              >
                Command Attention
              </button>
              <Link 
                href="/#work"
                className="border-2 border-white text-white font-black px-12 py-6 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all text-center"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </section>

        {/* The Growth Engine */}
        <section className="py-32 bg-[#0B0B0B] border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-24">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter" style={{ fontFamily: 'var(--font-epilogue)' }}>The Growth Engine</h2>
              <div className="w-24 h-1.5 bg-[var(--color-accent)]"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#111111] border border-white/5 p-12 rounded-[3rem] hover:border-[var(--color-accent)]/30 transition-all group">
                <span className="material-symbols-outlined text-4xl text-[var(--color-accent)] mb-10 block fill-1">verified</span>
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight" style={{ fontFamily: 'var(--font-epilogue)' }}>Authority Building</h3>
                <p className="text-zinc-500 text-lg leading-relaxed font-medium">Transforming your expertise into perceived market leadership. We position you as the only logical choice in your niche.</p>
              </div>
              <div className="bg-[#111111] border border-white/5 p-12 rounded-[3rem] hover:border-[var(--color-accent)]/30 transition-all group">
                <span className="material-symbols-outlined text-4xl text-[var(--color-accent)] mb-10 block fill-1">bolt</span>
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight" style={{ fontFamily: 'var(--font-epilogue)' }}>Viral Hooks</h3>
                <p className="text-zinc-500 text-lg leading-relaxed font-medium">Psychological triggers meet high-production visuals. We stop the scroll within 1.2 seconds to capture the unreachable audience.</p>
              </div>
              <div className="bg-[#111111] border border-white/5 p-12 rounded-[3rem] hover:border-[var(--color-accent)]/30 transition-all group">
                <span className="material-symbols-outlined text-4xl text-[var(--color-accent)] mb-10 block fill-1">groups</span>
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight" style={{ fontFamily: 'var(--font-epilogue)' }}>Community</h3>
                <p className="text-zinc-500 text-lg leading-relaxed font-medium">Turning passive viewers into loyal advocates. We foster ecosystems of brand obsession that drive word-of-mouth growth.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-32 bg-[#080808] relative overflow-hidden border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-24">
            <div className="w-full md:w-1/2 relative group">
              <div className="absolute -inset-10 bg-[var(--color-accent)]/10 blur-[120px] rounded-full"></div>
              <div className="relative">
                <img 
                  className="rounded-[3rem] border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-2xl" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmgvejTv2NAPyXaTU5-3eKoYXgl6_KrPYnmxvVnlsTwZKFoecTz_T9QMkg6Fl8uEx5NVOeIxqEOButJ-fwEjXFOeG5IYTV34SmZLts12guQ7AhQKsrkamDaS1Oh3N2kGoORK_avp2dKIPmAqeO-iXNVrdfWksQ9_YMcbx5wFwL7d_BF9er4rgl-CJZArpqrhZ9k_KLdd93DYZbe-h9encNvfDznyozm6LqAr922gzbY2W_b2QZqzvSyeOVkEFlCOtA9IuHOrKSVW8"
                  alt="Analytics Dashboard"
                />
                <div className="absolute -bottom-10 -right-10 bg-[var(--color-accent)] p-12 rounded-[2.5rem] shadow-[0_20px_50px_-10px_rgba(255,59,31,0.5)] group-hover:scale-105 transition-transform">
                  <p className="text-5xl font-black text-white tracking-tighter italic">+142%</p>
                  <p className="text-white/80 font-black text-[10px] uppercase tracking-widest mt-2">Avg Revenue Growth</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-12">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight" style={{ fontFamily: 'var(--font-epilogue)' }}>Follower-to-Client <br /> Conversion.</h2>
              <p className="text-zinc-500 text-xl font-medium leading-relaxed">
                Followers are vanity, revenue is sanity. Our "Noir Framework" doesn't just chase numbers; it architecturally guides your audience through a psychological funnel toward conversion.
              </p>
              <ul className="space-y-10">
                <li className="flex items-start gap-6 group">
                  <span className="material-symbols-outlined text-[var(--color-accent)] text-3xl group-hover:scale-125 transition-transform">check_circle</span>
                  <div>
                    <p className="text-white font-black text-xl tracking-tight">Brand Identity Integration</p>
                    <p className="text-zinc-600 font-medium text-base mt-2">Every frame reflects the premium nature of your service.</p>
                  </div>
                </li>
                <li className="flex items-start gap-6 group">
                  <span className="material-symbols-outlined text-[var(--color-accent)] text-3xl group-hover:scale-125 transition-transform">check_circle</span>
                  <div>
                    <p className="text-white font-black text-xl tracking-tight">Direct Response Narrative</p>
                    <p className="text-zinc-600 font-medium text-base mt-2">Strategic calls-to-action woven seamlessly into elite content.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Case Study: Dessert Shop */}
        <section className="py-32 bg-[#0B0B0B]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-[#111111] border border-white/5 flex flex-col md:flex-row overflow-hidden rounded-[3rem] shadow-2xl">
              <div className="w-full md:w-3/5 relative group min-h-[400px]">
                <img 
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRjMYabwpE7wC1x5BqruMkrJ6zK6PXmkrj7FPMVsFZuTjJBQLaLX8AyHLMN1kdh3Aad4ykm-Rv5w4crF_OdcpIctR6HjiL6cQYgL2aj0nDDS-tXddGH6VpgAgmogbPc_lxA_Yfdz8HX7QOT_zRQJlfC9xxU0MAO4tCrGzlLH18gjBFvcFuAvuCMx788AlfIzNvP9llIWYHkM5parL0jgs8yu5xtZoWjc0KVzma0LBEVlHrl1pnYAb_D9P7NhSsGhpqA8zW_uKaAHo"
                  alt="Luxury Dessert Production"
                />
                <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="w-full md:w-2/5 p-12 md:p-20 flex flex-col justify-center space-y-10">
                <span className="text-[var(--color-accent)] font-black uppercase tracking-[0.4em] text-[10px] block mb-4">CASE STUDY</span>
                <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight" style={{ fontFamily: 'var(--font-epilogue)' }}>Sweet Revenue.</h3>
                <p className="text-zinc-500 text-lg leading-relaxed font-medium italic">
                  "THE GANG didn't just film our desserts; they filmed a craving. Our walk-in traffic exploded within the first three weeks of the campaign."
                </p>
                <div className="flex items-center gap-6 mb-4">
                  <div className="h-px flex-grow bg-white/10"></div>
                  <span className="text-white font-black text-5xl tracking-tighter italic">200%</span>
                  <span className="text-zinc-600 text-[10px] font-black uppercase tracking-widest">Walk-in Increase</span>
                </div>
                <Link href="/#work" className="text-white border-b-2 border-[var(--color-accent)] self-start font-black uppercase tracking-widest text-xs pb-1 hover:text-[var(--color-accent)] transition-colors">READ THE FULL STRATEGY</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="py-32 bg-[#0B0B0B] border-t border-white/5">
          <div className="max-w-3xl mx-auto px-6 text-center space-y-12 mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter" style={{ fontFamily: 'var(--font-epilogue)' }}>Apply for Impact.</h2>
            <p className="text-zinc-500 text-xl font-medium leading-relaxed max-w-2xl mx-auto">
              We accept only three new growth clients per quarter. Ensure your brand is ready for the intensity of cinematic dominance.
            </p>
          </div>
          <div className="max-w-4xl mx-auto px-6">
            <form className="space-y-10 text-left bg-[#111111] p-12 md:p-20 border border-white/5 rounded-[3rem] shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <label className="text-zinc-600 text-[10px] font-black uppercase tracking-widest ml-4">Full Name</label>
                  <input className="w-full bg-[#0B0B0B] border-white/5 rounded-2xl text-white focus:border-[var(--color-accent)] focus:ring-0 p-5 font-bold transition-all placeholder:text-zinc-800" type="text" placeholder="John Wick" />
                </div>
                <div className="space-y-3">
                  <label className="text-zinc-600 text-[10px] font-black uppercase tracking-widest ml-4">Business Website</label>
                  <input className="w-full bg-[#0B0B0B] border-white/5 rounded-2xl text-white focus:border-[var(--color-accent)] focus:ring-0 p-5 font-bold transition-all placeholder:text-zinc-800" type="url" placeholder="https://yourbrand.com" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-zinc-600 text-[10px] font-black uppercase tracking-widest ml-4">Current Monthly Ad Spend</label>
                <select className="w-full bg-[#0B0B0B] border-white/5 rounded-2xl text-white focus:border-[var(--color-accent)] focus:ring-0 p-5 font-bold appearance-none cursor-pointer">
                  <option>$0 - $5k</option>
                  <option>$5k - $20k</option>
                  <option>$20k - $100k</option>
                  <option>$100k+</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-zinc-600 text-[10px] font-black uppercase tracking-widest ml-4">Your Primary Growth Goal</label>
                <textarea className="w-full bg-[#0B0B0B] border-white/5 rounded-2xl text-white focus:border-[var(--color-accent)] focus:ring-0 p-5 font-bold transition-all placeholder:text-zinc-800" rows={4} placeholder="Tell us about your mission..."></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-[var(--color-accent)] text-white font-black py-7 rounded-2xl text-lg tracking-[0.2em] hover:brightness-110 transition-all uppercase shadow-2xl active:scale-[0.98]"
              >
                REQUEST STRATEGY SESSION
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
