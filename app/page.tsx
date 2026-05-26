type PageProps = {
  searchParams?: Promise<{
    error?: string;
  }>;
};

const trustItems = [
  "Damage-resistant lacquer finish",
  "Done in 1-2 days",
  "Affordable alternative to renovation",
  "Any colour of your choice"
];

const galleryItems = [
  {
    city: "Toronto",
    label: "Vanity",
    src: "/assets/bathroom-gallery-01.jpg",
    alt: "Modern white bathroom vanity with grey countertop used for P2D vanity refinishing"
  },
  {
    city: "Mississauga",
    label: "Cabinetry",
    src: "/assets/bathroom-gallery-02.jpg",
    alt: "P2D mixed bathroom and cabinet refinishing project in Mississauga"
  },
  {
    city: "Vaughan",
    label: "Refinish",
    src: "/assets/bathroom-gallery-03.jpg",
    alt: "P2D refinished cabinetry example for bathroom and kitchen cabinet services in Vaughan"
  },
  {
    city: "Oakville",
    label: "Refresh",
    src: "/assets/bathroom-gallery-04.jpg",
    alt: "P2D cabinet and vanity refinishing example in Oakville"
  }
];

const benefits = [
  {
    title: "Done in 1-2 days",
    body: "The same clean process we use on kitchens, scaled to a vanity, so your bathroom looks better without a long renovation."
  },
  {
    title: "A fraction of replacement cost",
    body: "Your cabinet box is already there. We keep it in place and give it a new modern face."
  },
  {
    title: "Smooth factory-style finish",
    body: "Doors and drawer fronts are sprayed in our temperature-controlled paint booth with primer and damage-resistant lacquer."
  },
  {
    title: "Melamine and laminate welcome",
    body: "Many vanities use surfaces most painters avoid. P2D uses the right primers so the finish bonds and lasts."
  },
  {
    title: "Any colour you want",
    body: "Choose warm neutrals, deep matte tones, classic whites, modern greys, or a custom colour for your bathroom."
  },
  {
    title: "Onsite, no big mess",
    body: "Spray work happens offsite. Onsite painting is by hand and low-VOC, with no heavy fumes or major disruption."
  }
];

const steps = [
  "Free consultation and colour selection",
  "Remove vanity doors and drawer fronts",
  "Sand, clean, and prime in our paint booth",
  "Spray multiple coats of damage-resistant lacquer",
  "Paint the fixed vanity box onsite by hand",
  "Reinstall doors and drawer fronts"
];

const faqs = [
  {
    q: "How long does vanity refinishing take?",
    a: "Onsite work usually takes 1-2 days. Doors and drawer fronts are sprayed offsite in our paint booth and the vanity box is painted in your home."
  },
  {
    q: "How much does bathroom vanity refinishing cost?",
    a: "A vanity refinish is a small fraction of replacement cost. Pricing depends on size and finish choice. Send a photo and we will reply with a clear quote."
  },
  {
    q: "Can you paint a melamine or laminate vanity?",
    a: "Yes. We use primers specifically matched to melamine and laminate so the new finish bonds and lasts."
  },
  {
    q: "Will the finish handle bathroom humidity and daily use?",
    a: "Yes. We use multiple coats of damage-resistant lacquer applied in a temperature-controlled spray booth."
  },
  {
    q: "Do I have to empty the vanity?",
    a: "No. Items inside the vanity can stay where they are. We work around them."
  },
  {
    q: "Which colours can I choose?",
    a: "Any colour. From soft warm neutrals to deep matte modern tones to classic whites, we can help you pick a shade that suits your bathroom."
  },
  {
    q: "Which areas do you serve?",
    a: "Toronto, Woodbridge, Mississauga, Brampton, Oakville, Burlington, Ajax, Guelph, Vaughan, Etobicoke, and nearby GTA areas."
  },
  {
    q: "Will it smell or be messy?",
    a: "Spray work happens offsite in our booth. Onsite painting is low-VOC, with no heavy fumes and no big mess."
  }
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "P2D Refinishing",
  telephone: "+1-416-831-8489",
  email: "Info@paint2decor.com",
  areaServed: ["Toronto", "Woodbridge", "Mississauga", "Brampton", "Oakville", "Burlington", "Ajax", "Guelph", "Vaughan", "Etobicoke"],
  serviceType: "Bathroom vanity refinishing",
  award: "HomeStars Best of Awards 2020-2023"
};

