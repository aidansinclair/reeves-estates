import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estate Sales in Midtown Houston",
  description:
    "Reeves Estates is based in Midtown Houston — estate sales, cash buyouts, fine art appraisals, and complete estate handling from our 5,000 sq ft gallery on Taft Street. Call 832-474-9547.",
  alternates: { canonical: "https://reevesestates.com/neighborhoods/midtown" },
  openGraph: {
    title: "Estate Sales in Midtown Houston | Reeves Estates",
    description:
      "Reeves Estates is based in Midtown Houston — estate sales, cash buyouts, fine art appraisals, and complete estate handling from our 5,000 sq ft gallery on Taft Street.",
    url: "https://reevesestates.com/neighborhoods/midtown",
  },
};

export default function MidtownPage() {
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
            Estate Sales in Midtown Houston
          </h1>
          <div className="w-16 h-[1px] bg-bronze mx-auto mb-4" />
          <p className="font-body text-lg text-cream/70 italic leading-relaxed max-w-2xl mx-auto">
            We&rsquo;ve been on Taft Street since 1969. Midtown is where
            Reeves Estates began, and it&rsquo;s where your family&rsquo;s
            belongings will be presented properly.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-10 lg:py-14">
        <div className="flex flex-col gap-10">

          {/* Section 1 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              We're not just nearby — we're here
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Reeves Art + Design has occupied the corner of Taft and Fairview
                in Midtown since 1969. That history isn't a marketing point —
                it's the reason we understand this city's art market, collector
                community, and the kinds of collections that Houston families
                have built over generations.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Our 5,000 square foot gallery is where we bring estates to be
                sold properly. Not in a rushed home sale, not in a cluttered
                auction house — but in a considered, gallery-quality environment
                that attracts serious buyers who recognize quality when they see
                it.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                For Midtown families and executors, working with us means working
                with people who are genuinely part of this neighborhood — and
                have been for more than fifty years.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              What we handle in Midtown
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                Midtown Houston has changed considerably over the decades, but it
                has always attracted people with genuine taste — artists,
                collectors, professionals who care about what surrounds them.
                The estates we see here reflect that: fine art, well-chosen
                antiques, quality furniture, and objects that have been
                thoughtfully accumulated over time.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                We approach each estate the same way — thorough walkthrough, honest
                assessment, clear recommendation. For most Midtown estates, our
                gallery sale is the right path. For pieces of particular
                significance, we look at private placement first.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                We also offer complete cash buyouts — one offer, one payment, fast
                closing — for families or executors who need certainty more than
                they need to optimize every line item.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-charcoal mb-4">
              Serving the greater Midtown area
            </h2>
            <div className="flex flex-col gap-4">
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                We work with families across Midtown and every surrounding
                neighborhood — Museum District, Montrose, Montrose/Neartown,
                Upper Kirby, and the broader inner loop. If you're managing an
                estate anywhere in central Houston, we're likely the closest
                specialist you'll find — and one of the most experienced.
              </p>
              <p className="font-body text-base leading-relaxed text-charcoal/75">
                We've worked with estate attorneys, out-of-town executors, and
                families navigating one of the most emotionally complicated
                processes there is. Our job is to make it simpler.
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
              href="mailto:midtownmodern@gmail.com?subject=Midtown%20estate%20inquiry"
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
