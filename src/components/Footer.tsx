const quickLinks = [
  { label: "Our Services", href: "/services" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "About Reeves", href: "/#about" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/60">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left */}
          <div>
            <img
              src="/images/RE-momo.svg"
              alt="Reeves Estates"
              className="h-5 sm:h-7 w-auto brightness-0 invert opacity-80 mb-4"
            />
            <p className="font-body text-xs leading-relaxed text-cream/40 italic mb-2">
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
              <p className="font-body text-sm text-cream/50 italic">
                Serving Houston families across three generations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Neighbourhoods */}
      <div className="border-t border-cream/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-6 text-center">
          <p className="font-body text-sm text-bronze italic">
            Serving River Oaks &middot; Midtown &middot; Houston High-Rises &middot; and surrounding communities
          </p>
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
