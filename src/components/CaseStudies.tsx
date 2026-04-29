import Image from "next/image";

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
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHXUf0-z8lX3M4x6u7l5R5b8_v7v9v9v9v9v9v9v9v9v9v9v9v9v9v9v9v9v9v9v9v9v9v9v9v9v9v9v9v9v9v9v9v9"
  }
];

export default function CaseStudies() {
  return (
    <section className="py-24 bg-[#0B0B0B]" id="work">
      <div className="px-6 mx-auto" style={{ maxWidth: "1280px" }}>
        <h2
          className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight text-center"
          style={{ fontFamily: "var(--font-epilogue)" }}
        >
          Recent Success Stories
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {studies.map((s) => (
            <div
              key={s.id}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden group cursor-pointer hover:border-[#FF3B1F] transition-colors duration-300"
            >
              <div className="relative aspect-video bg-zinc-800">
                <Image
                  src={s.thumbnail}
                  alt={s.label}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h4
                    className="text-2xl font-bold text-white"
                    style={{ fontFamily: "var(--font-epilogue)" }}
                  >
                    {s.label}
                  </h4>
                  <span className="bg-[#FF3B1F] text-white text-[10px] font-bold px-2 py-1 rounded">
                    {s.badge}
                  </span>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
