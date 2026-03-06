const steps = [
  {
    num: "01",
    title: "Initial Consultation",
    description:
      "We visit the property, listen carefully, and assess the full scope of the estate. No obligation.",
  },
  {
    num: "02",
    title: "Comprehensive Appraisal",
    description:
      "Our specialists catalog and value every significant item — art, furniture, jewelry, collectibles.",
  },
  {
    num: "03",
    title: "Tailored Sale Strategy",
    description:
      "We recommend the right approach for each category — estate sale, private treaty, or auction — and handle all execution.",
  },
  {
    num: "04",
    title: "Final Close & Clearance",
    description:
      "We manage the complete wind-down, leaving the property clean, documented, and at peace.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 lg:py-32 bg-cream-dark/50 border-y border-bronze/10"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="font-heading text-3xl md:text-5xl font-light text-charcoal mb-4">
            One Call. One Team. Everything Handled.
          </h2>
          <div className="w-16 h-[1px] bg-bronze mx-auto" />
        </div>

        <div className="fade-in-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="text-center lg:text-left">
                <span className="inline-block font-heading text-5xl md:text-6xl font-light text-bronze/30 leading-none">
                  {step.num}
                </span>
                <h3 className="font-heading text-xl md:text-2xl font-medium text-charcoal mt-3 mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-charcoal/65">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
