import PhoneLink from "@/components/PhoneLink";

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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Left */}
          <div>
            <a href="/">
              <img
                src="/images/RE-momo.svg"
                alt="Reeves Estates"
                className="h-5 sm:h-7 w-auto brightness-0 invert opacity-80 mb-4"
              />
            </a>
            <p className="font-body text-xs leading-relaxed text-cream/40 italic mb-2">
              From first call to final close.
            </p>
            <p className="font-body text-xs text-cream/30 italic">
              A Reeves Family Business
            </p>
          </div>

          {/* Center */}
          <div>
            <span className="font-compact text-xs tracking-widest uppercase text-cream/30 block mb-4">
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

          {/* Address */}
          <div>
            <span className="font-compact text-xs tracking-widest uppercase text-cream/30 block mb-4">
              Visit Us
            </span>
            <address className="not-italic flex flex-col gap-2">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=2415%20Taft%20St%2C%20Houston%2C%20TX%2077006"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-2 hover:text-bronze transition-colors"
              >
                <span className="font-body text-sm text-cream/50">2415 Taft St</span>
                <span className="font-body text-sm text-cream/50">Houston, TX 77006</span>
              </a>
              <PhoneLink className="font-body text-sm text-cream/50 hover:text-bronze transition-colors mt-2" />
              <a href="mailto:midtownmodern@gmail.com" className="font-body text-sm text-cream/50 hover:text-bronze transition-colors">
                midtownmodern@gmail.com
              </a>
            </address>
          </div>

          {/* Neighborhoods */}
          <div>
            <span className="font-compact text-xs tracking-widest uppercase text-cream/30 block mb-4">
              Neighborhoods We Serve
            </span>
            <div className="flex flex-col gap-2">
              <a href="/neighborhoods/river-oaks" className="font-body text-sm text-cream/50 hover:text-bronze transition-colors">River Oaks</a>
              <a href="/neighborhoods/memorial" className="font-body text-sm text-cream/50 hover:text-bronze transition-colors">Memorial</a>
              <a href="/neighborhoods/tanglewood" className="font-body text-sm text-cream/50 hover:text-bronze transition-colors">Tanglewood</a>
              <a href="/neighborhoods/west-university" className="font-body text-sm text-cream/50 hover:text-bronze transition-colors">West University Place</a>
              <a href="/neighborhoods/bellaire" className="font-body text-sm text-cream/50 hover:text-bronze transition-colors">Bellaire</a>
              <a href="/neighborhoods/midtown" className="font-body text-sm text-cream/50 hover:text-bronze transition-colors">Midtown</a>
              <a href="/neighborhoods/museum-district" className="font-body text-sm text-cream/50 hover:text-bronze transition-colors">Museum District</a>
              <a href="/neighborhoods/upper-kirby" className="font-body text-sm text-cream/50 hover:text-bronze transition-colors">Upper Kirby</a>
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
