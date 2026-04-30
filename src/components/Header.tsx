"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

// Floating pill-shaped navbar with WHITE background and high-contrast design
export default function Header({ onOpenModal }: { onOpenModal: () => void }) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Auto-open dropdown after 5 seconds to catch attention
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsServicesOpen(true);
      setTimeout(() => setIsServicesOpen(false), 5000);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 animate-fade-up">
      <div className="bg-white border border-zinc-200 shadow-2xl rounded-full px-4 md:px-8 py-3 flex justify-between items-center">
        
        {/* Logo - Left */}
        <div className="flex items-center shrink-0">
          <Link href="/">
            <img 
              src="/Logo-e1765773867927.png" 
              alt="The Content Gang Logo" 
              className="h-8 md:h-10 w-auto"
            />
          </Link>
        </div>

        {/* Links - Center */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-10">
          <Link 
            href="/" 
            className="text-sm font-bold text-[var(--color-accent)] border-b-2 border-[var(--color-accent)] py-1 transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="text-sm font-bold text-zinc-900 hover:text-[var(--color-accent)] transition-colors"
          >
            About
          </Link>
          
          {/* Services with Connecttly Style Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button className="text-sm font-bold text-zinc-900 hover:text-[var(--color-accent)] transition-colors flex items-center gap-1 cursor-default py-1">
              Services
              <span className={`material-symbols-outlined text-xs transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}>expand_more</span>
            </button>
            
            {/* Minimalist Dropdown Menu with Old Content */}
            <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 z-[100] transform ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
              <div className="bg-white border border-zinc-100 shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-2xl p-6 w-[280px]">
                <div className="flex flex-col gap-5">
                  {[
                    { name: "Lead Generation & Ads", href: "/services/lead-gen" },
                    { name: "Social Media Management", href: "/services/social-media" },
                    { name: "Website Design & UI/UX", href: "/services/website-design" },
                    { name: "Google My Business (GMB)", href: "#services" }
                  ].map((service) => (
                    <Link 
                      key={service.name} 
                      href={service.href} 
                      className="text-[14px] font-bold text-zinc-700 hover:text-[var(--color-accent)] transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA & Mobile Menu - Right */}
        <div className="shrink-0 ml-auto flex items-center gap-4">
          <Link
            href="#contact"
            className="hidden md:block bg-[var(--color-accent)] text-white px-5 md:px-7 py-2.5 rounded-full font-bold text-xs md:text-sm shadow-[0_4px_20px_-5px_rgba(255,59,31,0.4)] hover:brightness-110 transition-all active:scale-95 cursor-pointer"
          >
            Get Started
          </Link>
          
          <button 
            className="md:hidden flex items-center justify-center w-10 h-10 text-zinc-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-[36px]">{isMobileMenuOpen ? "close" : "menu"}</span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[calc(100%+16px)] left-0 w-full bg-white border border-zinc-200 shadow-2xl rounded-[32px] p-8 md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-6">
            <Link href="/" className="text-xl font-black text-zinc-900 hover:text-[var(--color-accent)] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link href="/about" className="text-xl font-black text-zinc-900 hover:text-[var(--color-accent)] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            
            <div className="pt-4 border-t border-zinc-100">
              <div className="text-sm font-black text-zinc-400 uppercase tracking-widest mb-4">Services</div>
              <div className="flex flex-col gap-4">
                {[
                  { name: "Lead Generation & Ads", href: "/services/lead-gen" },
                  { name: "Social Media Management", href: "/services/social-media" },
                  { name: "Website Design & UI/UX", href: "/services/website-design" },
                  { name: "Google My Business (GMB)", href: "#services" }
                ].map((service) => (
                  <Link 
                    key={service.name} 
                    href={service.href} 
                    className="text-lg font-bold text-zinc-700 hover:text-[var(--color-accent)] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
