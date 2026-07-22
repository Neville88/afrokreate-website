import { Link } from 'react-router-dom';
import WhatsAppIcon from '../WhatsAppIcon.jsx';
import useReveal from '../../hooks/useReveal.js';
import { WHATSAPP_URL_HI } from '../../constants/contact.js';

export default function CTABand() {
  const ref = useReveal({ stagger: 0.08 });
  return (
    <section
      ref={ref}
      className="relative noise py-24 sm:py-28 bg-leaf/8"
      style={{ backgroundColor: 'rgba(27, 122, 78, 0.06)' }}
      aria-labelledby="cta-heading"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <p data-reveal className="eyebrow text-leaf">Take the next step</p>
        <h2
          id="cta-heading"
          data-reveal
          className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl leading-tight"
        >
          Ready to take the next step
          <span className="block font-serif italic text-navy/80">in your future?</span>
        </h2>
        <p data-reveal className="mt-5 text-ink/70 leading-relaxed max-w-xl mx-auto">
          Speak with us on WhatsApp, apply to our next cohort, or send a message &mdash; we
          reply to every learner.
        </p>

        <div data-reveal className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3">
          <a
            href={WHATSAPP_URL_HI}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp w-full sm:w-auto"
            aria-label="Try AfroKreate Navigator on WhatsApp"
          >
            <WhatsAppIcon size={20} />
            Try Navigator now
          </a>
          <Link to="/contact" className="btn btn-gold w-full sm:w-auto">Apply for admission</Link>
          <Link to="/contact" className="btn btn-outline text-navy border-navy/25 hover:bg-navy/5 w-full sm:w-auto">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
