import {
  Smartphone,
  MessageSquareText,
  Compass,
  ArrowRight,
} from 'lucide-react';
import WhatsAppIcon from '../WhatsAppIcon.jsx';
import useReveal from '../../hooks/useReveal.js';
import {
  WHATSAPP_URL_HI,
  WHATSAPP_DISPLAY,
  NAVIGATOR_TAGLINE,
  NAVIGATOR_SUB,
} from '../../constants/contact.js';

const STEPS = [
  {
    n: '01',
    icon: Smartphone,
    title: `Open WhatsApp ${WHATSAPP_DISPLAY}`,
    body: 'Tap the green button — no app to download, no account to make. Just chat.',
  },
  {
    n: '02',
    icon: MessageSquareText,
    title: 'Tell Navigator your age + situation',
    body: 'A few short questions. The bot keeps it simple and never shares your answers.',
  },
  {
    n: '03',
    icon: Compass,
    title: 'Get your pathway + resources',
    body: 'Curated next steps. Type NEXT, MENU, or HELP anytime to keep moving.',
  },
];

const PATHWAYS = [
  { key: 'lost', label: 'I feel lost' },
  { key: 'skills', label: 'I want skills' },
  { key: 'income', label: 'I need income' },
  { key: 'jobs', label: 'I want a job' },
  { key: 'building', label: 'I am building' },
  { key: 'community', label: 'Find community' },
];

export default function NavigatorSection() {
  const ref = useReveal({ stagger: 0.1 });

  return (
    <section
      id="navigator"
      ref={ref}
      className="relative noise py-24 sm:py-28 bg-cream"
      aria-labelledby="navigator-heading"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header cluster */}
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <p
              data-reveal
              className="inline-flex items-center gap-2 rounded-full bg-leaf/10 text-leaf px-3 py-1 text-[11px] font-mono tracking-[0.22em] uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-leaf animate-pulse" aria-hidden="true" />
              Start here · Our flagship
            </p>
            <h2
              id="navigator-heading"
              data-reveal
              className="mt-5 font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.05] text-navy"
            >
              Meet
              <span className="block font-serif italic text-gold">AfroKreate Navigator.</span>
            </h2>
            <p data-reveal className="mt-6 max-w-2xl text-lg sm:text-xl text-ink/80 leading-relaxed">
              {NAVIGATOR_TAGLINE}
            </p>
          </div>

          <div className="lg:col-span-5">
            <p data-reveal className="text-ink/75 leading-relaxed">
              Navigator is our <strong className="text-navy">free WhatsApp chatbot</strong> for
              youth aged 16&ndash;30 in East Africa. A short, guided conversation pinpoints
              where you are right now &mdash; and turns it into a personalised pathway with
              curated resources, mentorship next steps, and a direct line to a real human when
              you need one.
            </p>
            <p data-reveal className="mt-4 text-ink/75 leading-relaxed">
              {NAVIGATOR_SUB} Type <span className="font-mono text-navy">NEXT</span>,{' '}
              <span className="font-mono text-navy">MENU</span>, or{' '}
              <span className="font-mono text-navy">HELP</span> anytime to navigate. Send{' '}
              <span className="font-mono text-navy">JOIN</span> when you&rsquo;re ready for the
              full mentorship cohort.
            </p>
          </div>
        </div>

        {/* Three steps */}
        <ol className="mt-16 grid gap-5 md:grid-cols-3">
          {STEPS.map((s) => {
            const Icon = s.icon;
            return (
              <li
                key={s.n}
                data-reveal
                className="relative card p-7 sm:p-8 flex flex-col"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] tracking-[0.22em] text-navy/45">
                    Step {s.n}
                  </span>
                  <span className="w-10 h-10 rounded-2xl bg-leaf/12 text-leaf flex items-center justify-center">
                    <Icon size={18} aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg sm:text-xl text-navy leading-snug">
                  {s.title}
                </h3>
                <p className="mt-3 text-ink/75 leading-relaxed text-sm">{s.body}</p>
              </li>
            );
          })}
        </ol>

        {/* Pathway chips */}
        <div data-reveal className="mt-14">
          <p className="eyebrow text-leaf">Pathways Navigator can guide you to</p>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {PATHWAYS.map((p) => (
              <li key={p.key}>
                <a
                  href={WHATSAPP_URL_HI}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white border border-black/10 text-navy text-sm hover:bg-navy hover:text-cream hover:border-navy transition-colors duration-300 ease-cinematic"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                  {p.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Big CTA card */}
        <div
          data-reveal
          className="mt-16 relative overflow-hidden rounded-3xl bg-gradient-to-br from-leaf via-[#176c44] to-[#0e4a30] text-cream p-8 sm:p-10 md:p-14 shadow-soft"
        >
          {/* Decorative geometric pattern */}
          <div
            className="absolute inset-0 opacity-[0.12] pointer-events-none"
            aria-hidden="true"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'><g fill='none' stroke='%23F5F0E8' stroke-width='0.8'><path d='M0 40 L20 0 L40 40 L60 0 L80 40'/><path d='M0 40 L20 80 L40 40 L60 80 L80 40'/></g></svg>\")",
              backgroundSize: '160px 160px',
            }}
          />
          <div className="relative grid gap-8 md:grid-cols-12 items-center">
            <div className="md:col-span-7">
              <p className="eyebrow text-cream/80">Try it now</p>
              <h3 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl text-cream leading-tight">
                One message.
                <span className="block font-serif italic text-cream/95">
                  A clearer next step.
                </span>
              </h3>
              <p className="mt-5 max-w-md text-cream/85 leading-relaxed">
                Send <span className="font-mono">&ldquo;Hi&rdquo;</span> on WhatsApp. Navigator
                handles the rest.
              </p>
            </div>
            <div className="md:col-span-5 md:text-right space-y-3">
              <a
                href={WHATSAPP_URL_HI}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp text-base w-full md:w-auto md:justify-self-end"
                aria-label="Try AfroKreate Navigator on WhatsApp"
              >
                <WhatsAppIcon size={20} />
                Try Navigator now
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <p className="text-xs text-cream/70">
                Opens WhatsApp · Free · {WHATSAPP_DISPLAY}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
