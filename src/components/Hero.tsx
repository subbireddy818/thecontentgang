import Link from "next/link";

export default function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section 
      className="relative px-6 pt-48 pb-24 flex flex-col items-center text-center mx-auto bg-[#0B0B0B]" 
      style={{ maxWidth: "100%", width: "100%" }}
    >
      {/* Subtle Radial Gradient for depth */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,59,31,0.05)_0%,transparent_70%)]" />
      
      <div className="relative z-10 flex flex-col items-center max-w-[1050px] mx-auto">
      
      {/* Main Headline */}
      <h1
        className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.05] tracking-tight animate-fade-up animation-delay-100"
        style={{ fontFamily: "var(--font-epilogue)" }}
      >
        Build Your Authority with <span className="text-[var(--color-accent)]">High-Impact</span> Video Systems
      </h1>

      {/* Sub-copy */}
      <p className="text-lg md:text-2xl text-zinc-400 mb-12 max-w-4xl leading-relaxed animate-fade-up animation-delay-200 font-medium">
        We turn Founders, Real Estate Leaders, and Professional Service Providers into category authorities 
        through cinematic content that <span className="text-white font-bold underline decoration-[var(--color-accent)]">actually converts.</span>
      </p>

      {/* CTA row */}
      <div className="flex flex-col sm:flex-row gap-5 w-full justify-center animate-fade-up animation-delay-300">
        <Link
          href="#contact"
          className="bg-[var(--color-accent)] text-white px-10 py-5 font-bold rounded-xl text-center shadow-[0_10px_40px_-10px_rgba(255,59,31,0.5)] hover:scale-105 transition-all flex items-center justify-center gap-2 cursor-pointer text-lg"
        >
          Book a Free Strategy Call
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
        <a
          href="#work"
          className="bg-white text-zinc-900 border border-zinc-200 px-10 py-5 font-bold rounded-xl text-center shadow-sm hover:bg-zinc-50 transition-all text-lg"
        >
          View Case Studies
        </a>
      </div>

      {/* Feature Pills */}
      <div className="mt-12 flex flex-wrap justify-center gap-4 animate-fade-up animation-delay-300">
        {[
          { icon: "movie", text: "Professional Scripting" },
          { icon: "videocam", text: "4K Cinematic Filming" },
          { icon: "edit", text: "Viral Style Editing" },
          { icon: "share", text: "Multi-Platform Growth" }
        ].map((f) => (
          <div key={f.text} className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-zinc-400 font-bold text-xs uppercase tracking-tight">
            <span className="material-symbols-outlined text-sm accent-text">{f.icon}</span>
            {f.text}
          </div>
        ))}
      </div>
    </div>
  </section>
  );
}
