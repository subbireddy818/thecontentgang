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
              className="group relative bg-[#111111]/80 backdrop-blur-md border border-white/5 p-6 rounded-2xl transition-all duration-500 hover:bg-[#161616] hover:border-[var(--color-accent)]/30 hover:shadow-[0_0_30px_rgba(255,59,31,0.05)] flex flex-col justify-between"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="material-symbols-outlined text-zinc-600 group-hover:text-[var(--color-accent)] transition-colors text-2xl font-light">
                  {item.icon}
                </span>
                <span className="text-zinc-700 text-[10px] font-mono font-bold tracking-widest">0{idx + 1}</span>
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-black text-white tracking-tighter" style={{ fontFamily: 'var(--font-epilogue)' }}>
                  <Counter 
                    target={item.target} 
                    prefix={item.prefix} 
                    suffix={item.suffix} 
                    fallback={item.value} 
                  />
                </div>
                <div>
                  <p className="text-[var(--color-accent)] text-[10px] font-black uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-zinc-500 text-xs font-medium">{item.sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
