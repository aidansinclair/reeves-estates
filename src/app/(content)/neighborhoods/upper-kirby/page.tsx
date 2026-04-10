import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estate Sales in Upper Kirby, Houston",
  description:
    "Reeves Estates handles estate sales, cash buyouts, and fine art appraisals in Upper Kirby, Houston. Specialists in antiques, fine art, and quality collections. Call 832-474-9547.",
  alternates: { canonical: "https://reevesestates.com/neighborhoods/upper-kirby" },
  openGraph: {
    title: "Estate Sales in Upper Kirby, Houston | Reeves Estates",
    description:
      "Reeves Estates handles estate sales, cash buyouts, and fine art appraisals in Upper Kirby, Houston. Specialists in antiques, fine art, and quality collections.",
    url: "https://reevesestates.com/neighborhoods/upper-kirby",
  },
};

export default function UpperKirbyPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Header */}
      <div className="bg-charcoal py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <p className="font-compact text-xs tracking-widest uppercase text-bronze mb-4">
            Reeves Estates · Houston, TX
          </p>
          <h1
            className="text-4xl md:text-6xl text-cream mb-4"
            style={{ fontFamily: "var(--font-hatton)", fontWeight: 500, lineHeight: 0.95, letterSpacing: "-0.020em" }}
          >
            Estate Sales in Upper Kirby
          </h1>
          <div className="w-16 h-[1px] bg-bronze mx-auto mb-4" />
          <p className="font-body text-lg text-cream/70 italic leading-relaxed max-w-2xl mx-auto">
            Upper Kirby is well-placed and well-considered. The estates here
            reflect decades of intentional living — and deserve to be
            handled that way.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-10 lg:py-14">
        <div className="flex flex-col gap-10">

          {/* Section 1 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              A neighborhood that bridges River Oaks and the inner loop
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Upper Kirby draws from the residential character of River Oaks
                and West University to the north and west, and the cultural
                density of Montrose and the Museum District to the east. It's a
                neighborhood where long-established families and newer arrivals
                coexist — and where the estates we encounter tend to be as
                varied as the people who built them.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                What they share, more often than not, is quality — furniture
                chosen with care, art acquired over time, and objects that
                meant something to the people who owned them. That's exactly
                what we're equipped to handle.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Our gallery on Taft Street in Midtown is less than two miles
                away. When we bring an Upper Kirby estate to our showroom, it
                reaches collectors and buyers from across the city who
                understand what they're looking at.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              How we approach an Upper Kirby estate
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                We start with a walkthrough — a thorough, unhurried review of
                everything in the property. We identify what has real value,
                what belongs in a gallery sale, and what might warrant a
                private placement with a specific buyer. We tell you what we
                think honestly, before any commitment is made.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                For most Upper Kirby estates, our gallery sale is the right
                answer. We handle everything: cataloging, staging, marketing,
                the sale itself, and the clearance afterward. You receive a
                full accounting and a property left clean.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                If speed and certainty matter more than maximizing every item,
                our cash buyout is available as well — one offer, one payment,
                and we handle the rest.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Fine art and antiques handled with real expertise
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Upper Kirby estates frequently include pieces that benefit from
                specialist knowledge: Texas art, mid-century furniture by
                recognized designers, decorative antiques, estate jewelry, and
                silver. A generalist will often miss the mark on value — either
                undervaluing what's significant or overvaluing what isn't.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Our team brings decades of expertise in exactly these
                categories. We document each significant item with provenance,
                condition notes, and current market comparables — and we make
                sure nothing of value goes unrecognized.
              </p>
            </div>
          </div>

          {/* Neighborhoods nearby */}
          <div className="border-t border-bronze/15 pt-8">
            <p className="font-compact text-xs tracking-widest uppercase text-bronze mb-4">
              Also serving nearby
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "River Oaks", href: "/neighborhoods/river-oaks" },
                { name: "Tanglewood", href: "/neighborhoods/tanglewood" },
                { name: "Memorial", href: "/neighborhoods/memorial" },
                { name: "West University Place", href: "/neighborhoods/west-university" },
                { name: "Bellaire", href: "/neighborhoods/bellaire" },
                { name: "Museum District", href: "/neighborhoods/museum-district" },
                { name: "Midtown", href: "/neighborhoods/midtown" },
              ].map((n) => (
                <a key={n.name} href={n.href} className="font-compact text-sm text-charcoal/60 border border-bronze/20 px-3 py-1 hover:text-bronze hover:border-bronze/40 transition-colors">
                  {n.name}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* CTA */}
      <div className="bg-charcoal py-14 lg:py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2
            className="font-heading text-3xl md:text-4xl font-light text-cream mb-4"
          >
            Let&rsquo;s talk about your estate.
          </h2>
          <p className="font-body text-sm text-cream/60 mb-6">
            No pressure, no obligation. Just an honest conversation about what
            you have and what your options are.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:8324749547"
              className="px-8 py-3.5 bg-bronze text-cream font-compact text-sm tracking-widest uppercase hover:opacity-90 transition-opacity"
            >
              Call 832-474-9547
            </a>
            <a
              href="mailto:midtownmodern@gmail.com?subject=Upper%20Kirby%20estate%20inquiry"
              className="px-8 py-3.5 border border-cream/30 text-cream font-compact text-sm tracking-widest uppercase hover:border-bronze hover:text-bronze transition-colors"
            >
              Email us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
