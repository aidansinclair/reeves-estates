import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estate Sales in Bellaire, Houston",
  description:
    "Reeves Estates handles estate sales, cash buyouts, and fine art appraisals in Bellaire, TX. White-glove service for families in one of Houston's most established communities. Call 832-474-9547.",
  alternates: { canonical: "https://reevesestates.com/neighborhoods/bellaire" },
  openGraph: {
    title: "Estate Sales in Bellaire, TX | Reeves Estates",
    description:
      "Reeves Estates handles estate sales, cash buyouts, and fine art appraisals in Bellaire, TX. White-glove service for families in one of Houston's most established communities.",
    url: "https://reevesestates.com/neighborhoods/bellaire",
  },
};

export default function BellairePage() {
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
            Estate Sales in Bellaire
          </h1>
          <div className="w-16 h-[1px] bg-bronze mx-auto mb-4" />
          <p className="font-body text-lg text-cream/70 italic leading-relaxed max-w-2xl mx-auto">
            Bellaire rewards patience and attention — so does handling an
            estate well. We don&rsquo;t rush either.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-10 lg:py-14">
        <div className="flex flex-col gap-10">

          {/* Section 1 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Bellaire estates, handled with care
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Bellaire has been one of Houston&rsquo;s most desirable
                communities for decades — a place where families put down
                deep roots and homes accumulate real history. The estates
                here often hold a lifetime of carefully chosen belongings:
                fine furniture, artwork, silver, collections built piece
                by piece over many years.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                When it&rsquo;s time to settle an estate, the people
                involved deserve a company that takes that history seriously.
                One that doesn&rsquo;t rush, doesn&rsquo;t guess, and
                doesn&rsquo;t treat the process as a transaction to be
                completed as quickly as possible.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Reeves Estates has served families like yours across Houston
                since 1969. We bring the same expertise, the same honesty,
                and the same patient approach to every Bellaire engagement.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Your estate, presented properly
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                We hold estate sales at our 5,000 square foot gallery in
                Midtown Houston — close to Bellaire and well-known to the
                buyers who matter. The gallery setting attracts collectors,
                interior designers, and private buyers who are specifically
                looking for quality and understand its value.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                We manage the entire process: walkthrough, cataloging,
                pricing, staging, marketing, and the sale. You receive
                a complete accounting at close and proceeds are distributed
                without delay.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                If the family prefers a sale at the property, we organize
                and staff professional on-site events as well — the same
                care and expertise, at the home itself.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Cash buyouts for Bellaire families
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                When a clean, quick resolution is the priority — probate
                deadlines, a property under contract, an executor managing
                things from another city — our cash buyout service provides
                exactly that.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                We assess the estate, deliver a fair cash offer within
                48 hours, and if you accept, we handle everything that
                follows. All removal. All clearance. One payment. The
                property is left ready for its next chapter.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Appraisals you can rely on
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                A proper appraisal is the starting point for any estate
                handled well. Before selling, distributing, or donating,
                you need to know what you actually have — and what it&rsquo;s
                worth in today&rsquo;s market.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Our written valuations cover every item with provenance,
                condition notes, and current market comparables. They satisfy
                estate attorneys, courts, insurance carriers, and the IRS —
                and they give every family member confidence that the estate
                is being handled fairly and thoroughly.
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
              href="mailto:midtownmodern@gmail.com?subject=Bellaire%20estate%20inquiry"
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
