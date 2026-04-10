import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estate Sales in West University Place, Houston",
  description:
    "Reeves Estates handles estate sales, cash buyouts, and fine art appraisals in West University Place, Houston. Trusted by families in one of Houston's most desirable inner-loop neighborhoods. Call 832-474-9547.",
  alternates: { canonical: "https://reevesestates.com/neighborhoods/west-university" },
  openGraph: {
    title: "Estate Sales in West University Place | Reeves Estates",
    description:
      "Reeves Estates handles estate sales, cash buyouts, and fine art appraisals in West University Place, Houston. Trusted by families in one of Houston's most desirable inner-loop neighborhoods.",
    url: "https://reevesestates.com/neighborhoods/west-university",
  },
};

export default function WestUniversityPage() {
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
            Estate Sales in West University Place
          </h1>
          <div className="w-16 h-[1px] bg-bronze mx-auto mb-4" />
          <p className="font-body text-lg text-cream/70 italic leading-relaxed max-w-2xl mx-auto">
            West U families tend to know exactly what they have. We bring the
            same standard of care and clarity to every engagement here.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-10 lg:py-14">
        <div className="flex flex-col gap-10">

          {/* Section 1 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Long-established homes, thoughtfully accumulated collections
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                West University Place is one of Houston&rsquo;s most enduring
                inner-loop neighborhoods — the kind of place where families
                stay for decades and homes hold generations of accumulated life.
                The estates we handle here often reflect that depth: furniture
                passed down through families, art acquired over a lifetime,
                objects that carry both monetary and personal value.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Handling an estate like this well means slowing down enough
                to understand what you have. It means knowing the difference
                between a piece that deserves individual attention and one
                that belongs in a general sale. And it means communicating
                honestly with the family throughout.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                That&rsquo;s what Reeves Estates has done since 1969 — and
                what we bring to every West University engagement today.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              A gallery setting for West University estates
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                We hold estate sales at our 5,000 square foot gallery in
                Midtown — just minutes from West University Place. The gallery
                setting matters: it brings in buyers who are specifically
                seeking quality, and it allows us to present each piece the
                way it deserves to be seen.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                We manage every step in-house. Walkthrough and assessment.
                Cataloging and pricing. Staging and marketing. The sale itself.
                A full accounting at close, with proceeds distributed promptly.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Families who prefer a sale at the property can also opt for
                a professionally managed on-site event — the same team, the
                same standards, the same commitment to a fair result.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              One offer, one close — when that&rsquo;s what you need
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Some families need this resolved quickly and completely.
                A property under contract, an out-of-town executor, a timeline
                that doesn&rsquo;t allow for a multi-week sale process — these
                are the situations our cash buyout service is built for.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                We make a fair offer on the entire estate within 48 hours of
                our visit. If it works for you, we handle all removal and
                clearance and leave the property clean. One transaction.
                No commissions. No uncertainty.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Appraisals that hold up
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Every well-managed estate starts with knowing what you have.
                Our written appraisals document each item with provenance,
                condition notes, and current market comparables — reports
                that satisfy estate attorneys, courts, insurance carriers,
                and the IRS.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                For West University estates with significant art, antiques,
                or collections of decorative objects, a proper appraisal
                isn&rsquo;t optional — it&rsquo;s the foundation of every
                good decision that follows.
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
              href="mailto:midtownmodern@gmail.com?subject=West%20University%20estate%20inquiry"
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
