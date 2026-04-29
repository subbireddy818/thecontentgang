import Image from "next/image";

// The Gang Method — stats + case preview cards
export default function GangMethod() {
  return (
    <section style={{ backgroundColor: "#F9F9F9" }} className="py-24 border-y border-zinc-100">
      <div
        className="mx-auto px-6 grid md:grid-cols-2 gap-16 items-center"
        style={{ maxWidth: "1280px" }}
      >
        {/* Left — stats */}
        <div>
          <span className="label-caps accent-text mb-4 block">THE GANG METHOD</span>
          <h2
            className="text-4xl md:text-5xl font-bold text-zinc-900 mb-10 leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-epilogue)" }}
          >
            Strategy + Content + Distribution
          </h2>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div
                className="text-5xl font-black accent-text"
                style={{ fontFamily: "var(--font-epilogue)" }}
              >
                3X
              </div>
              <p className="label-caps text-zinc-400 mt-1">MORE LEADS IN 60 DAYS</p>
            </div>
            <div>
              <div
                className="text-5xl font-black accent-text"
                style={{ fontFamily: "var(--font-epilogue)" }}
              >
                5M+
              </div>
              <p className="label-caps text-zinc-400 mt-1">VIEWS GENERATED</p>
            </div>
          </div>
        </div>

        {/* Right — preview cards */}
        <div className="grid grid-cols-1 gap-6">
          {/* Card 1 */}
          <div className="bg-white border border-zinc-100 shadow-sm flex overflow-hidden rounded-xl">
            <div className="relative w-1/3 min-h-[120px] bg-zinc-200 shrink-0">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWkh46EkTI-PQ1IqQbdzn92eBxOU8B1hR4eupbUMyiF1KFhxEZRMlhl9ORZv0LMp-Ey-A_qdwmkWmxxPfKCH99poI6B9eMgCuPkdYkfijrshdmkIwZWcJZHePoBhdNnafT3uRx6Q5ecPm_ih4YoeeVEWDUW1H-UxDlfYny8msx049bE3rqWBkq27Zx-wpv_yQIMH6_zeTIjfh0n5af1_5a7EzawIY8KEdnWRsOzOpTLbXLh8gjupv5eJtqRkNmIDh29K1Dvq1YyDY"
                alt="Luxury real estate interior with modern furniture and dramatic lighting"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 200px"
              />
            </div>
            <div className="w-2/3 p-6 flex flex-col justify-center">
              <p className="label-caps accent-text text-[10px]">REAL ESTATE</p>
              <h4
                className="text-lg font-bold text-zinc-900 mt-1"
                style={{ fontFamily: "var(--font-epilogue)" }}
              >
                Luxury Portfolio
              </h4>
              <p className="text-xs text-zinc-400 mt-1">120+ Qualified Leads</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-zinc-100 shadow-sm flex overflow-hidden rounded-xl">
            <div className="relative w-1/3 min-h-[120px] bg-zinc-200 shrink-0">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkwKS1UkzpKzHWDxpUHFf1Cj8i1DtBzrrtod5UwgQpBDFDgTQA6avPPnr6XRhdProQZBXEJ7qkPb4hfyvq9wpaL15ei8O_uhni2MwbQV-CZLe-bOEbUs00CF8ooPGZIbFiw1KlUzyniOBveqoUAd2Se435ANEUqzLV3m2BCrneb_gRJDgU8rYT6kcKiHXIQjAV9tdlgkNSm_noq--_Y0TdixWH-NCS3FDeGgLr7yxaFAuAJQsagVOSx7sZ7tJOq57fQUf8kh6J4IA"
                alt="Professional modern dental office with high-tech equipment"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 200px"
              />
            </div>
            <div className="w-2/3 p-6 flex flex-col justify-center">
              <p className="label-caps accent-text text-[10px]">MEDICAL</p>
              <h4
                className="text-lg font-bold text-zinc-900 mt-1"
                style={{ fontFamily: "var(--font-epilogue)" }}
              >
                Elite Dentistry
              </h4>
              <p className="text-xs text-zinc-400 mt-1">300% Booking Increase</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
