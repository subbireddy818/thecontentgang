// Pain Points — 4-column grid of problem cards
type PainPoint = {
  icon: string;
  title: string;
  body: string;
};

const points: PainPoint[] = [
  {
    icon: "cancel_schedule_send",
    title: "Posting but no leads",
    body: "Stop shouting into the void. We align your content with high-intent lead triggers.",
  },
  {
    icon: "trending_down",
    title: "Low engagement",
    body: "Your audience is bored. Our cinematic editing keeps them hooked for every second.",
  },
  {
    icon: "hub",
    title: "No content strategy",
    body: "Throwing pasta at the wall doesn't work. We build a repeatable, ROI-driven roadmap.",
  },
  {
    icon: "payments",
    title: "Wasting money on ads",
    body: "Organic content should do the heavy lifting. Stop paying for expensive cold traffic.",
  },
];

export default function PainPoints() {
  return (
    <section className="px-6 py-24" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="mx-auto" style={{ maxWidth: "1280px" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p) => (
            <div key={p.title} className="bg-zinc-50 border border-zinc-100 p-8 rounded-lg group hover:border-[#FF3B1F] transition-colors duration-300">
              <span
                className="material-symbols-outlined accent-text text-3xl mb-4 block"
                aria-hidden="true"
              >
                {p.icon}
              </span>
              <h3
                className="text-xl font-bold text-zinc-900 mb-3"
                style={{ fontFamily: "var(--font-epilogue)" }}
              >
                {p.title}
              </h3>
              <p className="text-zinc-600 text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