const trackingScript = `
  document.addEventListener("submit", function (event) {
    var form = event.target;
    if (!form || !form.matches || !form.matches("[data-lead-form]")) return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "generate_lead",
      lp_name: form.dataset.lpName,
      service_type: form.dataset.serviceType
    });
    if (typeof window.gtag === "function") {
      window.gtag("event", "generate_lead", {
        lp_name: form.dataset.lpName,
        service_type: form.dataset.serviceType
      });
    }
  });
  document.addEventListener("click", function (event) {
    var target = event.target;
    if (!target || !target.closest) return;
    var link = target.closest("a[href^='tel:']");
    if (!link) return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "phone_call_click", phone_number: link.getAttribute("href") });
    if (typeof window.gtag === "function") {
      window.gtag("event", "phone_call_click", { phone_number: link.getAttribute("href") });
    }
  });
`;

export default async function Home({ searchParams }: PageProps) {
  const params = await searchParams;
  const error = params?.error;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script dangerouslySetInnerHTML={{ __html: trackingScript }} />
      <div className="top-strip">Bathroom vanity refinishing in Toronto and the GTA</div>
      <header className="site-header lp-header">
        <a className="brand" href="#top" aria-label="P2D Refinishing landing page">
          <img className="brand-logo" src="/assets/p2d-logo.jpg" alt="P2D Refinishing - You can count on us" width="1024" height="209" />
        </a>
        <div className="header-actions">
          <a href="tel:+14168318489">Call +1 (416) 831-8489</a>
          <a className="pill-button" href="#quote">Request Free Quote</a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-inner">
            <div>
              <p className="eyebrow">Bathroom vanity refinishing Toronto</p>
              <h1>
                Give your bathroom vanity <span>a modern new look</span>
              </h1>
              <p className="hero-copy">
                Professional bathroom vanity refinishing services that transform outdated cabinets into beautiful modern finishes quickly and affordably.
              </p>
              <a className="pill-button" href="#quote">Request Free Quote</a>
              <ul className="hero-badges" aria-label="P2D trust highlights">
                {trustItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <form
              className="lead-form"
              id="quote"
              action="/api/lead"
              method="post"
              encType="multipart/form-data"
              data-lead-form
              data-lp-name="bathroom_vanity_refinishing"
              data-service-type="bathroom_vanity_refinishing"
            >
              <input type="hidden" name="landingPage" value="Bathroom Vanity Refinishing Landing Page" />
              <input type="hidden" name="serviceType" value="Bathroom vanity refinishing" />
              <h2>Send us a photo of your vanity</h2>
              <p>We will reply with a clear, no-pressure quote, usually within 24 hours.</p>
              {error ? (
                <div className="form-alert" role="alert">
                  {error}
                </div>
              ) : null}
              <div className="field-grid">
                <div className="field-grid two">
                  <div className="field">
                    <label htmlFor="firstName">First name</label>
                    <input id="firstName" name="firstName" autoComplete="given-name" required />
                  </div>
                  <div className="field">
                    <label htmlFor="lastName">Last name</label>
                    <input id="lastName" name="lastName" autoComplete="family-name" required />
                  </div>
                </div>
                <div className="field-grid two">
                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" autoComplete="email" required />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" type="tel" autoComplete="tel" required />
                  </div>
                </div>
                <div className="field-grid two">
                  <div className="field">
                    <label htmlFor="location">Where are you located?</label>
                    <input id="location" name="location" autoComplete="address-level2" placeholder="Toronto, Mississauga..." />
                  </div>
                  <div className="field">
                    <label htmlFor="doorCount">Doors and drawers</label>
                    <input id="doorCount" name="doorCount" placeholder="Example: 2 doors, 3 drawers" />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="photo">Upload photo (optional)</label>
                  <input id="photo" name="photo" type="file" accept="image/*" />
                </div>
                <div className="field">
                  <label htmlFor="message">Project notes</label>
                  <textarea id="message" name="message" placeholder="Tell us about your vanity size, current finish, and colour goals." />
                </div>
              </div>
              <button className="submit-button" type="submit">Request Free Quote</button>
              <div className="form-note">Your details stay private. No call-back pressure.</div>
            </form>
          </div>
        </section>

        <div className="proof-ribbon">HomeStars Best of Awards 2020-2023 - Google Reviews verified - Since 2008</div>

        <section className="section white">
          <div className="section-inner">
            <p className="section-kicker">Before and after vanity gallery</p>
            <h2 className="section-title">
              Real before and after - <span>GTA bathroom vanities we have refinished</span>
            </h2>
            <p className="body-copy">
              Same craftsmanship as our kitchen work, scaled to your bathroom vanity. No replacements, just a fresh modern finish.
            </p>
            <div className="gallery-grid" aria-label="Before and after bathroom vanity refinishing examples">
              {galleryItems.map((item) => (
                <div className="gallery-item" data-label={item.label} key={`${item.city}-${item.src}`}>
                  <img src={item.src} alt={item.alt} loading="lazy" />
                  <span>{item.city}</span>
                </div>
              ))}
            </div>
            <a className="pill-button section-button" href="#quote">Request Free Quote</a>
          </div>
        </section>

        <section className="section">
          <div className="section-inner">
            <p className="section-kicker">Why a vanity refinish beats a bathroom reno</p>
            <h2 className="section-title">
              Modernise the bathroom <span>without the dust</span>
            </h2>
            <p className="body-copy">
              Since 2008, P2D has helped GTA homeowners modernise their bathrooms without the demo, disruption, or renovation budget.
            </p>
            <div className="services-grid">
              {benefits.map((benefit) => (
                <article className="service-card" key={benefit.title}>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.body}</p>
                </article>
              ))}
            </div>
            <a className="pill-button section-button" href="#quote">Request Free Quote</a>
          </div>
        </section>

        <section className="section white">
          <div className="section-inner split">
            <div>
              <p className="section-kicker">Vanity refinishing process</p>
              <h2 className="section-title">
                How P2D refinishes your <span>bathroom vanity</span>
              </h2>
              <p className="body-copy">
                Total onsite time for most vanities is 1-2 days. Your bathroom comes back quickly with a clean, durable finish.
              </p>
              <ol className="number-list">
                {steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <a className="pill-button section-button" href="#quote">Request Free Quote</a>
            </div>
            <div className="photo-stack" aria-hidden="true">
              <div className="photo-tile large" />
              <div className="photo-tile red">Vanity refresh</div>
              <div className="photo-tile crop-two" />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-inner">
            <p className="section-kicker">Customer testimonials</p>
            <h2 className="section-title">
              Trusted by homeowners <span>across the GTA</span>
            </h2>
            <div className="trust-strip">
              <span>HomeStars Best of Awards 2020-2023</span>
              <span>Google Reviews verified by Trustindex</span>
              <span>Since 2008</span>
            </div>
            <blockquote className="featured-review">
              "I am a returning customer and could not be happier! P2D refinished my kitchen cabinets in 2023 when I bought my first house, and the
              results were amazing. When we purchased our second property, we hired them again without hesitation."
              <cite>Google Review</cite>
            </blockquote>
            <a className="pill-button section-button" href="#quote">Request Free Quote</a>
          </div>
        </section>

        <section className="section white">
          <div className="section-inner">
            <p className="section-kicker">Bathroom vanity refinishing FAQ</p>
            <h2 className="section-title">
              Common questions <span>homeowners ask</span>
            </h2>
            <div className="faq-grid">
              {faqs.map((faq) => (
                <details key={faq.q}>
                  <summary>{faq.q}</summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section cta-band">
          <div className="section-inner">
            <p className="section-kicker">Ready to update your bathroom vanity?</p>
            <h2 className="section-title">
              Send a photo today and get a <span>clear quote</span>
            </h2>
            <p className="hero-copy">
              Masoud or the team will reply with a clear, no-pressure quote, usually within 24 hours.
            </p>
            <div className="final-actions">
              <a className="pill-button" href="tel:+14168318489">Call +1 (416) 831-8489</a>
              <a className="dark-button" href="#quote">Request Free Quote</a>
            </div>
            <p className="contact-line">Email: Info@paint2decor.com | Service area: Toronto, Woodbridge, Mississauga, Brampton, Oakville, Burlington, Ajax, Guelph, Vaughan, Etobicoke</p>
          </div>
        </section>
      </main>

      <div className="sticky-mobile-cta" aria-label="Mobile quote actions">
        <a href="tel:+14168318489">Call</a>
        <a href="#quote">Request Free Quote</a>
      </div>
    </>
  );
}
