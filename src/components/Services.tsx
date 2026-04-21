const categories = [
  {
    name: "Sell Everything",
    descriptor: "One transaction. One payment. We handle it all.",
    services: [
      {
        title: "Cash Buyout",
        description:
          "We purchase your entire estate outright — one transaction, one payment, fast closing. No waiting for buyers, no commission fees, no uncertainty.",
        mobileVisible: true,
      },
      {
        title: "Estate Sales",
        description:
          "From organization and staging to marketing and conducting the sale, we handle every element with care and professionalism.",
        mobileVisible: false,
      },
      {
        title: "On-Site Sales",
        description:
          "For families who prefer the familiarity of their own home, we organize and manage professional on-site sales events at the property — handling all logistics, pricing, marketing, and staffing from start to finish.",
        mobileVisible: false,
      },
    ],
  },
  {
    name: "Sell Selectively",
    descriptor: "Identify the right pieces. Reach the right buyers.",
    services: [
      {
        title: "Fine Art & Antiques",
        description:
          "Decades of expertise in fine art, mid-century modern furniture, and decorative antiques means your most valuable pieces are in the right hands.",
        mobileVisible: false,
      },
      {
        title: "Private Treaty Sales",
        description:
          "For pieces that deserve a more considered approach, we connect sellers with qualified private buyers discreetly and efficiently.",
        mobileVisible: false,
      },
      {
        title: "Partial Estates",
        description:
          "You don’t need to sell everything. We work with you to identify the right pieces and handle their sale with the same expertise we bring to any full estate.",
        mobileVisible: true,
      },
    ],
  },
  {
    name: "Just Handle It",
    descriptor: "Appraisals, clearance, executor support — we take it off your plate.",
    services: [
      {
        title: "Executor Support",
        description:
          "We work directly with estate attorneys and executors to ensure every asset is properly documented, valued, and accounted for.",
        mobileVisible: false,
      },
      {
        title: "Estate Appraisal",
        description:
          "We assess every item with the expertise of seasoned fine art and antiques specialists. You receive a comprehensive written valuation.",
        mobileVisible: true,
      },
      {
        title: "Estate Clearance",
        description:
          "Once the sale is complete, we manage the full clearance of the property — donating, recycling, and removing what remains.",
        mobileVisible: false,
      },
      {
        title: "Living Estates",
        description:
          "For clients who are downsizing or relocating, we handle every detail with the same care and discretion — on your timeline, at your pace.",
        mobileVisible: true,
      },
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="pt-12 pb-10 md:pt-24 lg:pt-32 lg:pb-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-8 md:mb-16 fade-in-section">
          <h2 className="font-heading text-3xl md:text-5xl font-light text-charcoal mb-4">
            Your Complete Estate, Completely Handled.
          </h2>
          <div className="w-16 h-[1px] bg-bronze mx-auto" />
        </div>

        <div className="space-y-14 md:space-y-20">
          {categories.map((category) => (
            <div key={category.name} className="fade-in-section">
              <div className="mb-6 md:mb-8">
                <h3 className="font-compact text-xs tracking-widest uppercase text-bronze mb-1">
                  {category.name}
                </h3>
                <p className="font-body text-sm text-charcoal/50">
                  {category.descriptor}
                </p>
              </div>
              <div className="flex flex-wrap justify-start gap-8 lg:gap-10">
                {category.services.map((service, i) => (
                  <div
                    key={i}
                    className={`group p-8 border border-bronze/15 hover:border-bronze/40 transition-colors w-full md:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.667rem)] ${service.mobileVisible ? "" : "hidden md:block"}`}
                  >
                    <h4 className="font-heading text-xl md:text-2xl font-medium text-charcoal mb-3">
                      {service.title}
                    </h4>
                    <p className="font-body text-sm leading-relaxed text-charcoal/65">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/services"
            className="inline-block font-compact text-base tracking-widest uppercase px-12 py-5 bg-charcoal text-cream hover:bg-charcoal/80 transition-colors"
          >
            View all services in detail →
          </a>
        </div>
      </div>
    </section>
  );
}
