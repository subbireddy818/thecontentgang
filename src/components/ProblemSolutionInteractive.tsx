"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const content = [
  {
    id: "lead-gen",
    question: "Lead Generation & Performance Marketing",
    summary: "ROI-first campaigns across Meta, Google & more.",
    details: "We don't just buy traffic; we build high-converting pipelines that turn clicks into cash. Our ROI-first campaigns are engineered to deliver predictable growth.",
    metric: "₹4.5 CR+",
    metricLabel: "Revenue in last 90 days",
  },
  {
    id: "smm",
    question: "Social Media Management",
    summary: "Build brand visibility, trust, and engagement.",
    details: "We turn your social presence into a trust-building engine. Our focus is on cinematic authority and engagement that actually drives high-ticket action.",
    metric: "5M+",
    metricLabel: "Organic Reach Delivered",
  },
  {
    id: "web",
    question: "Website Design & UI/UX",
    summary: "High-converting websites built to perform.",
    details: "Your website shouldn't just be beautiful; it should be your best salesperson. We build optimized, high-performance experiences that trigger psychological 'buy' signals.",
    metric: "3X",
    metricLabel: "Average Conversion Lift",
  },
  {
    id: "gmb",
    question: "Google My Business Optimization",
    summary: "Drive more local leads and calls.",
    details: "Dominate local search. We optimize your GMB presence to ensure you rank #1 for the searches that actually drive local phone calls and ready-to-buy leads.",
    metric: "200%",
    metricLabel: "More Local Lead Volume",
  }
];



export default function ProblemSolutionInteractive() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 px-6 bg-[#0B0B0B] border-y border-white/5" id="expertise">
      <div className="max-w-6xl mx-auto">
        
        {/* Compact Header */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tighter" style={{ fontFamily: 'var(--font-epilogue)' }}>
            <span className="text-white">Your Marketing Isn't Working. </span>
            <span className="text-[var(--color-accent)]">Here's What We Do Differently.</span>
          </h2>
        </div>

        {/* 2x2 Question Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {content.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              className={`text-left p-6 rounded-2xl transition-all duration-300 border ${
                activeIndex === idx 
                ? "bg-[var(--color-accent)] border-[var(--color-accent)] shadow-[0_15px_30px_-10px_rgba(255,59,31,0.4)]" 
                : "bg-white/5 border-white/5 hover:bg-white/[0.08]"
              }`}
            >
              <div className="flex items-center gap-5">
                <span className={`text-xs font-black transition-colors ${activeIndex === idx ? "text-white/60" : "text-zinc-700"}`}>
                  0{idx + 1}
                </span>
                <div>
                  <h3 className={`text-lg font-bold tracking-tight leading-tight transition-colors ${activeIndex === idx ? "text-white" : "text-zinc-400"}`}>
                    {item.question}
                  </h3>
                  <p className={`text-[11px] mt-1 transition-colors ${activeIndex === idx ? "text-white/80" : "text-zinc-600"}`}>
                    {item.summary}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Solution Reveal Area */}
        <div className="mb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-accent)]/5 blur-[100px] pointer-events-none" />
              
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                   <div className="flex items-center gap-3 mb-6">
                      <span className="w-8 h-[2px] bg-[var(--color-accent)]" />
                      <span className="text-[10px] font-black tracking-[0.3em] text-[var(--color-accent)] uppercase">Deep Audit</span>
                   </div>
                   <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight" style={{ fontFamily: 'var(--font-epilogue)' }}>
                      {content[activeIndex].question}
                   </h3>
                   <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-xl">
                      {content[activeIndex].details}
                   </p>
                </div>

                <div className="flex-shrink-0 text-center md:text-right border-l md:border-l-0 md:border-r border-white/10 pl-8 md:pr-12 md:pl-0">
                   <p className="text-6xl md:text-8xl font-black text-[var(--color-accent)] tracking-tighter mb-2">{content[activeIndex].metric}</p>
                   <p className="text-zinc-500 font-bold text-xs uppercase tracking-[0.4em]">{content[activeIndex].metricLabel}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
