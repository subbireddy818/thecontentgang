// Highly professional Problem section identifying the "Marketing Gap"
export default function ProblemSection() {
  const problems = [
    {
      label: "THE SPENDING TRAP",
      title: "Wasting lakhs on generic ads",
      body: "Most agencies focus on 'reach' and 'impressions' while your bank account stays the same. Running ads without a high-converting content funnel is like pouring water into a leaky bucket.",
      icon: "trending_down"
    },
    {
      label: "THE AUTHORITY GAP",
      title: "Inconsistent brand presence",
      body: "If your social media looks like a ghost town or lacks cinematic quality, you're losing trust before the first call. In today's market, poor content is more expensive than no content.",
      icon: "visibility_off"
    },
    {
      label: "THE LEAD VOID",
      title: "Traffic without conversion",
      body: "Getting clicks is easy; getting high-intent leads is the challenge. Without a strategic lead-capture ecosystem, you're just paying for window shoppers who never buy.",
      icon: "person_cancel"
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#0B0B0B] border-b border-white/5">
      <div className="mx-auto" style={{ maxWidth: "1200px" }}>
        
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="label-caps text-[var(--color-accent)] mb-4 block">THE CHALLENGE</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter" style={{ fontFamily: 'var(--font-epilogue)' }}>
            Why most businesses struggle to scale in the digital age
          </h2>
          <p className="text-zinc-400 text-lg">
            It's not that you don't have a good product. It's that your marketing engine is fragmented, 
            outdated, and lacks the cinematic authority needed to command premium prices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {problems.map((p, idx) => (
            <div key={idx} className="relative group">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-white/5 border border-white/10 rounded-2xl group-hover:bg-[var(--color-accent-dim)] transition-colors duration-300">
                <span className="material-symbols-outlined text-zinc-500 group-hover:text-[var(--color-accent)] text-3xl transition-colors">
                  {p.icon}
                </span>
              </div>
              <p className="label-caps text-zinc-500 mb-2">{p.label}</p>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight" style={{ fontFamily: 'var(--font-epilogue)' }}>
                {p.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Professional "Insight" Box */}
        <div className="mt-20 p-10 bg-zinc-900 rounded-3xl text-white flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h4 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-epilogue)' }}>
              The Hard Truth: Content isn't a luxury anymore.
            </h4>
            <p className="text-zinc-400 leading-relaxed">
              In 2024, your content is your primary salesperson. If it isn't cinematic, authoritative, 
              and data-driven, you're effectively invisible to your high-ticket clients.
            </p>
          </div>
          <div className="shrink-0">
             <div className="bg-[var(--color-accent)] px-8 py-4 rounded-xl font-black text-xl italic tracking-tighter shadow-lg">
               CONTENT IS REVENUE
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
