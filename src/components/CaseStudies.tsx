"use client";

import Image from "next/image";
import { useState } from "react";

const studies = [
  {
    id: "case-1",
    label: "Real Estate Growth",
    badge: "₹1.2 CR Revenue",
    description: "Scaled a luxury real estate developer from zero to 15+ qualified site visits per week through cinematic video funnels.",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWkh46EkTI-PQ1IqQbdzn92eBxOU8B1hR4eupbUMyiF1KFhxEZRMlhl9ORZv0LMp-Ey-A_qdwmkWmxxPfKCH99poI6B9eMgCuPkdYkfijrshdmkIwZWcJZHePoBhdNnafT3uRx6Q5ecPm_ih4YoeeVEWDUW1H-UxDlfYny8msx049bE3rqWBkq27Zx-wpv_yQIMH6_zeTIjfh0n5af1_5a7EzawIY8KEdnWRsOzOpTLbXLh8gjupv5eJtqRkNmIDh29K1Dvq1YyDY"
  },
  {
    id: "case-2",
    label: "Interior Design Authority",
    badge: "500K+ Organic Reach",
    description: "Built a dominant presence for a boutique interior studio, generating high-ticket leads without spending on ads.",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkwKS1UkzpKzHWDxpUHFf1Cj8i1DtBzrrtod5UwgQpBDFDgTQA6avPPnr6XRhdProQZBXEJ7qkPb4hfyvq9wpaL15ei8O_uhni2MwbQV-CZLe-bOEbUs00CF8ooPGZIbFiw1KlUzyniOBveqoUAd2Se435ANEUqzLV3m2BCrneb_gRJDgU8rYT6kcKiHXIQjAV9tdlgkNSm_noq--_Y0TdixWH-NCS3FDeGgLr7yxaFAuAJQsagVOSx7sZ7tJOq57fQUf8kh6J4IA"
  },
  {
    id: "case-3",
    label: "Medical Practice Scaling",
    badge: "300% More Calls",
    description: "Optimized GMB and implemented local video ads for a dental clinic, resulting in a consistent flood of new patient appointments.",
    thumbnail: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "case-4",
    label: "E-Commerce Scaling",
    badge: "10X ROAS",
    description: "Revamped the ad strategy and video creatives for a premium D2C brand, scaling their monthly revenue by 400% in 90 days.",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  }
];

export default function CaseStudies() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section className="py-24 bg-[#0B0B0B]" id="work">
      <div className="px-6 mx-auto" style={{ maxWidth: "1280px" }}>
        <h2
          className="text-4xl md:text-6xl font-black text-white mb-12 tracking-tighter text-center"
          style={{ fontFamily: "var(--font-epilogue)" }}
        >
          Recent Success Stories
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {studies.map((s) => {
            const isExpanded = expandedId === s.id;
            return (
              <div
                key={s.id}
                onClick={() => toggleExpand(s.id)}
                className="bg-white/5 border border-white/10 rounded-xl overflow-hidden group cursor-pointer hover:border-[#FF3B1F] transition-colors duration-300 flex flex-col h-full"
              >
                <div className="relative aspect-[4/3] md:aspect-video bg-zinc-800 overflow-hidden shrink-0">
                  <Image
                    src={s.thumbnail}
                    alt={s.label}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 md:p-8 flex flex-col flex-1">
                  <div className="flex flex-col xl:flex-row justify-between items-start mb-3 md:mb-4 gap-2 xl:gap-0">
                    <h4
                      className="text-base md:text-2xl font-bold text-white leading-tight"
                      style={{ fontFamily: "var(--font-epilogue)" }}
                    >
                      {s.label}
                    </h4>
                    <span className="bg-[#FF3B1F] text-white text-[9px] md:text-[10px] font-bold px-2 py-1 rounded shrink-0">
                      {s.badge}
                    </span>
                  </div>
                  <p className={`text-zinc-400 text-xs md:text-sm leading-relaxed mb-4 transition-all duration-300 ${isExpanded ? '' : 'line-clamp-2'}`}>
                    {s.description}
                  </p>
                  <div className="mt-auto pt-2">
                    <span className="inline-flex items-center gap-1 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-[var(--color-accent)] group-hover:text-white transition-colors">
                      {isExpanded ? "Show Less" : "View More"}
                      <span className={`material-symbols-outlined text-sm transition-transform ${isExpanded ? '-rotate-90' : 'group-hover:translate-x-1'}`}>
                        {isExpanded ? 'expand_less' : 'arrow_forward'}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
