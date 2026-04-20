const testimonials = [
  {
    quote:
      "The team at Reeves handled my mother\u2019s entire estate with a level of care I didn\u2019t think was possible. I didn\u2019t have to make a single difficult decision alone.",
    name: "M. Patterson",
    descriptor: "Houston",
  },
  {
    quote:
      "As an estate attorney, I\u2019ve worked with many estate handlers. Reeves is in a different class \u2014 thorough, discreet, and deeply knowledgeable.",
    name: "R. Caldwell",
    descriptor: "Estate Attorney",
  },
  {
    quote:
      "They knew exactly what our pieces were worth and found the right buyers. The process was seamless from start to finish.",
    name: "J. & S. Whitmore",
    descriptor: "River Oaks",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 bg-charcoal"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-8 md:mb-16 fade-in-section">
          <h2 className="font-heading text-3xl md:text-5xl font-light text-cream mb-4">
            What Our Clients Say
          </h2>
          <div className="w-16 h-[1px] bg-bronze mx-auto" />
        </div>

        <div className="fade-in-section grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-cream p-10 md:p-12 border-t-2 border-bronze/50"
            >
              <p className="font-body text-base md:text-lg leading-relaxed text-charcoal/75 italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <span className="font-compact text-base font-semibold text-charcoal">
                  {t.name}
                </span>
                <span className="block font-compact text-xs tracking-wide text-charcoal/50 mt-0.5">
                  {t.descriptor}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
