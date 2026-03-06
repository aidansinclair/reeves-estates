const quickLinks = [
  { label: "Our Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About Reeves", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/60">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left */}
          <div>
            <span className="font-heading text-lg tracking-[0.25em] text-cream font-semibold block mb-1">
              Reeves Estates
            </span>
            <span className="block w-12 h-[1px] bg-bronze mb-4" />
            <p className="font-body text-xs leading-relaxed text-cream/40 mb-2">
              Every piece cared for. Every detail honored.
              <br />
              From first call to final close.
            </p>
            <p className="font-body text-xs text-cream/30 italic">
              A Reeves Family Business
            </p>
          </div>

          {/* Center */}
          <div>
            <span className="font-body text-xs tracking-widest uppercase text-cream/30 block mb-4">
              Quick Links
            </span>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm text-cream/50 hover:text-bronze transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="font-body text-xs tracking-widest uppercase text-cream/30 block mb-4">
                Serving Houston
              </span>
              <p className="text-sm text-cream/50 italic" style={{ fontFamily: "var(--font-libre-baskerville)" }}>
                Serving Houston families across three generations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-4">
          <p className="font-body text-xs text-cream/25 text-center">
            &copy; {new Date().getFullYear()} Reeves Estates. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
