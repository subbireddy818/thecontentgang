const services = [
  {
    title: "Lead Generation & Ads",
    body: "ROI-first performance marketing across Meta, Google & more. We build high-converting pipelines that turn clicks into cash.",
    icon: "ads_click",
    href: "/services/lead-gen"
  },
  {
    title: "Social Media Management",
    body: "Build brand visibility, trust, and engagement that drives action. Cinematic authority that turns followers into high-ticket clients.",
    icon: "campaign",
    href: "/services/social-media"
  },
  {
    title: "Website Design & UI/UX",
    body: "High-converting websites that aren't just beautiful, but built to perform. Optimized for maximum lead capture.",
    icon: "devices",
    href: "/services/website-design"
  },
  {
    title: "Google My Business (GMB)",
    body: "Drive more local leads and calls with a dominant GMB presence. We ensure you rank #1 for high-intent local search terms.",
    icon: "near_me",
    href: "#services"
  }
];

export default function Services() {
  return (
    <section className="py-24 px-6 bg-[#0B0B0B]" id="services">
      <div className="mx-auto" style={{ maxWidth: "1280px" }}>
        <h2
          className="text-4xl md:text-5xl font-black text-white text-center mb-16 tracking-tight"
          style={{ fontFamily: "var(--font-epilogue)" }}
        >
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white/5 border border-white/10 p-10 rounded-2xl hover:border-[#FF3B1F] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <span className="material-symbols-outlined text-3xl text-[var(--color-accent)] mb-4 block group-hover:scale-110 transition-transform">
                  {s.icon}
                </span>
                <h3
                  className="text-xl font-bold text-white mb-4 group-hover:text-[var(--color-accent)] transition-colors"
                  style={{ fontFamily: "var(--font-epilogue)" }}
                >
                  {s.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8">{s.body}</p>
              </div>
              
              <a 
                href={s.href}
                className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[var(--color-accent)] group/link"
              >
                Know More
                <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
