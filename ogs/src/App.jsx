import './App.css'

const topBarItems = [
  'Mon - Sat | 08:00 - 17:00',
  'Golf course operations consulting across Vietnam',
]

const featurePillars = [
  {
    title: 'Premium-grade materials',
    body: 'ISO-oriented quality standards for long-term operational consistency.',
  },
  {
    title: 'Lightweight, fast handling',
    body: 'Quick-change workflow reduces fatigue for course operations teams.',
  },
  {
    title: 'Turf-safe and eco-conscious',
    body: 'PLA-based turf protection solutions designed for sustainable use.',
  },
]

const productRows = [
  {
    eyebrow: 'Product category',
    title: 'Stainless Steel Hole Cup',
    subtitle: 'Durable, stable, lifecycle-optimized',
    body:
      'Built for golf course environments that prioritize structural stability, long service life and lower replacement risk over time.',
    image:
      'https://w.ladicdn.com/s750x600/69a2c7007baecc0013070ca8/screenshot-2026-03-02-at-131000-20260302061510-zlenv.png',
  },
  {
    eyebrow: 'Product category',
    title: 'Lightweight Hole Pin',
    subtitle: 'Faster handling, cleaner daily operation',
    body:
      'A lighter operational setup that improves day-to-day efficiency for crews while keeping the premium look and feel expected on course.',
    image:
      'https://w.ladicdn.com/s650x650/69a2c7007baecc0013070ca8/screenshot-2026-03-02-at-130952-20260302061443-lvi_v.png',
  },
  {
    eyebrow: 'Product category',
    title: 'Turf Protection Mat',
    subtitle: 'Protect high-traffic zones with biodegradable materials',
    body:
      'Designed to reduce turf stress in critical traffic areas while aligning with eco-friendly operational priorities.',
    image:
      'https://w.ladicdn.com/s1000x600/69a2c7007baecc0013070ca8/screenshot-2026-03-02-at-102820-20260302032844-hyngo.png',
  },
  {
    eyebrow: 'Operational add-on',
    title: 'QR Code CRM / Re-order System',
    subtitle: 'Re-order reminders without missing warm leads',
    body:
      'A simple digital layer that supports repeat ordering, lead follow-up and more predictable supply planning.',
    image:
      'https://w.ladicdn.com/s1000x600/69a2c7007baecc0013070ca8/screenshot-2026-03-02-at-102820-20260302032844-hyngo.png',
  },
]

const testimonials = [
  {
    quote:
      'We partnered with OGS for golf balls and accessories supply. Product quality remained consistent, delivery stayed on schedule, and large-volume response was reliable.',
    name: 'Course Operations Team',
    role: 'Supply partner',
  },
  {
    quote:
      'OGS supported us from product selection through long-term sourcing planning. Stable quality and complete documentation helped our course run more smoothly and control costs better.',
    name: 'Procurement Manager',
    role: 'Enterprise client',
  },
  {
    quote:
      'OGS does not just sell products. They understand golf course operations. Their ability to supply practice clubs, balls and accessories in volume saved us time and improved budget efficiency.',
    name: 'Golf Course Owner',
    role: 'End user',
  },
]

const proofColumns = [
  {
    title: 'Why clients trust OGS',
    items: [
      'Industry background since 1972',
      'Used by 3,000+ golf courses',
      'ISO 9001 & 14001 aligned',
      '2-year warranty on selected items',
      'Focused on lifecycle cost stability',
    ],
  },
  {
    title: 'Achievements and standards',
    items: [
      '3,000+ golf courses in operation',
      '304 stainless steel (1.5mm) for hole cups',
      'Eco-friendly PLA turf protection mats',
      'Built around a premium operational standard',
    ],
  },
  {
    title: 'Mission',
    items: [
      'Prioritize stable quality',
      'Reduce replacement risk',
      'Support structured deployment',
      'Optimize long-term cost efficiency',
    ],
  },
]

