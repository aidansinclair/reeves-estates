import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estate Sales in Tanglewood, Houston",
  description:
    "Reeves Estates handles estate sales, cash buyouts, and fine art appraisals in Tanglewood, Houston. Expert handling for one of Houston's most storied neighborhoods. Call 832-474-9547.",
  alternates: { canonical: "https://reevesestates.com/neighborhoods/tanglewood" },
  openGraph: {
    title: "Estate Sales in Tanglewood, Houston | Reeves Estates",
    description:
      "Reeves Estates handles estate sales, cash buyouts, and fine art appraisals in Tanglewood, Houston. Expert handling for one of Houston's most storied neighborhoods.",
    url: "https://reevesestates.com/neighborhoods/tanglewood",
  },
};

export default function TanglewoodPage() {
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
            Estate Sales in Tanglewood
          </h1>
          <div className="w-16 h-[1px] bg-bronze mx-auto mb-4" />
          <p className="font-body text-lg text-cream/70 italic leading-relaxed max-w-2xl mx-auto">
            Tanglewood has a particular character — quiet, considered,
            established. The estates here reflect that. So does the way
            we work.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-10 lg:py-14">
        <div className="flex flex-col gap-10">

          {/* Section 1 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              A neighborhood with a distinct collecting history
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Tanglewood has been home to Houston&rsquo;s business and
                civic leadership for generations. The estates we handle
                here reflect that history — significant art collections,
                antique furniture, fine silver and porcelain, and mid-century
                pieces that were acquired with real knowledge and care.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                These aren&rsquo;t collections that should be sold quickly
                or handled by someone who can&rsquo;t tell the difference
                between a notable piece and a reproduction. They deserve
                specialists — people who have spent decades in the market
                and know exactly what they&rsquo;re looking at.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Reeves Art + Design has been part of the Houston art and
                antiques market since 1969. That depth of experience is
                what Reeves Estates brings to every Tanglewood engagement.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Presented properly, sold at the right price
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                We conduct estate sales at our 5,000 square foot gallery
                in Midtown Houston — a professional environment that draws
                the kind of buyers Tanglewood collections deserve. Serious
                collectors. Interior designers working at the highest level.
                Private buyers who know quality and are willing to pay for it.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Everything is managed in-house: the initial walkthrough and
                assessment, cataloging and research, pricing, staging, marketing,
                and the sale itself. You receive a detailed accounting at close
                and proceeds are distributed promptly.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                For pieces of particular significance, we look first at
                private placement — connecting directly with known collectors
                and specialist dealers before recommending any public channel.
                The right buyer for the right piece often isn&rsquo;t found
                in a general sale.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Cash buyouts for Tanglewood families
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                When a family needs this resolved quickly — probate timelines,
                a property under contract, an executor managing things remotely
                — our cash buyout service offers a direct path forward.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                We assess the estate, make a fair offer, and if it works for
                you, we handle everything from there. All removal, all
                clearance, one payment. The property is left clean and
                ready for whatever comes next. We typically deliver an
                offer within 48 hours of our initial visit.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Estate appraisals in Tanglewood
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                A proper appraisal is the foundation of any well-managed
                estate. Before decisions are made about what to sell, donate,
                or distribute, every family deserves to know what they
                actually have.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Our written valuations document each item with provenance,
                condition, and current market comparables. They satisfy
                the requirements of estate attorneys, courts, insurance
                carriers, and tax filings — and they protect every member
                of the family by ensuring that nothing of value is
                overlooked or undervalued.
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
              href="mailto:midtownmodern@gmail.com?subject=Tanglewood%20estate%20inquiry"
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
