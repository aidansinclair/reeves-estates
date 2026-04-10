import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estate Sales in Memorial, Houston",
  description:
    "Reeves Estates handles estate sales, cash buyouts, and fine art appraisals in Memorial, Houston. Three generations of expertise serving one of Houston's most established neighborhoods. Call 832-474-9547.",
  alternates: { canonical: "https://reevesestates.com/neighborhoods/memorial" },
  openGraph: {
    title: "Estate Sales in Memorial, Houston | Reeves Estates",
    description:
      "Reeves Estates handles estate sales, cash buyouts, and fine art appraisals in Memorial, Houston. Three generations of expertise serving one of Houston's most established neighborhoods.",
    url: "https://reevesestates.com/neighborhoods/memorial",
  },
};

export default function MemorialPage() {
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
            style={{ fontFamily: "var(--font-hatton)", fontWeight: 500, lineHeight: 1.0, letterSpacing: "-0.020em" }}
          >
            Estate Sales in Memorial
          </h1>
          <div className="w-16 h-[1px] bg-bronze mx-auto mb-4" />
          <p className="font-body text-lg text-cream/70 italic leading-relaxed max-w-2xl mx-auto">
            Memorial is a neighborhood of substance. The families we work with
            here have accumulated carefully, over time. We approach every
            engagement the same way.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-10 lg:py-14">
        <div className="flex flex-col gap-10">

          {/* Section 1 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Memorial estates require the right expertise
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Memorial is one of Houston&rsquo;s most established neighborhoods
                — large properties, long tenures, and collections that reflect
                decades of considered living. The estates we handle here often
                include significant furniture, fine art, mid-century pieces,
                silver, and objects that have been in families for generations.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                That kind of accumulation deserves more than a hurried clearance.
                It deserves someone who can identify what&rsquo;s valuable, place
                it properly, and return fair value to the family — not just move
                things quickly.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Reeves Art + Design has operated in the Houston market since
                1969. The relationships we&rsquo;ve built with collectors,
                dealers, and institutions across the city are what allow us
                to find the right outcome for each piece — not just the
                fastest one.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Our gallery brings Memorial estates to the right buyers
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                We hold estate sales at our 5,000 square foot gallery in
                Midtown Houston. For Memorial families, this matters. A
                gallery setting attracts buyers who are specifically looking
                for quality — collectors, interior designers, and private
                individuals who understand what they&rsquo;re purchasing and
                are prepared to pay accordingly.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                We handle every detail: the walkthrough, the cataloging,
                the pricing, the staging, and the sale itself. You receive
                a full accounting at close. Proceeds are distributed promptly.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                For families who prefer that the sale take place at the
                property, we also manage professional on-site sales events —
                with the same standards, the same team, and the same result.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              When speed matters more than anything else
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Not every family has the time or bandwidth for a full estate
                sale process. Executors working on probate timelines, families
                managing things from out of town, properties that need to be
                cleared before a sale — these situations call for a different
                approach.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Our cash buyout service purchases the entire estate outright.
                One offer, one payment, one close. We handle all removal and
                clearance and leave the property ready for whatever comes next.
                A fair cash offer is typically delivered within 48 hours of
                our initial visit.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Appraisals for Memorial estates
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Before any sale or distribution, a proper appraisal protects
                everyone involved. Our appraisers document each item with
                provenance, condition notes, and current market comparables —
                producing written reports that hold up for estate attorneys,
                courts, insurance carriers, and the IRS.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Memorial properties frequently contain pieces that reward
                careful attention: Texas art, significant mid-century furniture,
                collections of decorative objects assembled by people who knew
                what they were doing. We give those pieces the time they deserve.
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
                { name: "West University Place", href: "/neighborhoods/west-university" },
                { name: "Bellaire", href: "/neighborhoods/bellaire" },
                { name: "Museum District", href: "/neighborhoods/museum-district" },
                { name: "Midtown", href: "/neighborhoods/midtown" },
                { name: "Upper Kirby", href: "/neighborhoods/upper-kirby" },
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
          <h2 className="font-heading text-3xl md:text-4xl font-light text-cream mb-4">
            Let&rsquo;s talk about your estate.
          </h2>
          <p className="font-body text-sm text-cream/60 mb-6">
            No pressure, no obligation. Just an honest conversation about
            what you have and what your options are.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:8324749547"
              className="px-8 py-3.5 bg-bronze text-cream font-compact text-sm tracking-widest uppercase hover:opacity-90 transition-opacity"
            >
              Call 832-474-9547
            </a>
            <a
              href="mailto:midtownmodern@gmail.com?subject=Memorial%20estate%20inquiry"
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
