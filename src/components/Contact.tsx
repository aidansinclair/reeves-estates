"use client";

import { useState, type FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="py-24 lg:py-32"
      style={{
        background:
          "linear-gradient(160deg, #1C1C1C 0%, #2A2A2A 60%, #3D3024 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12 fade-in-section">
          <h2 className="font-heading text-3xl md:text-5xl font-light text-cream mb-4">
            Ready to Talk?
          </h2>
          <div className="w-16 h-[1px] bg-bronze mx-auto mb-6" />
          <p className="font-body text-base text-cream/60">
            Every estate is different. Let&rsquo;s start with a conversation.
          </p>
        </div>

        <div className="fade-in-section grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="text-center py-12">
                <p className="font-heading text-2xl text-cream mb-2">
                  Thank you.
                </p>
                <p className="font-body text-sm text-cream/60">
                  We&rsquo;ll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="w-full bg-transparent border border-cream/20 px-4 py-3 font-body text-sm text-cream placeholder:text-cream/30 focus:border-bronze focus:outline-none transition-colors"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full bg-transparent border border-cream/20 px-4 py-3 font-body text-sm text-cream placeholder:text-cream/30 focus:border-bronze focus:outline-none transition-colors"
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone (optional)"
                  className="w-full bg-transparent border border-cream/20 px-4 py-3 font-body text-sm text-cream placeholder:text-cream/30 focus:border-bronze focus:outline-none transition-colors"
                />
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your estate"
                  className="w-full bg-transparent border border-cream/20 px-4 py-3 font-body text-sm text-cream placeholder:text-cream/30 focus:border-bronze focus:outline-none transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-bronze text-cream font-body text-sm tracking-widest uppercase hover:bg-bronze-dark transition-colors cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <span className="font-body text-xs tracking-widest uppercase text-cream/40 block mb-1">
                Phone
              </span>
              <span className="font-body text-base text-cream/80">
                (713) 555-0192
              </span>
            </div>
            <div>
              <span className="font-body text-xs tracking-widest uppercase text-cream/40 block mb-1">
                Email
              </span>
              <span className="font-body text-base text-cream/80">
                info@reevesestates.com
              </span>
            </div>
            <div>
              <span className="font-body text-xs tracking-widest uppercase text-cream/40 block mb-1">
                Location
              </span>
              <span className="font-body text-base text-cream/80">
                Houston, Texas
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
