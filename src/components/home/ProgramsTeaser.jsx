import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import WhatsAppIcon from '../WhatsAppIcon.jsx';
import useReveal from '../../hooks/useReveal.js';
import { WHATSAPP_URL_HI } from '../../constants/contact.js';

const PROGRAMS = [
  {
    tag: 'Programme one',
    title: 'Youth Mentorship Programme',
    img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1400&q=80',
    body:
      'A 12-month mentorship and coaching journey: cohort meetings, 1:1 guidance, peer sessions, and entrepreneurial pathways for youth ready to move from idea to action.',
  },
  {
    tag: 'Programme two',
    title: 'Business Incubation Hub',
    img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80',
    body:
      'For mentorship graduates ready to start ventures. Startup support with our Corp Ops Development Consultants, anchored in the ILO SIYB framework: GYB, SYB, IYB, EYB.',
  },
];

export default function ProgramsTeaser() {
  const ref = useReveal({ stagger: 0.12 });
  return (
    <section
      ref={ref}
      className="relative noise py-24 sm:py-28 bg-cream"
      aria-labelledby="programs-teaser-heading"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div className="max-w-2xl">
            <p data-reveal className="eyebrow text-leaf">Two doors in</p>
            <h2
              id="programs-teaser-heading"
              data-reveal
              className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl leading-tight"
            >
              Choose your pathway
              <span className="block font-serif italic text-navy/80">
                into work, craft, or business.
              </span>
            </h2>
          </div>
          <Link
            to="/programs"
            data-reveal
            className="inline-flex items-center gap-2 text-navy font-medium lift-link"
          >
            See full programmes
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PROGRAMS.map((p) => (
            <article
              key={p.title}
              data-reveal
              className="group relative overflow-hidden rounded-3xl bg-navy text-cream shadow-soft"
            >
              <div className="aspect-[16/10] sm:aspect-[16/9] overflow-hidden">
                <img
                  src={p.img}
                  alt=""
                  loading="lazy"
                  aria-hidden="true"
                  className="w-full h-full object-cover transition-transform duration-700 ease-cinematic group-hover:scale-[1.04]"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                <p className="eyebrow text-gold">{p.tag}</p>
                <h3 className="mt-2 font-display text-2xl sm:text-3xl text-cream">
                  {p.title}
                </h3>
                <p className="mt-3 text-cream/80 max-w-md leading-relaxed">{p.body}</p>
                <Link
                  to="/programs"
                  className="mt-5 inline-flex items-center gap-2 text-gold font-medium lift-link"
                >
                  Learn more
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* WhatsApp inline banner */}
        <div
          data-reveal
          className="mt-10 rounded-3xl bg-navy/[0.04] border border-navy/10 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div>
            <p className="eyebrow text-leaf">Talk to us now</p>
            <p className="mt-1 font-display text-lg sm:text-xl text-navy">
              Not sure which programme fits? Ask{' '}
              <span className="font-serif italic">Navigator</span> on WhatsApp.
            </p>
          </div>
          <a
            href={WHATSAPP_URL_HI}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp w-full sm:w-auto shrink-0"
            aria-label="Try AfroKreate Navigator on WhatsApp"
          >
            <WhatsAppIcon size={18} />
            Try Navigator
          </a>
        </div>
      </div>
    </section>
  );
}
