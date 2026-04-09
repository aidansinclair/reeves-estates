export default function Contact() {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-charcoal">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12 fade-in-section">
          <h2 className="font-heading text-3xl md:text-5xl text-cream mb-4">
            Your Estate is Uniquely Yours
          </h2>
          <div className="w-16 h-[1px] bg-bronze mx-auto mb-6" />
          <p className="font-body text-base md:text-lg text-cream/65 max-w-xl mx-auto leading-relaxed">
            Call us for a no-obligation conversation. We will evaluate your
            estate and give you an honest assessment of your options.
          </p>
        </div>

        <div className="fade-in-section flex flex-col md:flex-row md:justify-around md:items-start gap-8 md:gap-0">
          <div className="text-center px-8">
            <span className="font-compact text-xs tracking-widest uppercase text-cream/35 block mb-3">
              Phone
            </span>
            <a
              href="tel:8324749547"
              className="font-heading text-xl md:text-2xl text-bronze hover:text-bronze-light transition-colors whitespace-nowrap"
            >
              832-474-9547
            </a>
          </div>

          <div className="text-center px-8 md:border-l md:border-cream/10">
            <span className="font-compact text-xs tracking-widest uppercase text-cream/35 block mb-3">
              Email
            </span>
            <a
              href="mailto:midtownmodern@gmail.com?subject=Schedule%20an%20estate%20sale%20consultation"
              className="font-heading text-xl md:text-2xl text-bronze hover:text-bronze-light transition-colors"
            >
              Email us
            </a>
          </div>

          <div className="text-center px-8 md:border-l md:border-cream/10">
            <span className="font-compact text-xs tracking-widest uppercase text-cream/35 block mb-3">
              Visit
            </span>
            <a
              href="https://www.google.com/maps?ll=29.747749,-95.38554&z=12&t=m&hl=en&gl=US&mapclient=embed&cid=7976129577028108421"
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading text-xl md:text-2xl text-bronze hover:text-bronze-light transition-colors"
            >
              2415 Taft St
              <br />
              Houston, TX 77006
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
