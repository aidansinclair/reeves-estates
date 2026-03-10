export default function TrustBar() {
  const items = [
    "Three Generations of Expertise",
    "Fine Art \u00B7 Antiques \u00B7 Objects of Distinction",
    "Discreet. Thorough. Trusted.",
  ];

  return (
    <section className="bg-cream border-y border-bronze/20">
      <div className="max-w-6xl mx-auto px-6 py-10 md:py-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
        {items.map((item, i) => (
          <div key={i} className="flex items-center">
            <span className="font-heading text-[0.8rem] md:text-[0.95rem] font-semibold tracking-[0.2em] uppercase text-charcoal/80 text-center whitespace-normal md:whitespace-nowrap">
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
