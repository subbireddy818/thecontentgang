"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      // Random jumps for a "downloading/processing" feel
      current += Math.floor(Math.random() * 8) + 2;
      
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
        }, 600); // Hold at 100% for a moment before disappearing
      }
      setProgress(current);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-10%", filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#0B0B0B] overflow-hidden"
        >
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

          {/* Central Core UI */}
          <div className="relative flex flex-col items-center">
            {/* Outer Rotating Tech Ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute w-[280px] h-[280px] border border-white/5 rounded-full border-t-[var(--color-accent)]/40 border-b-[var(--color-accent)]/10"
            />
            {/* Inner Rotating Ring */}
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute w-[240px] h-[240px] border border-white/10 rounded-full border-l-[var(--color-accent)]/80"
            />
            
            {/* Center Data Display */}
            <div className="relative z-10 flex flex-col items-center">
              <span className="text-[var(--color-accent)] font-bold tracking-[0.3em] text-[10px] mb-2 uppercase animate-pulse">
                System Initialization
              </span>
              
              <div className="text-white font-black text-6xl md:text-8xl tracking-tighter tabular-nums" style={{ fontFamily: 'var(--font-epilogue)' }}>
                {progress}<span className="text-3xl md:text-4xl text-zinc-600">%</span>
              </div>
              
              {/* Progress Bar Container */}
              <div className="w-48 h-1 bg-white/5 rounded-full mt-6 overflow-hidden relative">
                {/* Glowing Progress Line */}
                <motion.div 
                  className="h-full bg-[var(--color-accent)] shadow-[0_0_15px_rgba(255,59,31,0.8)]"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "linear", duration: 0.1 }}
                />
              </div>

              {/* Data stream glitch text */}
              <div className="mt-8 text-zinc-500 font-mono text-[9px] uppercase tracking-widest h-4 overflow-hidden">
                {progress < 30 ? "Establishing secure connection..." : 
                 progress < 60 ? "Decrypting visual assets..." : 
                 progress < 90 ? "Loading cinematic engine..." : 
                 "System ready."}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
