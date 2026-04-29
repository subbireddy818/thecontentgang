"use client";

import React, { useState } from "react";
import { useParams, notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import Link from "next/link";

const SERVICE_DATA: Record<string, any> = {
  "lead-gen": {
    title: "Lead Generation & Performance Ads",
    subtitle: "ROI-First Pipelines",
    description: "We engineer high-converting client acquisition systems that turn advertising spend into predictable revenue. No vanity metrics—just high-ticket leads.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426",
    features: [
      { title: "Meta & Google Mastery", desc: "Surgical targeting across the world's most powerful ad platforms." },
      { title: "Conversion Funnels", desc: "Custom landing pages built to turn strangers into qualified appointments." },
      { title: "Data Transparency", desc: "Real-time tracking of every rupee spent and every lead generated." }
    ],
    workflow: [
      "Deep Audit & Market Analysis",
      "Funnel Architecture & Copywriting",
      "Campaign Launch & A/B Testing",
      "Aggressive Scaling & ROI Optimization"
    ]
  },
  "social-media": {
    title: "Social Media Authority Management",
    subtitle: "Dominance by Design",
    description: "Move beyond 'posting'. We build cinematic social presence that establishes you as the undisputed authority in your niche.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=2574",
    features: [
      { title: "Cinematic Content", desc: "High-end video and design that stops the scroll and builds desire." },
      { title: "Viral Strategy", desc: "Algorithm-first content designed for massive organic reach and impact." },
      { title: "Community Building", desc: "Turning followers into a loyal tribe of brand advocates." }
    ],
    workflow: [
      "Brand Identity & Voice Definition",
      "Content Pillars & Calendar Strategy",
      "High-End Production & Editing",
      "Growth Hacking & Engagement"
    ]
  },
  "website-design": {
    title: "High-Conversion Web Design & UI/UX",
    subtitle: "Digital Luxury Assets",
    description: "Your website shouldn't just be a brochure. It should be your most effective salesperson, optimized for luxury and conversion.",
    image: "https://images.unsplash.com/photo-1581291518066-3e20bfd1ae2e?auto=format&fit=crop&q=80&w=2670",
    features: [
      { title: "Conversion UI", desc: "Interfaces engineered to guide users naturally toward your 'Book Call' button." },
      { title: "Blazing Speed", desc: "Core Web Vitals optimized for instant load times and better SEO." },
      { title: "Luxury Aesthetic", desc: "Noir-inspired designs that command premium prices from your clients." }
    ],
    workflow: [
      "User Journey & Sitemap Mapping",
      "High-Fidelity UI/UX Prototyping",
      "Modern Web Development (Next.js)",
      "Performance & SEO Optimization"
    ]
  },
  "gmb": {
    title: "Google My Business (GMB) Dominance",
    subtitle: "Local Market Mastery",
    description: "Be the first business your local clients see. We optimize your GMB profile to drive consistent calls and walk-ins.",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=2670",
    features: [
      { title: "#1 Local Ranking", desc: "Techniques to ensure you appear in the 'Local Pack' for high-intent keywords." },
      { title: "Review Systems", desc: "Automated strategies to collect and showcase high-quality client reviews." },
      { title: "Local Conversion", desc: "Optimizing photos, posts, and details to turn searchers into callers." }
    ],
    workflow: [
      "Profile Audit & Competitor Scan",
      "Keyword & Category Optimization",
      "Citation Building & Local SEO",
      "Monthly Authority Management"
    ]
  }
};

export default function ServicePage() {
  const { slug } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const service = SERVICE_DATA[slug as string];

  if (!service) return notFound();

  return (
    <>
      <Header onOpenModal={() => setIsModalOpen(true)} />
      
      <main className="bg-[#0B0B0B] min-h-screen pt-32 text-white">
        {/* Service Hero */}
        <section className="px-6 py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8 animate-fade-in-left">
              <div className="space-y-4">
                <p className="text-[var(--color-accent)] font-black uppercase tracking-[0.4em] text-sm">{service.subtitle}</p>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight" style={{ fontFamily: 'var(--font-epilogue)' }}>
                  {service.title}
                </h1>
                <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-xl">
                  {service.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[var(--color-accent)] text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:brightness-110 transition-all active:scale-95 shadow-2xl"
                >
                  Book Strategic Audit
                </button>
                <Link 
                  href="/#services"
                  className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2"
                >
                  Other Services
                </Link>
              </div>
            </div>
            
            <div className="flex-1 w-full aspect-square md:aspect-video lg:aspect-square relative rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl animate-fade-in-right">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </section>

        {/* Core Features Grid */}
        <section className="px-6 py-32 bg-[#080808]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter" style={{ fontFamily: 'var(--font-epilogue)' }}>Core Pillars of Strategy.</h2>
              <div className="w-20 h-1 bg-[var(--color-accent)] mx-auto mt-6" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.features.map((f: any, idx: number) => (
                <div key={idx} className="bg-[#111111] border border-white/5 p-12 rounded-[2.5rem] hover:border-[var(--color-accent)]/30 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-[var(--color-accent)]/10 mb-8 transition-colors">
                    <span className="material-symbols-outlined text-[var(--color-accent)]">verified</span>
                  </div>
                  <h4 className="text-2xl font-black mb-4 tracking-tight">{f.title}</h4>
                  <p className="text-zinc-500 leading-relaxed font-medium">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow / Roadmap */}
        <section className="px-6 py-32 border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20 space-y-4">
              <p className="text-[var(--color-accent)] font-black uppercase tracking-[0.4em] text-xs">The Process</p>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter" style={{ fontFamily: 'var(--font-epilogue)' }}>Roadmap to Scale.</h2>
            </div>
            
            <div className="space-y-6">
              {service.workflow.map((step: string, idx: number) => (
                <div key={idx} className="flex items-center gap-8 p-8 bg-white/5 border border-white/5 rounded-3xl hover:bg-white/8 transition-all group">
                  <span className="text-5xl font-black text-white/10 group-hover:text-[var(--color-accent)]/20 transition-colors">0{idx + 1}</span>
                  <p className="text-xl font-bold tracking-tight text-zinc-200">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-32 relative overflow-hidden">
           <div className="max-w-5xl mx-auto bg-[var(--color-accent)] rounded-[3rem] p-12 md:p-24 text-center space-y-10 relative z-10 overflow-hidden shadow-[0_50px_100px_-20px_rgba(255,59,31,0.5)]">
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative z-10 space-y-6">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white" style={{ fontFamily: 'var(--font-epilogue)' }}>Ready to dominate?</h2>
                <p className="text-white/80 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                  Stop settling for mediocre results. Let's engineer a content and lead gen machine that actually scales your business.
                </p>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-[var(--color-accent)] px-12 py-6 rounded-full font-black text-sm uppercase tracking-widest hover:bg-zinc-100 transition-all active:scale-95 shadow-2xl"
                >
                  Claim Your Free Audit
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
