export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="font-heading text-3xl md:text-5xl font-light text-charcoal mb-4">
            Get in Touch
          </h2>
          <div className="w-16 h-[1px] bg-bronze mx-auto mb-6" />
          <p className="font-body text-base text-charcoal/80">
            Every estate is different. Let&rsquo;s start with a conversation.
          </p>
        </div>

        <div className="fade-in-section flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0">
          <div className="flex-1 text-center px-4">
            <span className="font-body text-xs tracking-widest uppercase text-charcoal/70 block mb-2">
              Phone
            </span>
            <a
              href="tel:7135235577"
              className="font-heading text-lg md:text-xl text-bronze hover:text-bronze-dark transition-colors whitespace-nowrap"
            >
              713-523-5577
            </a>
          </div>

          <div className="hidden md:block w-[1px] h-12 bg-bronze/20 flex-shrink-0" />

          <div className="flex-1 text-center px-4">
            <span className="font-body text-xs tracking-widest uppercase text-charcoal/70 block mb-2">
              Email
            </span>
            <a
              href="mailto:reevesestatesales@gmail.com"
              className="font-heading text-lg md:text-xl text-bronze hover:text-bronze-dark transition-colors whitespace-nowrap"
            >
              reevesestatesales@gmail.com
            </a>
          </div>

          <div className="hidden md:block w-[1px] h-12 bg-bronze/20 flex-shrink-0" />

          <div className="flex-1 text-center px-4">
            <span className="font-body text-xs tracking-widest uppercase text-charcoal/70 block mb-2">
              Visit
            </span>
            <a
              href="https://www.google.com/maps?ll=29.747749,-95.38554&z=12&t=m&hl=en&gl=US&mapclient=embed&cid=7976129577028108421"
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading text-lg md:text-xl text-bronze hover:text-bronze-dark transition-colors whitespace-nowrap"
            >
              Corner of Taft &amp; Fairview
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
