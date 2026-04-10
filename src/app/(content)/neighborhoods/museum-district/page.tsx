import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estate Sales in the Museum District, Houston",
  description:
    "Reeves Estates handles estate sales, cash buyouts, and fine art appraisals in Houston's Museum District. Deep expertise in art, antiques, and significant collections. Call 832-474-9547.",
  alternates: { canonical: "https://reevesestates.com/neighborhoods/museum-district" },
  openGraph: {
    title: "Estate Sales in the Museum District, Houston | Reeves Estates",
    description:
      "Reeves Estates handles estate sales, cash buyouts, and fine art appraisals in Houston's Museum District. Deep expertise in art, antiques, and significant collections.",
    url: "https://reevesestates.com/neighborhoods/museum-district",
  },
};

export default function MuseumDistrictPage() {
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
            Estate Sales in the Museum District
          </h1>
          <div className="w-16 h-[1px] bg-bronze mx-auto mb-4" />
          <p className="font-body text-lg text-cream/70 italic leading-relaxed max-w-2xl mx-auto">
            The Museum District attracts people who live with art. We handle
            what they&rsquo;ve collected with the same seriousness they
            brought to collecting it.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-10 lg:py-14">
        <div className="flex flex-col gap-10">

          {/* Section 1 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              A neighborhood shaped by cultural life
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                The Museum District has long attracted artists, patrons, and
                professionals whose lives orbit the cultural institutions that
                define this part of Houston. The estates we encounter here
                reflect that — fine art acquired with genuine knowledge,
                antiques chosen for their quality, and collections assembled
                over decades with real discernment.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Settling these estates requires more than logistics. It requires
                someone who understands what they're looking at — who can
                distinguish a significant work from a decorative one, and who
                has the market relationships to place important pieces properly.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Reeves Art + Design has been active in Houston's art market since
                1969. That history is directly relevant here. We know the artists,
                the dealers, the collectors, and the institutions that make this
                city's art world what it is.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              How we work with Museum District estates
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                We begin with a thorough walkthrough — cataloging everything,
                identifying what requires individual attention, and giving you
                an honest picture of what you have and what it's worth. No
                obligation, no pressure.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                For most Museum District estates, we recommend our gallery sale
                at our 5,000 square foot space in Midtown. The buyers who come
                to Reeves are collectors and professionals — exactly the right
                audience for the kinds of pieces that tend to come from this
                neighborhood.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                For works of particular significance, we look first at private
                placement — connecting your family directly with a buyer who
                knows the work and is prepared to pay appropriately for it,
                without the exposure and unpredictability of a public sale.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Cash buyouts for families who need simplicity
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Sometimes the right answer is straightforward: one offer, one
                payment, everything handled. Our cash buyout service is designed
                for families or executors who need certainty — a clean close
                without a drawn-out process.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                We deliver a fair offer within 48 hours of our initial visit,
                handle all removal and clearance, and leave the property ready
                for whatever comes next. If it doesn't work for you, there is
                no obligation.
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
              href="mailto:midtownmodern@gmail.com?subject=Museum%20District%20estate%20inquiry"
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
