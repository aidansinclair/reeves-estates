import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estate Sales in River Oaks, Houston",
  description:
    "Reeves Estates handles estate sales, cash buyouts, and fine art appraisals in River Oaks, Houston. White-glove service for one of Houston's most distinguished neighborhoods. Call 832-474-9547.",
  alternates: { canonical: "https://reevesestates.com/neighborhoods/river-oaks" },
  openGraph: {
    title: "Estate Sales in River Oaks, Houston | Reeves Estates",
    description:
      "Reeves Estates handles estate sales, cash buyouts, and fine art appraisals in River Oaks, Houston. White-glove service for one of Houston's most distinguished neighborhoods.",
    url: "https://reevesestates.com/neighborhoods/river-oaks",
  },
};

export default function RiverOaksPage() {
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
            Estate Sales in River Oaks
          </h1>
          <div className="w-16 h-[1px] bg-bronze mx-auto mb-4" />
          <p className="font-body text-lg text-cream/70 italic leading-relaxed max-w-2xl mx-auto">
            River Oaks estates tend to arrive with history behind them. We know
            how to read a collection — and how to handle one.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-10 lg:py-14">
        <div className="flex flex-col gap-10">

          {/* Section 1 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              A neighborhood that demands a different standard
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                River Oaks is home to some of Houston&rsquo;s most significant
                private collections — fine art, antique furniture, estate
                jewelry, silver, and mid-century pieces accumulated over
                generations. Settling an estate here isn&rsquo;t the same as
                settling one anywhere else.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                The stakes are higher. The buyers are more discerning. And the
                families involved have every right to expect a company that
                knows what it&rsquo;s handling — not just logistically, but in
                terms of genuine market knowledge.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Reeves Art + Design has been part of the Houston art market
                since 1969. That history is what makes Reeves Estates the right
                call for River Oaks families. We don&rsquo;t guess at values.
                We know them.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              How we work with River Oaks estates
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                We start with a thorough walkthrough of the property. No
                pressure, no obligation — just an honest conversation about
                what you have and what your options are.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                For most River Oaks estates, we recommend bringing the
                collection to our 5,000 square foot gallery in Midtown Houston.
                Our gallery environment attracts the right buyers — collectors,
                interior designers, and private individuals who understand
                quality and are prepared to pay for it. A home sale, even a
                well-run one, rarely achieves the same result.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                For pieces of particular significance — a painting, a piece of
                sculpture, notable silver or porcelain — we look first at
                private placement with known collectors before recommending any
                public sale. Some things belong in the right hands, and we have
                the relationships to make that happen.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Cash buyouts for River Oaks families who need certainty
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Sometimes a family needs this handled quickly and completely.
                There are out-of-town executors, probate timelines, properties
                that need to be listed, and relatives who simply cannot manage
                a drawn-out process.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Our cash buyout service purchases the entire estate outright —
                one offer, one payment, one close. We handle all removal and
                clearance. The property is left clean and ready for whatever
                comes next.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                We deliver a fair cash offer within 48 hours of our initial
                visit. If it works for you, we move quickly. If not, there is
                no obligation.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Fine art and antiques — handled properly
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                River Oaks estates regularly include pieces that deserve
                individual attention: Texas regionalist paintings, significant
                European antiques, Mid-Century Modern furniture by recognized
                designers, and collections of decorative art that have been
                carefully assembled over a lifetime.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Our appraisal team documents each item with provenance, condition
                notes, and current market comparables. These reports hold up
                for estate attorneys, courts, insurance carriers, and tax
                filings — and they ensure that nothing of value gets missed,
                undervalued, or sold for less than it should be.
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
                { name: "Tanglewood", href: "/neighborhoods/tanglewood" },
                { name: "Memorial", href: "/neighborhoods/memorial" },
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
              href="mailto:midtownmodern@gmail.com?subject=River%20Oaks%20estate%20inquiry"
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
