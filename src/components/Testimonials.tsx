"use client";

import React, { useRef } from "react";
import Link from "next/link";

const testimonials = [
  {
    name: "Marcus Thorne",
    role: "Founder, Thorne Capital",
    content: "The Content Gang took my brand from being just another consultant to the authority in my niche. Our inbound leads grew by 400% in the first 90 days.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAW9ObGHHRu3q1dS-b-jZarswkGPiz2AAoYgfX-NSnnEFMM1db2-ed1R01yMNN7jfA4iWKciAX24adIt-FGbpzzrTTOxgcXbrXD_Gu5sNdAVyIy-L_Y5Sc3pcXZ-jkyN9jEpiyL_ulya7mxIGSPx28G8ABIQ5wV17MwLIeliVSKuC4uHFsVYnCqzmUqCzv-Zdlvg-1XS_3o3IZA633Ef0Yu6TvM1_zsQVmOsLQYk-smks3GV_kk_pqjFhN88yPn_rDTapglG4qfXyA",
    stars: 5
  },
  {
    name: "Elena Vance",
    role: "Global Real Estate Advisor",
    content: "Finally, a team that understands high-production value isn’t just about pixels—it’s about the psychological narrative. Essential for serious players.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC48IiMVn-JYJ8G_JYuhR--p1uVqndiE-hYoL-KN76g-9u8ECTyqS7ZDlkAOjjbvPcYXQ9jruJfQ7C8C0llGf_AZo_Qp2FBGdOKCvIrSWlNIH9aGs7hiKGMaZBrP0nylr0ByXcSUbOC9a1MzUp-Fyu6PQD-Da4FRDyQ761LpUVq0CmMGYBdzKvTnvfVedLXJYrp-AcDy8NAEKCkpJ6iU9gLoxhjJW3SD6lYiozRb5J_z_mvzvGRoEDJE6uDzTsDqtAuffBJP6_ECHQ",
    stars: 5
  },
  {
    name: "Julian Thorne",
    role: "Founder, Thorne & Co.",
    content: "They don't just make videos; they build ecosystems where authority thrives and conversion is inevitable. A surgical approach to content.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAH4MFwF4L38vPhF3S5ZeTqZ-ZFp30bzHw6BUh-yXOSze0t7DBPiWjba4h7jbpa3dTY7j3wqgW2DXM2Ww9SR7fHJELPbZlmua17YRzYMirxNHwXAfoeIABsodtbIKBx5Hb0NvGouJHa-CnS3QHj31qi6ifQm2VHtxGbB-xAkMrrmiUu2odAmv973mo_KVddeaARJHGMZ47_519157yxT2QEShOWmPk0gE9D5LsgCWI6q_2rOxPeZTiQpu05f9Ef5uzIFjihHDvqKYY",
    stars: 5
  },
  {
    name: "Sarah Jenkins",
    role: "Elite Executive Coach",
    content: "My digital presence now matches the quality of my offline service. THE GANG has an uncanny ability to translate silent authority into visual dominance.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400",
    stars: 5
  },
  {
    name: "David Chen",
    role: "FinTech CEO",
    content: "The ROI was clear within the first month. They understood our complex product and distilled it into a narrative that institutional investors actually respect.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
    stars: 5
  },
  {
    name: "Aria Moretti",
    role: "Luxury Brand Director",
    content: "Surgical precision in every frame. They didn't just deliver a video; they delivered a market-leading positioning strategy that transformed our brand.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400",
    stars: 5
  }
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="py-32 bg-[#0B0B0B] relative overflow-hidden" id="testimonials">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-20 text-center relative">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter" style={{ fontFamily: 'var(--font-epilogue)' }}>
            Testimonials
          </h2>
          <div className="w-24 h-1.5 bg-[var(--color-accent)] mx-auto mt-6"></div>
        </div>

        {/* Carousel Wrapper with Side Controls */}
        <div className="relative px-4 md:px-16">
          {/* Left Arrow */}
          <button 
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/10 bg-[#111111]/80 backdrop-blur-md flex items-center justify-center text-white hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all z-20 group hidden md:flex shadow-2xl"
          >
            <span className="material-symbols-outlined group-active:-translate-x-1 transition-transform">arrow_back</span>
          </button>

          {/* Horizontal Scroll Container */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((t, i) => (
              <div 
                key={i} 
                className="min-w-full md:min-w-[calc(33.333%-16px)] snap-start h-auto"
              >
                <div className="bg-[#111111] border border-white/5 rounded-[2.5rem] p-10 h-full flex flex-col justify-between hover:border-[var(--color-accent)]/30 transition-all duration-500 group relative">
                  <div className="absolute -top-4 -right-2 text-[120px] font-black text-white/5 leading-none select-none pointer-events-none group-hover:text-[var(--color-accent)]/5 transition-colors">"</div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-1 mb-8">
                      {[...Array(t.stars)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-[var(--color-accent)] text-[10px] fill-1">star</span>
                      ))}
                    </div>
                    <p className="text-xl md:text-2xl font-black text-white leading-tight tracking-tight mb-10 italic" style={{ fontFamily: 'var(--font-epilogue)' }}>
                      "{t.content}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4 pt-8 border-t border-white/5 relative z-10">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 bg-black flex-shrink-0">
                      <img 
                        src={t.image} 
                        alt={t.name} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-white uppercase tracking-tighter leading-none">{t.name}</h4>
                      <p className="text-[9px] font-black text-[var(--color-accent)] uppercase tracking-widest mt-1.5">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button 
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/10 bg-[#111111]/80 backdrop-blur-md flex items-center justify-center text-white hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all z-20 group hidden md:flex shadow-2xl"
          >
            <span className="material-symbols-outlined group-active:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
}
