const services = [
  {
    title: "Estate Appraisal",
    description:
      "We assess every item with the expertise of seasoned fine art and antiques specialists. You receive a comprehensive written valuation.",
  },
  {
    title: "Estate Sales",
    description:
      "From organization and staging to marketing and conducting the sale, we handle every element with care and professionalism.",
  },
  {
    title: "Fine Art & Antiques",
    description:
      "Decades of expertise in fine art, mid-century modern furniture, and decorative antiques means your most valuable pieces are in the right hands.",
  },
  {
    title: "Private Treaty Sales",
    description:
      "For pieces that deserve a more considered approach, we connect sellers with qualified private buyers discreetly and efficiently.",
  },
  {
    title: "Estate Clearance",
    description:
      "Once the sale is complete, we manage the full clearance of the property — donating, recycling, and removing what remains.",
  },
  {
    title: "Executor Support",
    description:
      "We work directly with estate attorneys and executors to ensure every asset is properly documented, valued, and accounted for.",
  },
  {
    title: "Cash Buyout",
    description:
      "We purchase your entire estate outright — one transaction, one payment, fast closing. No waiting for buyers, no commission fees, no uncertainty.",
  },
  {
    title: "On-Site Sales",
    description:
      "For families who prefer the familiarity of their own home, we organize and manage professional on-site sales events at the property — handling all logistics, pricing, marketing, and staffing from start to finish.",
  },
  {
    title: "Living Estates",
    description:
      "For clients who are downsizing or relocating, we handle every detail with the same care and discretion — on your timeline, at your pace.",
  },
  {
    title: "Partial Estates",
    description:
      "You don\u2019t need to sell everything. We work with you to identify the right pieces and handle their sale with the same expertise we bring to any full estate.",
  },
];

export default function Services() {
  return (
    <section id="services" className="pt-24 pb-10 lg:pt-32 lg:pb-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-8 md:mb-16 fade-in-section">
          <h2 className="font-heading text-3xl md:text-5xl font-light text-charcoal mb-4">
            Your Complete Estate, Completely Handled.
          </h2>
          <div className="w-16 h-[1px] bg-bronze mx-auto" />
        </div>

        <div className="flex flex-wrap justify-center gap-8 lg:gap-10">
          {services.map((service, i) => (
            <div
              key={i}
              className="fade-in-section group p-8 border border-bronze/15 hover:border-bronze/40 transition-colors w-full md:w-[calc(50%-1.25rem)]"
            >
              <h3 className="font-heading text-xl md:text-2xl font-medium text-charcoal mb-3">
                {service.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-charcoal/65">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/services"
            className="inline-block font-compact text-sm tracking-widest uppercase px-10 py-4 border border-bronze text-bronze hover:bg-bronze hover:text-cream transition-colors"
          >
            View all services in detail →
          </a>
        </div>
      </div>
    </section>
  );
}
