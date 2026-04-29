// High-converting Solution section with specific metrics and service blocks
export default function SolutionSection() {
  const solutions = [
    {
      title: "Lead Generation & Performance Marketing",
      metric: "₹4.5 CR+ Revenue Generated",
      submetric: "In the last 90 days alone",
      body: "ROI-first campaigns across Meta, Google & more. We don't just buy traffic; we build high-converting pipelines that turn clicks into cash.",
      icon: "payments",
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      title: "Social Media Management",
      metric: "5M+ Organic Reach",
      submetric: "Across client platforms",
      body: "Build brand visibility, trust, and engagement that drives action. We handle everything from content strategy to daily community management.",
      icon: "diversity_3",
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Website Design & UI/UX",
      metric: "3X Conversion Lift",
      submetric: "Average client result",
      body: "High-converting websites that aren't just beautiful, but built to perform. Optimized for speed, mobile responsiveness, and psychological triggers.",
      icon: "web",
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Google My Business Optimization",
      metric: "200% More Calls",
      submetric: "Local lead increase",
      body: "Drive more local leads and calls with a strong GMB presence. We ensure you rank #1 for local searches in your service area.",
      icon: "location_on",
      color: "bg-orange-50 text-orange-600"
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#0B0B0B] border-b border-white/5">
      <div className="mx-auto" style={{ maxWidth: "1280px" }}>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <span className="label-caps text-[var(--color-accent)] mb-4 block underline decoration-2 underline-offset-4">THE SOLUTION</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tighter" style={{ fontFamily: 'var(--font-epilogue)' }}>
              We build content engines that <span className="text-[var(--color-accent)]">fuel growth.</span>
            </h2>
            <p className="text-zinc-400 text-xl leading-relaxed mb-10">
              The Content Gang isn't just a video agency. We are a growth partner that combines 
              high-end creative with aggressive performance marketing to deliver predictable ROI.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <div className="bg-white/5 p-6 rounded-2xl shadow-sm border border-white/10 flex-1 min-w-[200px]">
                <p className="text-4xl font-black text-white mb-1 tracking-tighter">₹4.5 CR+</p>
                <p className="text-zinc-500 font-bold text-xs uppercase tracking-widest">Revenue Generated (90 Days)</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl shadow-sm border border-white/10 flex-1 min-w-[200px]">
                <p className="text-4xl font-black text-white mb-1 tracking-tighter">94%</p>
                <p className="text-zinc-500 font-bold text-xs uppercase tracking-widest">Client Retention Rate</p>
              </div>
            </div>
          </div>
          
          <div className="relative aspect-square md:aspect-video lg:aspect-square bg-zinc-200 rounded-[40px] overflow-hidden shadow-2xl">
             <img 
               src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHXUf0-z8lX3M4x6u7l5R5b8_v7v9v9v9v9v9v9v9v9v9v9v9v9v9v9v9v9v9v9v9v9v9v9v9v9v9v9v9v9v9v9v9v9" /* Placeholder for case study or growth graph */
               alt="Growth Strategy Session"
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent flex items-end p-10">
                <p className="text-white font-bold text-lg">"Our revenue jumped from ₹10L to ₹50L/month in just 4 months with The Content Gang." — Real Estate Client</p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((s, idx) => (
            <div key={idx} className="bg-white/5 p-10 rounded-[32px] shadow-sm border border-white/10 hover:border-white/20 transition-all duration-300 group">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div className={`w-14 h-14 ${s.color.replace('bg-', 'bg-opacity-10 bg-')} rounded-2xl flex items-center justify-center shrink-0`}>
                  <span className="material-symbols-outlined text-3xl">{s.icon}</span>
                </div>
                <div className="text-left md:text-right">
                   <p className="text-3xl font-black text-white tracking-tighter">{s.metric}</p>
                   <p className="text-[var(--color-accent)] font-bold text-xs uppercase tracking-widest">{s.submetric}</p>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight" style={{ fontFamily: 'var(--font-epilogue)' }}>
                {s.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed text-lg">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
