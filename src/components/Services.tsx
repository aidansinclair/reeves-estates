const services = [
  {
    title: "Estate Appraisal",
    description:
      "We assess every item with the expertise of seasoned fine art and antiques specialists. You receive a comprehensive written valuation.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10">
        <rect x="6" y="6" width="28" height="28" rx="2" />
        <path d="M14 20h12M20 14v12" />
      </svg>
    ),
  },
  {
    title: "Estate Sales",
    description:
      "From organization and staging to marketing and conducting the sale, we handle every element with care and professionalism.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10">
        <path d="M8 32l6-12 6 8 6-16 6 20" />
        <path d="M8 32h24" />
      </svg>
    ),
  },
  {
    title: "Fine Art & Antiques",
    description:
      "Decades of expertise in fine art, mid-century modern furniture, and decorative antiques means your most valuable pieces are in the right hands.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10">
        <rect x="8" y="6" width="24" height="28" rx="1" />
        <rect x="12" y="10" width="16" height="12" rx="1" />
        <path d="M14 28h12" />
      </svg>
    ),
  },
  {
    title: "Private Treaty Sales",
    description:
      "For pieces that deserve a more considered approach, we connect sellers with qualified private buyers discreetly and efficiently.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10">
        <circle cx="20" cy="16" r="8" />
        <path d="M10 34c0-5.5 4.5-10 10-10s10 4.5 10 10" />
      </svg>
    ),
  },
  {
    title: "Estate Clearance",
    description:
      "Once the sale is complete, we manage the full clearance of the property — donating, recycling, and removing what remains.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10">
        <path d="M12 8h16l2 24H10L12 8z" />
        <path d="M8 8h24" />
        <path d="M16 14v12M24 14v12" />
      </svg>
    ),
  },
  {
    title: "Executor Support",
    description:
      "We work directly with estate attorneys and executors to ensure every asset is properly documented, valued, and accounted for.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10">
        <rect x="8" y="4" width="24" height="32" rx="2" />
        <path d="M14 12h12M14 18h12M14 24h8" />
      </svg>
    ),
  },
  {
    title: "Cash Buyout",
    description:
      "We purchase your entire estate outright — one transaction, one payment, fast closing. No waiting for buyers, no commission fees, no uncertainty.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10">
        <circle cx="20" cy="20" r="14" />
        <path d="M20 10v20M15 14h8c2 0 4 1.5 4 3.5S25 21 23 21h-6c-2 0-4 1.5-4 3.5S15 28 17 28h8" />
      </svg>
    ),
  },
  {
    title: "On-Site Sales",
    description:
      "For families who prefer the familiarity of their own home, we organize and manage professional on-site sales events at the property — handling all logistics, pricing, marketing, and staffing from start to finish.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10">
        <path d="M6 18l14-12 14 12" />
        <path d="M10 16v16h20V16" />
        <path d="M16 32v-10h8v10" />
      </svg>
    ),
  },
  {
    title: "Living Estates",
    description:
      "For clients who are downsizing or relocating, we handle every detail with the same care and discretion — on your timeline, at your pace.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10">
        <circle cx="14" cy="14" r="6" />
        <path d="M14 20v6" />
        <circle cx="26" cy="14" r="6" />
        <path d="M26 20v6" />
        <path d="M8 30h24" />
        <path d="M10 34h20" />
      </svg>
    ),
  },
  {
    title: "Partial Estates",
    description:
      "You don\u2019t need to sell everything. We work with you to identify the right pieces and handle their sale with the same expertise we bring to any full estate.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-10 h-10">
        <rect x="6" y="6" width="12" height="12" rx="1" />
        <rect x="22" y="6" width="12" height="12" rx="1" />
        <rect x="6" y="22" width="12" height="12" rx="1" />
        <rect x="22" y="22" width="12" height="12" rx="1" strokeDasharray="3 2" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="font-heading text-3xl md:text-5xl font-light text-charcoal mb-4">
            A Complete Estate. Completely Handled.
          </h2>
          <div className="w-16 h-[1px] bg-bronze mx-auto" />
        </div>

        <div className="flex flex-wrap justify-center gap-8 lg:gap-10">
          {services.map((service, i) => (
            <div
              key={i}
              className="fade-in-section group p-8 border border-bronze/15 hover:border-bronze/40 transition-colors w-full md:w-[calc(50%-1.25rem)]"
            >
              <div className="text-bronze mb-5">{service.icon}</div>
              <h3 className="font-heading text-xl md:text-2xl font-medium text-charcoal mb-3">
                {service.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-charcoal/65">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="/services"
            className="font-body text-xs tracking-widest uppercase text-bronze hover:text-bronze-dark transition-colors border-b border-bronze/40 pb-0.5"
          >
            View all services in detail →
          </a>
        </div>
      </div>
    </section>
  );
}
