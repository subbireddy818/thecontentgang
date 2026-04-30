"use client";

import React, { useState, useEffect, useRef } from "react";

const stats = [
  { 
    label: "Strategic Presence", 
    value: "Pan-India", 
    target: null,
    suffix: "",
    sub: "Serving 12+ States",
    icon: "public" 
  },
  { 
    label: "Brand Authority", 
    value: "60+", 
    target: 60,
    suffix: "+",
    sub: "High-Ticket Clients",
    icon: "verified_user" 
  },
  { 
    label: "Growth Velocity", 
    value: "< 90", 
    target: 90,
    prefix: "< ",
    suffix: " Days",
    sub: "Average ROI Period",
    icon: "bolt" 
  },
  { 
    label: "Content Reach", 
    value: "50M+", 
    target: 50,
    suffix: "M+",
    sub: "Organic Impressions",
    icon: "visibility" 
  }
];

function Counter({ target, duration = 2000, prefix = "", suffix = "", fallback = "" }: { target: number | null, duration?: number, prefix?: string, suffix?: string, fallback: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || target === null) return;

    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  if (target === null) return <span>{fallback}</span>;

  return (
    <div ref={countRef} className="inline-block">
      {prefix}{count}{suffix}
    </div>
  );
}

export default function TrackRecord() {
  return (
    <section className="py-24 px-6 bg-[#080808] border-t border-white/5 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-accent)]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[var(--color-accent)]/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 mb-16 text-center md:text-left">
          <div>
            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--color-accent)] mb-3">Institutional Credibility</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter" style={{ fontFamily: 'var(--font-epilogue)' }}>
              The Track Record.
            </h3>
          </div>
          <div className="hidden md:block h-px flex-1 bg-white/5 mx-12" />
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative bg-[#111111] border border-white/5 p-10 rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:border-[var(--color-accent)]/40 hover:-translate-y-2 shadow-2xl"
            >
              <div className="relative z-10 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-[var(--color-accent)]/10 flex items-center justify-center border border-[var(--color-accent)]/20 group-hover:bg-[var(--color-accent)] transition-all duration-500 shadow-[0_0_20px_rgba(255,59,31,0.1)] group-hover:shadow-[0_0_30px_rgba(255,59,31,0.3)]">
                  <span className="material-symbols-outlined text-[var(--color-accent)] group-hover:text-white transition-colors text-2xl fill-1">
                    {item.icon}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <div className="text-4xl md:text-5xl font-black text-[var(--color-accent)] tracking-tighter italic min-h-[1.2em]">
                    <Counter 
                      target={item.target} 
                      prefix={item.prefix} 
                      suffix={item.suffix} 
                      fallback={item.value} 
                    />
                  </div>
                  <div>
                    <p className="text-white text-[12px] font-black uppercase tracking-widest">{item.label}</p>
                    <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em]">{item.sub}</p>
                  </div>
                </div>
              </div>
              {/* Wavy Design Background */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 300 425" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <style>
                  {`
                    @keyframes waveA {
                      0%,100% { d: path("M0,370 C55,345 110,392 165,370 C220,348 270,388 300,370 L300,425 L0,425 Z"); }
                      50%      { d: path("M0,370 C55,392 110,348 165,373 C220,396 270,352 300,374 L300,425 L0,425 Z"); }
                    }
                    @keyframes waveB {
                      0%,100% { d: path("M0,384 C60,362 115,402 175,382 C235,362 278,396 300,382 L300,425 L0,425 Z"); }
                      50%      { d: path("M0,384 C60,404 115,364 175,387 C235,410 278,372 300,388 L300,425 L0,425 Z"); }
                    }
                    .wa { animation: waveA 4s ease-in-out infinite; }
                    .wb { animation: waveB 5.2s ease-in-out infinite; }
                  `}
                </style>
                <path className="wa" fill="rgba(255,59,31,0.09)" d="M0,370 C55,345 110,392 165,370 C220,348 270,388 300,370 L300,425 L0,425 Z"/>
                <path className="wb" fill="rgba(255,59,31,0.05)" style={{animationDelay: `${idx * 0.4}s`}} d="M0,384 C60,362 115,402 175,382 C235,362 278,396 300,382 L300,425 L0,425 Z"/>
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
