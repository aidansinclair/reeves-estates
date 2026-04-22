export default function About() {
  return (
    <section id="about" className="scroll-mt-20 pb-12 md:py-12 lg:py-32">
      <div className="max-w-7xl mx-auto lg:px-12">
        <div className="fade-in-section grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-0 overflow-hidden">
          {/* Left — Pull quote */}
          <div
            className="p-6 lg:p-16 flex items-center"
            style={{
              background:
                "linear-gradient(160deg, #1C1C1C 0%, #2A2A2A 60%, #3D3024 100%)",
            }}
          >
            <div>
              <div className="w-10 h-[1px] bg-bronze mb-8" />
              <blockquote className="font-body text-2xl md:text-3xl lg:text-4xl font-light text-cream/90 leading-snug italic">
                &ldquo;We have spent three generations learning what things are
                worth — and what they mean to the families who treasured
                them.&rdquo;
              </blockquote>
              <div className="w-10 h-[1px] bg-bronze mt-8" />
            </div>
          </div>

          {/* Right — Body text */}
          <div className="p-12 lg:p-16 bg-cream border border-bronze/10 flex items-center">
            <div>
              <p className="font-compact text-xs tracking-widest uppercase text-bronze mb-3">
                Houston&rsquo;s full-service estate handling specialists
              </p>
              <h2 className="font-heading text-3xl md:text-4xl text-charcoal mb-6">
                About Reeves
              </h2>
              <div className="space-y-4 font-body text-base leading-relaxed text-charcoal/75">
                <p>
                  For more than fifty years, Reeves has occupied the corner of
                  Taft and Fairview in Houston&rsquo;s Midtown — a family
                  business built on three generations of expertise in antiques,
                  mid-century modern furniture, and fine art. Respected by
                  artists, collectors, interior designers, and cultural
                  institutions alike, Reeves has earned a quiet reputation for
                  straight dealing, discernment, and genuine care.
                </p>
                <p>
                  Reeves Estates is the natural extension of that legacy — a
                  full-service estate handling solution for families and
                  executors who want every detail managed with sensitivity and
                  expertise, from the first conversation to the final close.
                </p>
                <p>
                  Our 5,000 square foot gallery space sets us apart. Rather than
                  a rushed sale in a private home, we bring the estate to
                  Midtown — carefully staging and presenting pieces in a
                  considered, gallery-quality environment that honors the
                  collection and attracts serious buyers.
                </p>
                <p>
                  We offer three distinct paths depending on your needs. For
                  estates best suited to an organised sale event, we handle
                  everything in-house — curation, marketing, staffing, and
                  execution. For collections of particular significance, we
                  conduct private liquidations with discretion and care. And for
                  families who prefer the familiarity of their own home, we
                  manage professional on-site sales events at the property
                  itself — combining the intimacy of the setting with the reach
                  and organisation of a seasoned team.
                </p>
                <p>
                  Whatever the circumstances, Reeves Estates offers one point of
                  contact, one trusted family name, and a commitment to handling
                  every piece — and every family — with the respect they
                  deserve.
                </p>
                <p className="text-bronze font-medium italic">
                  A proud extension of Reeves Art Gallery — Houston&rsquo;s
                  trusted art resource since the 1970s.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