const galleryItems = [
  {
    image:
      'https://w.ladicdn.com/s800x700/69a2c7007baecc0013070ca8/screenshot-2026-03-02-at-130923-20260302061029-es9ab.png',
    title: 'Operational detail with premium finishing',
  },
  {
    image:
      'https://w.ladicdn.com/s950x800/69a2c7007baecc0013070ca8/screenshot-2026-03-02-at-130934-20260302061245-dadle.png',
    title: 'Product presentation for course-side deployment',
  },
  {
    image:
      'https://w.ladicdn.com/s900x750/69a2c7007baecc0013070ca8/screenshot-2026-03-02-at-130929-20260302061159-4jua9.png',
    title: 'Accessories and tools prepared for consistent use',
  },
]

const faqItems = [
  {
    question: 'What types of golf operations is OGS suitable for?',
    answer:
      'OGS is suitable for active golf courses, replacement projects by item category, and resort golf operations that want more stable long-term supply quality.',
  },
  {
    question: 'Do you provide consulting based on actual site needs?',
    answer:
      'Yes. OGS reviews operational conditions, replacement goals, budget and durability requirements before recommending the right product mix.',
  },
  {
    question: 'How do warranty and after-sales support work?',
    answer:
      'OGS positions selected product lines around long-term operational stability, with clear warranty coverage and support according to each deployment scope.',
  },
  {
    question: 'How quickly can a consultation and proposal start?',
    answer:
      'Initial consultation can begin immediately to review priorities, identify the most urgent categories and shape a practical proposal from the first discussion.',
  },
]

const footerLinks = [
  {
    label: 'Hotline',
    value: '028 3724 4555',
    href: 'tel:02837244555',
  },
  {
    label: 'Consulting hours',
    value: 'Mon - Sat | 08:00 - 17:00',
  },
  {
    label: 'Coverage',
    value: 'Vietnam-wide',
  },
  {
    label: 'Scope',
    value: 'Golf course consulting, supply and replacement planning',
  },
]

