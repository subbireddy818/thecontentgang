"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#0B0B0B] py-24 md:py-32 overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-accent)] opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Heading */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col"
          >
            <div className="inline-flex items-center gap-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
              <span className="text-zinc-400 font-bold text-xs uppercase tracking-[0.2em]">The Content Gang</span>
            </div>
            
            <h2 
              className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight"
              style={{ fontFamily: "var(--font-epilogue)" }}
            >
              We don't just <br className="hidden md:block" />
              create content. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-orange-500">
                We build cults.
              </span>
            </h2>
          </motion.div>

          {/* Right Column: Copy & Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col justify-center"
          >
            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-medium mb-10">
              Most agencies give you vanity metrics. We give you leverage. 
              By merging cinematic production quality with ruthless, data-driven psychology, 
              we engineer content ecosystems that turn casual viewers into high-ticket clients.
              <br /><br />
              We are the silent partners behind some of the fastest-scaling personal brands and institutions.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-white/10">
              <div>
                <h4 className="text-3xl md:text-4xl font-black text-white mb-2">50M+</h4>
                <p className="text-xs uppercase tracking-wider text-zinc-500 font-bold">Views Generated</p>
              </div>
              <div>
                <h4 className="text-3xl md:text-4xl font-black text-white mb-2">$10M+</h4>
                <p className="text-xs uppercase tracking-wider text-zinc-500 font-bold">Client Revenue</p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <h4 className="text-3xl md:text-4xl font-black text-[var(--color-accent)] mb-2">100%</h4>
                <p className="text-xs uppercase tracking-wider text-zinc-500 font-bold">In-House Team</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
