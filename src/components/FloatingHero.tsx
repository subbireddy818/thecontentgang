"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useSpring, useMotionValue } from "framer-motion";
import Particles from "./Particles";

// Platform Icon Component with repulsion logic
const FloatingIcon = ({ logo, color, initialX, initialY }: { logo: string; color: string; initialX: number; initialY: number }) => {
  const x = useSpring(initialX, { stiffness: 50, damping: 20 });
  const y = useSpring(initialY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - (x.get() as number);
      const dy = e.clientY - (y.get() as number);
      const distance = Math.sqrt(dx * dx + dy * dy);
      const radius = 250; // Repulsion radius

      if (distance < radius && distance > 0) {
        const force = (radius - distance) / radius;
        const pushX = (dx / distance) * -120 * force;
        const pushY = (dy / distance) * -120 * force;
        x.set(initialX + pushX);
        y.set(initialY + pushY);
      } else {
        x.set(initialX);
        y.set(initialY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [initialX, initialY, x, y]);

  // Gentle drift animation
  const [driftX, setDriftX] = useState(0);
  const [driftY, setDriftY] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDriftX(Math.sin(Date.now() / 2000) * 15);
      setDriftY(Math.cos(Date.now() / 2500) * 15);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      style={{ x, y, left: driftX, top: driftY }}
      className="absolute p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/10 md:bg-white/5 backdrop-blur-md border border-white/20 md:border-white/10 shadow-2xl flex items-center justify-center pointer-events-none z-0 group"
    >
      <img 
        src={logo} 
        alt="Platform" 
        className="w-5 h-5 md:w-6 md:h-6 object-contain transition-all duration-300" 
        style={{ filter: `drop-shadow(0 0 12px ${color})` }}
      />
    </motion.div>
  );
};

export default function FloatingHero({ onOpenModal }: { onOpenModal: () => void }) {
  const [icons, setIcons] = useState<any[]>([]);

  useEffect(() => {
    const platformLogos = [
      { logo: "/logos/youtube.svg", color: "#FF0000" },
      { logo: "/logos/instagram.svg", color: "#E4405F" },
      { logo: "/logos/facebook.svg", color: "#1877F2" },
      { logo: "/logos/linkedin.svg", color: "#0A66C2" },
      { logo: "/logos/x.svg", color: "#FFFFFF" },
      { logo: "/logos/whatsapp.svg", color: "#25D366" },
      { logo: "/logos/tiktok.svg", color: "#00F2EA" },
      { logo: "/logos/reddit.svg", color: "#FF4500" },
      { logo: "/logos/pinterest.svg", color: "#BD081C" },
      { logo: "/logos/snapchat.svg", color: "#FFFC00" },
      { logo: "/logos/google.svg", color: "#4285F4" },
      { logo: "/logos/meta.svg", color: "#0668E1" },
    ];

    // Create 18 icons with random positions
    const newIcons = Array.from({ length: 18 }).map((_, i) => {
      const platform = platformLogos[i % platformLogos.length];
      return {
        ...platform,
        id: i,
        x: Math.random() * 90 + 5 + "%",
        y: Math.random() * 80 + 10 + "%",
      };
    });
    setIcons(newIcons);
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-[#0B0B0B] overflow-hidden flex flex-col items-center justify-center px-6 pt-32">
      
      {/* Particles Background */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <Particles
          particleColors={["#ffffff", "#FF3B1F"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Background Floating Icons */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-80 md:opacity-40 pointer-events-none">
        {icons.map((icon) => (
          <div key={icon.id} className="absolute" style={{ left: icon.x, top: icon.y }}>
            <FloatingIcon logo={icon.logo} color={icon.color} initialX={0} initialY={0} />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        


        {/* Headline */}
        <h1 
          className="text-6xl md:text-9xl font-black text-white mb-10 leading-[0.85] tracking-tighter animate-fade-up animation-delay-100"
          style={{ fontFamily: 'var(--font-epilogue)' }}
        >
          Scale Your <span className="text-[var(--color-accent)]">Authority</span> with Video
        </h1>

        {/* Sub-copy */}
        <p className="text-zinc-400 text-lg md:text-2xl mb-14 max-w-3xl mx-auto leading-relaxed animate-fade-up animation-delay-200">
          We build end-to-end content engines for Founders and Real Estate Leaders. 
          Stop chasing leads; <span className="text-white font-bold">start attracting them</span> with cinematic authority.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-up animation-delay-300">
          <Link
            href="#contact"
            className="w-full sm:w-auto bg-[var(--color-accent)] text-white px-12 py-6 rounded-2xl font-black text-xl shadow-[0_15px_60px_-15px_rgba(255,59,31,0.6)] hover:scale-105 active:scale-95 transition-all cursor-pointer text-center"
          >
            Book Your Strategy Call
          </Link>
          <a
            href="#work"
            className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-white/10 transition-all text-center"
          >
            View Case Studies
          </a>
        </div>
      </div>

      {/* Mouse Interaction Note */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-zinc-600 text-[10px] font-bold uppercase tracking-[0.4em] flex flex-col items-center gap-4">
        <span>Cursor Interactivity Enabled</span>
        <div className="w-px h-12 bg-gradient-to-b from-zinc-600 to-transparent" />
      </div>
    </section>
  );
}
