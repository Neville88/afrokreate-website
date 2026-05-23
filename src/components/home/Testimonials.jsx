import { Star, ArrowRight } from 'lucide-react';
import useReveal from '../../hooks/useReveal.js';
import WhatsAppIcon from '../WhatsAppIcon.jsx';
import { TESTIMONIALS } from '../../data/testimonials.js';
import { WHATSAPP_URL_HI } from '../../constants/contact.js';

function Stars({ count }) {
  return (
    <div
      className="flex items-center gap-0.5 text-gold"
      aria-label={`${count} out of 5 stars`}
    >
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          fill={i < count ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth={1.5}
          className={i < count ? '' : 'text-gold/35'}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useReveal({ stagger: 0.1 });

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative noise py-24 sm:py-28 bg-cream scroll-mt-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <p data-reveal className="eyebrow text-gold">Voices</p>
          <h2
            id="testimonials-heading"
            data-reveal
            className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl leading-tight"
          >
            What learners are saying
          </h2>
          <p data-reveal className="mt-5 text-ink/70 leading-relaxed">
            Real voices from cohorts and graduates &mdash; in their own words.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((q) => (
            <li key={q.name} data-reveal className="card p-7 sm:p-8 flex flex-col">
              <Stars count={q.rating} />
              <blockquote className="mt-5 font-serif italic text-lg leading-relaxed text-ink/85">
                &ldquo;{q.quote}&rdquo;
              </blockquote>
              <div className="mt-auto pt-6 flex items-center gap-3">
                <img
                  src={q.avatar}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="w-11 h-11 rounded-full object-cover ring-1 ring-black/5"
                />
                <div>
                  <p className="font-medium text-navy">{q.name}</p>
                  <p className="text-xs text-ink/60">{q.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* CTA strip below cards */}
        <div
          data-reveal
          className="mt-12 rounded-3xl bg-navy text-cream px-7 sm:px-9 py-7 sm:py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
        >
          <div className="flex-1">
            <p className="eyebrow text-gold">Your turn</p>
            <p className="mt-2 font-display text-xl sm:text-2xl text-cream leading-snug">
              Ready to find your path? Start with{' '}
              <span className="font-serif italic text-gold">Navigator</span> on WhatsApp.
            </p>
          </div>
          <a
            href={WHATSAPP_URL_HI}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp shrink-0"
            aria-label="Try AfroKreate Navigator on WhatsApp"
          >
            <WhatsAppIcon size={18} />
            Try Navigator now
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
