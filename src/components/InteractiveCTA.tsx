"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";

const FloatingIcon = ({ 
  logo, 
  x, 
  y, 
  size, 
  blur, 
  depth, 
  mouseX, 
  mouseY,
  delay
}: any) => {
  const xOffset = useSpring(0, { stiffness: 50, damping: 20 });
  const yOffset = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    return mouseX.onChange((v: number) => {
      xOffset.set(v / depth);
    });
  }, [mouseX, depth, xOffset]);

  useEffect(() => {
    return mouseY.onChange((v: number) => {
      yOffset.set(v / depth);
    });
  }, [mouseY, depth, yOffset]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.8, type: "spring" }}
      viewport={{ once: true }}
      className="absolute flex items-center justify-center rounded-[10px] md:rounded-2xl bg-[#111111] border border-white/10 shadow-2xl w-[var(--mobile-size)] h-[var(--mobile-size)] md:w-[var(--desktop-size)] md:h-[var(--desktop-size)]"
      style={{
        '--desktop-size': `${size}px`,
        '--mobile-size': `${size * 0.65}px`,
        filter: blur ? `blur(${blur}px)` : 'none',
        left: x,
        top: y,
        x: xOffset,
        y: yOffset,
        zIndex: blur ? 10 : 20,
      }}
    >
      <img src={logo} alt="Platform Icon" className="w-1/2 h-1/2 object-contain" />
    </motion.div>
  );
};

export default function InteractiveCTA({ onOpenModal }: { onOpenModal?: () => void }) {
  const containerRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const icons = [
    { logo: "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg", size: 80, x: "12%", y: "20%", blur: 0, depth: 15, delay: 0.1 },
    { logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg", size: 60, x: "8%", y: "45%", blur: 0, depth: -25, delay: 0.2 },
    { logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg", size: 50, x: "18%", y: "80%", blur: 0, depth: 20, delay: 0.3 },
    { logo: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg", size: 70, x: "82%", y: "28%", blur: 0, depth: -15, delay: 0.4 },
    { logo: "https://cdn.simpleicons.org/meta/0668E1", size: 65, x: "85%", y: "65%", blur: 0, depth: 30, delay: 0.5 },
    { logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg", size: 60, x: "78%", y: "85%", blur: 0, depth: -20, delay: 0.6 },
    { logo: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg", size: 50, x: "5%", y: "30%", blur: 0, depth: 35, delay: 0.7 },
    { logo: "https://cdn.simpleicons.org/reddit/FF4500", size: 70, x: "88%", y: "45%", blur: 0, depth: 18, delay: 0.8 },
    { logo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg", size: 55, x: "25%", y: "15%", blur: 0, depth: -30, delay: 0.9 },
    { logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg", size: 65, x: "70%", y: "15%", blur: 0, depth: 40, delay: 1.0 },
    { logo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Twitch_Glitch_Logo_Purple.svg", size: 45, x: "30%", y: "75%", blur: 0, depth: -22, delay: 1.1 },
    { logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg", size: 75, x: "65%", y: "80%", blur: 0, depth: 25, delay: 1.2 },
    { logo: "https://cdn.simpleicons.org/discord/5865F2", size: 55, x: "15%", y: "60%", blur: 0, depth: -18, delay: 1.3 },
    { logo: "https://cdn.simpleicons.org/x/FFFFFF", size: 50, x: "10%", y: "35%", blur: 0, depth: 20, delay: 1.4 },
    { logo: "https://cdn.simpleicons.org/quora/B92B27", size: 65, x: "92%", y: "60%", blur: 0, depth: -30, delay: 1.5 },
    { logo: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg", size: 40, x: "40%", y: "10%", blur: 3, depth: 50, delay: 1.4 },
    { logo: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg", size: 90, x: "60%", y: "90%", blur: 2, depth: -40, delay: 1.5 },
    { logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg", size: 35, x: "92%", y: "18%", blur: 1, depth: 28, delay: 1.6 },
    { logo: "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg", size: 50, x: "8%", y: "90%", blur: 2, depth: -35, delay: 1.7 },
    { logo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg", size: 45, x: "50%", y: "85%", blur: 3, depth: 45, delay: 1.8 },
  ];

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[800px] w-full bg-black overflow-hidden flex flex-col items-center justify-center px-6 py-32 border-t border-white/5"
    >
      {/* Light Shade Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />

      {/* Floating Icons */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-60 md:opacity-100">
        {icons.map((icon, idx) => (
          <FloatingIcon
            key={idx}
            {...icon}
            mouseX={mouseX}
            mouseY={mouseY}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-3xl mx-auto flex flex-col items-center px-4">
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight"
          style={{ fontFamily: "var(--font-epilogue)" }}
        >
          Build An Audience That <br className="hidden md:block" /><span className="text-[var(--color-accent)]">Actually Converts.</span>
        </h1>
        
        <p className="text-zinc-400 text-base md:text-lg lg:text-xl mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
          Stop blending in. We engineer cinematic content ecosystems designed to scale your brand, command attention, and dominate your industry.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <button
            onClick={onOpenModal}
            className="bg-[var(--color-accent)] text-white px-12 py-4 rounded-full font-bold shadow-[0_10px_30px_-10px_rgba(255,59,31,0.6)] hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer text-xl"
          >
            Get Started
            <span className="material-symbols-outlined text-2xl">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
}
