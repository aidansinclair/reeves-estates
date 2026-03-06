export default function TrustBar() {
  const items = [
    "Three Generations of Expertise",
    "Fine Art \u00B7 Antiques \u00B7 Objects of Distinction",
    "Discreet. Thorough. Trusted.",
  ];

  return (
    <section className="bg-cream border-y border-bronze/20">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
        {items.map((item, i) => (
          <div key={i} className="flex items-center">
            <span className="font-heading text-sm md:text-base tracking-widest text-charcoal/70 text-center">
              {item}
            </span>
            {i < items.length - 1 && (
              <span className="hidden md:block w-[1px] h-5 bg-bronze/40 mx-8" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