function App() {
  return (
    <main className="landing-page">
      <header className="top-bar">
        <div className="shell top-bar-inner">
          <span className="brand-mark">OGS Golf System</span>
          <div className="top-bar-meta">
            {topBarItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <a className="top-bar-link" href="tel:02837244555">
            028 3724 4555
          </a>
        </div>
      </header>

      <section className="hero-section">
        <div className="shell hero-shell">
          <div className="hero-media">
            <div className="hero-image-stack">
              <img
                className="hero-image-main"
                src="https://w.ladicdn.com/s1050x800/69a2c7007baecc0013070ca8/g1-20260302033037-0ffby.jpg"
                alt="OGS golf course setup"
              />
              <img
                className="hero-image-secondary"
                src="https://w.ladicdn.com/s1050x650/69a2c7007baecc0013070ca8/golf1-1-20260302055648-nxcaz.jpg"
                alt="Golf course landscape"
              />
              <div className="hero-floating-card">
                <strong>Premium quality</strong>
                <span>Built for long-term course operations</span>
              </div>
            </div>
          </div>

          <div className="hero-copy">
            <span className="eyebrow">Premium solutions for golf course operations in Vietnam</span>
            <h1>Smarter Golf Operations</h1>
            <p className="hero-lead">
              From replacement materials to operational hardware, OGS focuses on
              stable quality, structured deployment and long-term cost efficiency for
              premium golf facilities.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="tel:02837244555">
                Get consultation
              </a>
              <a className="button button-secondary" href="#faq">
                View FAQ
              </a>
            </div>
            <dl className="hero-stats">
              <div>
                <dt>1972</dt>
                <dd>Industry foundation</dd>
              </div>
              <div>
                <dt>3,000+</dt>
                <dd>Golf courses served</dd>
              </div>
              <div>
                <dt>2 years</dt>
                <dd>Warranty on selected items</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section intro-section">
        <div className="shell">
          <div className="section-heading centered">
            <span className="eyebrow">Operational advantage</span>
            <h2>The right-standard solution for golf course operations</h2>
            <p>
              From replacement experience to turf protection, every category is selected
              to support long-term operation with more stability and less replacement risk.
            </p>
          </div>

          <div className="highlight-grid">
            {featurePillars.map((card) => (
              <article key={card.title} className="highlight-card">
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="panorama-section">
        <img
          src="https://w.ladicdn.com/s1800x900/69a2c7007baecc0013070ca8/golf4-20260302084438-ywild.jpg"
          alt="Wide golf course panorama"
        />
      </section>

      <section className="section category-section">
        <div className="shell category-shell">
          <div className="category-art">
            <img
              src="https://w.ladicdn.com/s800x600/69a2c7007baecc0013070ca8/cup1-20260302032255-nmzir.jpg"
              alt="Golf cup and equipment detail"
            />
          </div>
          <div className="category-copy">
            <span className="eyebrow">Products and solutions</span>
            <h2>Select the right category for replacement, maintenance and operational improvement</h2>
            <p>
              OGS focuses on stable quality, strong lifecycle performance and practical
              deployment planning for golf course environments that expect premium standards.
            </p>
          </div>
        </div>
      </section>

      <section className="section showcase-section">
        <div className="shell">
          {productRows.map((row, index) => (
            <div
              key={row.title}
              className={`showcase-row ${index % 2 === 1 ? 'is-reversed' : ''}`}
            >
              <div className="showcase-media">
                <img src={row.image} alt={row.title} />
              </div>
              <div className="showcase-copy">
                <span className="eyebrow">{row.eyebrow}</span>
                <h2>{row.title}</h2>
                <h3 className="showcase-subtitle">{row.subtitle}</h3>
                <p>{row.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section testimonial-section">
        <div className="shell">
          <div className="section-heading centered light">
            <span className="eyebrow inverse">Client experience</span>
            <h2>Serious golf demands serious equipment</h2>
            <p>
              Real feedback from clients who value stable sourcing, reliable delivery
              and products that match premium course operations.
            </p>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article key={item.name} className="testimonial-card">
                <p className="quote">“{item.quote}”</p>
                <div className="testimonial-meta">
                  <h3>{item.name}</h3>
                  <span>{item.role}</span>
                </div>
              </article>
            ))}
          </div>
          <div className="section-cta">
            <a className="button button-primary" href="tel:02837244555">
              Book a product walkthrough
            </a>
          </div>
        </div>
      </section>

      <section className="section proof-section">
        <div className="shell proof-shell">
          <div className="proof-lead">
            <span className="eyebrow">Trust and performance</span>
            <h2>OGS is positioned around stable quality and long-term operations</h2>
            <p>
              Premium quality at reasonable prices means focusing on lifecycle,
              consistency and operational reliability instead of short-term cost cuts.
            </p>
          </div>
          <div className="proof-grid">
            {proofColumns.map((column) => (
              <article key={column.title} className="proof-card">
                <h3>{column.title}</h3>
                <ul>
                  {column.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section gallery-section">
        <div className="shell">
          <div className="section-heading centered">
            <span className="eyebrow">Visual references</span>
            <h2>Additional product and deployment visuals from the original landing page</h2>
          </div>
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <article key={item.title} className="gallery-card">
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="section faq-section">
        <div className="shell">
          <div className="section-heading centered">
            <span className="eyebrow">Key information</span>
            <h2>Frequently asked questions before deployment</h2>
            <p>
              Answers to the most common final-stage questions, helping decision-makers
              move forward faster while keeping the OGS premium positioning intact.
            </p>
          </div>
          <div className="faq-grid">
            {faqItems.map((item) => (
              <article key={item.question} className="faq-card">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer-shell">
          <div className="footer-image">
            <img
              src="https://w.ladicdn.com/s950x650/69a2c7007baecc0013070ca8/golf2-20260301075249-spu7u.jpg"
              alt="OGS Golf System Vietnam"
            />
          </div>
          <div className="footer-content">
            <span className="eyebrow">OGS Golf System - Vietnam</span>
            <h2>Your partner for quality and long-term course operations</h2>
            <p className="footer-copy">
              This React version has been cleaned up for production use with a more
              consistent CTA system, English copy and a simplified contact footer.
            </p>
            <div className="footer-actions">
              <a className="button button-primary" href="tel:02837244555">
                Call now
              </a>
              <a className="button button-secondary" href="#faq">
                Review FAQ
              </a>
            </div>
            <ul className="contact-list">
              {footerLinks.map((item) => (
                <li key={item.label}>
                  <span>{item.label}</span>
                  {item.href ? <a href={item.href}>{item.value}</a> : <strong>{item.value}</strong>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App
