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
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isMounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300" 
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-white rounded-[40px] overflow-hidden shadow-[0_30px_100px_-20px_rgba(0,0,0,0.3)] flex flex-col md:flex-row animate-in fade-in zoom-in duration-500 ease-out">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 z-10 text-zinc-300 hover:text-zinc-500 transition-colors p-2 hover:bg-zinc-100 rounded-full"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        {/* Left Side - Authority Branding */}
        <div className="w-full md:w-[42%] bg-[#F9F9F9] p-6 md:p-10 flex flex-col items-center text-center border-r border-zinc-100">
          <div className="relative mb-6">
             <div className="absolute inset-0 bg-[var(--color-accent)] opacity-20 blur-3xl rounded-full scale-125" />
             <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-[4px] border-white shadow-xl">
               <img 
                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW9ObGHHRu3q1dS-b-jZarswkGPiz2AAoYgfX-NSnnEFMM1db2-ed1R01yMNN7jfA4iWKciAX24adIt-FGbpzzrTTOxgcXbrXD_Gu5sNdAVyIy-L_Y5Sc3pcXZ-jkyN9jEpiyL_ulya7mxIGSPx28G8ABIQ5wV17MwLIeliVSKuC4uHFsVYnCqzmUqCzv-Zdlvg-1XS_3o3IZA633Ef0Yu6TvM1_zsQVmOsLQYk-smks3GV_kk_pqjFhN88yPn_rDTapglG4qfXyA" 
                 alt="Senior Strategist" 
                 className="w-full h-full object-cover grayscale brightness-90 contrast-110"
               />
             </div>
          </div>
          
          <h2 className="text-xl md:text-2xl font-black text-zinc-900 mb-2 leading-[1.1] tracking-tighter" style={{ fontFamily: 'var(--font-epilogue)' }}>
            Book a free strategy call
          </h2>
          <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm mb-6 border border-zinc-100">
             <span className="text-[var(--color-accent)] font-black text-sm tracking-tight">Worth ₹15,000</span>
          </div>
          
          <div className="space-y-4 text-left w-full">
            {[
              "Strategist will call you in 1 hour",
              "Personalised marketing plan",
              "No obligations. Just expert help."
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-white border border-zinc-100 flex items-center justify-center shadow-sm">
                   <span className="material-symbols-outlined text-[var(--color-accent)] text-xs font-bold">check</span>
                </div>
                <p className="text-zinc-600 text-xs md:text-sm font-bold leading-tight">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Conversion Form */}
        <div className="w-full md:w-[58%] p-8 md:p-12 bg-white flex flex-col justify-center">
          {isSuccess ? (
            <div className="text-center space-y-4 animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-symbols-outlined text-green-500 text-5xl font-bold">check_circle</span>
              </div>
              <h3 className="text-2xl font-black text-zinc-900 tracking-tighter">Strategist Assigned!</h3>
              <p className="text-zinc-500 font-bold text-sm">We'll call you on your provided number within 60 minutes.</p>
            </div>
          ) : (
            <form ref={formRef} className="space-y-5" onSubmit={handleSubmit}>
              <div className="group">
                <label className="block text-[10px] font-black text-zinc-400 mb-2 tracking-[0.2em] uppercase group-focus-within:text-[var(--color-accent)] transition-colors">Full Name</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-zinc-300 text-xl group-focus-within:text-[var(--color-accent)] transition-colors">person</span>
                  <input 
                    name="user_name"
                    type="text" 
                    required 
                    value={formData.user_name}
                    onChange={(e) => setFormData({...formData, user_name: e.target.value})}
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl pl-12 pr-4 py-3.5 text-zinc-900 font-bold focus:bg-white focus:border-[var(--color-accent)] focus:ring-4 focus:ring-[var(--color-accent-dim)] outline-none transition-all placeholder:text-zinc-300 shadow-sm"
                    placeholder="e.g. Rahul Sharma"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-[10px] font-black text-zinc-400 mb-2 tracking-[0.2em] uppercase group-focus-within:text-[var(--color-accent)] transition-colors">Email Address</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-zinc-300 text-xl group-focus-within:text-[var(--color-accent)] transition-colors">mail</span>
                  <input 
                    name="user_email"
                    type="email" 
                    required 
                    pattern=".*@gmail\.com$"
                    title="Please use a @gmail.com address"
                    value={formData.user_name.includes('@') ? formData.user_email : formData.user_email} // trigger re-render if needed
                    onChange={(e) => setFormData({...formData, user_email: e.target.value})}
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl pl-12 pr-4 py-3.5 text-zinc-900 font-bold focus:bg-white focus:border-[var(--color-accent)] focus:ring-4 focus:ring-[var(--color-accent-dim)] outline-none transition-all placeholder:text-zinc-300 shadow-sm"
                    placeholder="rahul@gmail.com"
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-[10px] font-black text-zinc-400 mb-2 tracking-[0.2em] uppercase group-focus-within:text-[var(--color-accent)] transition-colors">Phone Number</label>
                <div className="flex gap-2">
                  <div className="bg-zinc-50 border border-zinc-100 rounded-2xl px-4 py-3.5 text-zinc-900 font-black text-xs flex items-center gap-1 shadow-sm">
                    <img src="https://flagpedia.net/data/flags/h80/in.png" className="w-4 h-auto rounded-sm opacity-80" alt="IN" />
                    +91
                  </div>
                  <div className="relative flex-1">
                     <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-zinc-300 text-xl group-focus-within:text-[var(--color-accent)] transition-colors">call</span>
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
                      className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl pl-12 pr-4 py-3.5 text-zinc-900 font-bold focus:bg-white focus:border-[var(--color-accent)] focus:ring-4 focus:ring-[var(--color-accent-dim)] outline-none transition-all placeholder:text-zinc-300 shadow-sm"
                      placeholder="98765 43210"
                    />
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[var(--color-accent)] text-white py-4 rounded-[20px] font-black text-lg shadow-[0_20px_40px_-10px_rgba(255,59,31,0.5)] hover:scale-[1.02] hover:brightness-110 transition-all active:scale-95 mt-4 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Book My Free Call"}
                {!isSubmitting && <span className="material-symbols-outlined text-2xl">arrow_forward</span>}
              </button>

              <div className="flex items-center gap-3 px-1">
                <input type="checkbox" id="whatsapp-modal" className="w-4 h-4 rounded-md accent-[var(--color-accent)] cursor-pointer" defaultChecked />
                <label htmlFor="whatsapp-modal" className="text-[10px] font-bold text-zinc-400 cursor-pointer select-none">Send me the growth map on WhatsApp</label>
              </div>

              <p className="text-center text-[9px] font-bold text-zinc-300 pt-4 flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-sm">lock_person</span>
                100% Secure & Private.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
