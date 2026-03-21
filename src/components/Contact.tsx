export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="font-heading text-3xl md:text-5xl font-light text-charcoal mb-4">
            Get in Touch
          </h2>
          <div className="w-16 h-[1px] bg-bronze mx-auto mb-6" />
          <p className="font-body text-base text-charcoal/80">
            Every estate is different. Let&rsquo;s start with a conversation.
          </p>
        </div>

        <div
          className="fade-in-section flex flex-col md:flex-row md:justify-around md:items-start gap-8 md:gap-0"
        >
          <div className="text-center px-8">
            <span className="font-body text-xs tracking-widest uppercase text-charcoal/70 block mb-2">
              Phone
            </span>
            <a
              href="tel:8324749547"
              className="font-heading text-lg md:text-xl text-bronze hover:text-bronze-dark transition-colors whitespace-nowrap"
            >
              832-474-9547
            </a>
          </div>

          <div className="text-center px-8 md:border-l md:border-bronze/20">
            <span className="font-body text-xs tracking-widest uppercase text-charcoal/70 block mb-2">
              Email
            </span>
            <a
              href="mailto:reevesestatesales@gmail.com"
              className="font-heading text-lg md:text-xl text-bronze hover:text-bronze-dark transition-colors"
            >
              reevesestatesales@gmail.com
            </a>
          </div>

          <div className="text-center px-8 md:border-l md:border-bronze/20">
            <span className="font-body text-xs tracking-widest uppercase text-charcoal/70 block mb-2">
              Visit
            </span>
            <a
              href="https://www.google.com/maps?ll=29.747749,-95.38554&z=12&t=m&hl=en&gl=US&mapclient=embed&cid=7976129577028108421"
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading text-lg md:text-xl text-bronze hover:text-bronze-dark transition-colors"
            >
              Corner of Taft &amp; Fairview
              <br />
              Midtown Houston
            </a>
          </div>

          <div className="text-center px-8 md:border-l md:border-bronze/20">
            <span className="font-body text-xs tracking-widest uppercase text-charcoal/70 block mb-2">
              Schedule
            </span>
            <button
              data-cal-link="reevesestates-biwok7/secret"
              data-cal-namespace="estate-consultation"
              data-cal-config='{"layout":"month_view"}'
              className="font-heading text-lg md:text-xl text-bronze hover:text-bronze-dark transition-colors cursor-pointer whitespace-nowrap"
            >
              Book a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
