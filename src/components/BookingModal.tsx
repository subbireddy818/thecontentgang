"use client";

import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: ""
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // REPLACE THESE WITH YOUR EMAILJS CREDENTIALS
      const SERVICE_ID = "service_9t5kfbj"; 
      const TEMPLATE_ID = "template_2l73jtm";
      const PUBLIC_KEY = "IoK7NADHy4nUF5IvP";

      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current!,
        PUBLIC_KEY
      );

      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);
    } catch (error) {
      console.error("FAILED...", error);
      alert("Booking failed. Please ensure your EmailJS account is active and keys are correct.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isMounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300" 
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#0B0B0B] border border-white/10 rounded-[32px] overflow-hidden shadow-[0_0_100px_rgba(255,59,31,0.15)] flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-500 ease-out">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-20 text-zinc-500 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Left Side - Authority Branding */}
        <div className="hidden md:flex w-full md:w-[45%] relative p-6 md:p-10 flex-col justify-between border-r border-white/5 bg-gradient-to-br from-[#111] to-[#0B0B0B]">
          
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(255,59,31,0.15),transparent_50%)]" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(255,255,255,0.05),transparent_50%)]" />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full mb-8">
               <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
               <span className="text-white font-bold text-xs uppercase tracking-widest">Strategy Session</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-[1.1] tracking-tighter" style={{ fontFamily: 'var(--font-epilogue)' }}>
              Scale Your <br/><span className="text-[var(--color-accent)]">Authority.</span>
            </h2>
            
            <p className="text-zinc-400 text-sm md:text-base mb-8 leading-relaxed font-medium max-w-sm">
              Stop chasing leads. Build a cinematic content engine that converts attention into high-ticket clients.
            </p>
          </div>
          
          <div className="relative z-10 flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm mt-4 md:mt-8">
             <img 
               src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW9ObGHHRu3q1dS-b-jZarswkGPiz2AAoYgfX-NSnnEFMM1db2-ed1R01yMNN7jfA4iWKciAX24adIt-FGbpzzrTTOxgcXbrXD_Gu5sNdAVyIy-L_Y5Sc3pcXZ-jkyN9jEpiyL_ulya7mxIGSPx28G8ABIQ5wV17MwLIeliVSKuC4uHFsVYnCqzmUqCzv-Zdlvg-1XS_3o3IZA633Ef0Yu6TvM1_zsQVmOsLQYk-smks3GV_kk_pqjFhN88yPn_rDTapglG4qfXyA" 
               alt="Senior Strategist" 
               className="w-14 h-14 rounded-full object-cover grayscale border border-white/20"
             />
             <div>
               <p className="text-white font-bold text-sm">Expert Strategist</p>
               <p className="text-[var(--color-accent)] font-bold text-xs mt-0.5">Value: ₹15,000</p>
             </div>
          </div>
        </div>

        {/* Right Side - Conversion Form */}
        <div className="w-full md:w-[55%] p-6 md:p-10 bg-[#0B0B0B] flex flex-col justify-center relative z-10">
          {isSuccess ? (
            <div className="text-center space-y-6 animate-in fade-in zoom-in duration-500 py-10">
              <div className="w-24 h-24 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(34,197,94,0.2)]">
                <span className="material-symbols-outlined text-green-500 text-5xl font-light">done_all</span>
              </div>
              <div>
                <h3 className="text-3xl font-black text-white tracking-tighter mb-2">Request Received</h3>
                <p className="text-zinc-400 font-medium">An expert will contact you within the hour to schedule your session.</p>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h3 className="text-2xl font-black text-white mb-2">Reserve Your Spot</h3>
                <p className="text-zinc-500 text-sm">Complete the form below to secure your free consultation.</p>
              </div>

              <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
                <div className="group">
                  <label className="block text-[10px] font-bold text-zinc-500 mb-2 tracking-[0.15em] uppercase transition-colors">Full Name</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-zinc-500 text-lg group-focus-within:text-white transition-colors">person</span>
                    <input 
                      name="user_name"
                      type="text" 
                      required 
                      value={formData.user_name}
                      onChange={(e) => setFormData({...formData, user_name: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white font-medium focus:bg-white/10 focus:border-[var(--color-accent)] outline-none transition-all placeholder:text-zinc-600 shadow-sm"
                      placeholder="e.g. Rahul Sharma"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-[10px] font-bold text-zinc-500 mb-2 tracking-[0.15em] uppercase transition-colors">Email Address</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-zinc-500 text-lg group-focus-within:text-white transition-colors">mail</span>
                    <input 
                      name="user_email"
                      type="email" 
                      required 
                      value={formData.user_email}
                      onChange={(e) => setFormData({...formData, user_email: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white font-medium focus:bg-white/10 focus:border-[var(--color-accent)] outline-none transition-all placeholder:text-zinc-600 shadow-sm"
                      placeholder="rahul@company.com"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-[10px] font-bold text-zinc-500 mb-2 tracking-[0.15em] uppercase transition-colors">Phone Number</label>
                  <div className="flex gap-2">
                    <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-zinc-300 font-bold text-sm flex items-center gap-2">
                      <img src="https://flagpedia.net/data/flags/h80/in.png" className="w-5 h-auto rounded-[2px] opacity-80" alt="IN" />
                      +91
                    </div>
                    <div className="relative flex-1">
                       <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-zinc-500 text-lg group-focus-within:text-white transition-colors">call</span>
                       <input 
                        name="user_phone"
                        type="tel" 
                        required 
                        inputMode="numeric"
                        value={formData.user_phone}
                        onChange={(e) => {
                          const val = e.target.value.replace(/[^0-9]/g, "");
                          setFormData({...formData, user_phone: val});
                        }}
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white font-medium focus:bg-white/10 focus:border-[var(--color-accent)] outline-none transition-all placeholder:text-zinc-600 shadow-sm"
                        placeholder="98765 43210"
                      />
                    </div>
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[var(--color-accent)] text-white py-3 rounded-xl font-black text-lg shadow-[0_10px_30px_-10px_rgba(255,59,31,0.6)] hover:brightness-110 transition-all active:scale-[0.98] mt-2 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group/btn"
                >
                  {isSubmitting ? "Processing..." : "Book My Strategy Call"}
                  {!isSubmitting && <span className="material-symbols-outlined text-xl group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>}
                </button>

                <div className="flex justify-between items-center pt-2">
                  <div className="flex items-center gap-3">
                    <input type="checkbox" id="whatsapp-modal" className="w-4 h-4 rounded border-white/20 bg-white/5 accent-[var(--color-accent)] cursor-pointer" defaultChecked />
                    <label htmlFor="whatsapp-modal" className="text-xs font-medium text-zinc-500 cursor-pointer select-none hover:text-zinc-400 transition-colors">Send me the growth map via WhatsApp</label>
                  </div>
                </div>
                

              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
