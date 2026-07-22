import { Link } from 'react-router-dom';
import { Check, ArrowRight, Compass, Rocket, Users, Sparkles } from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';
import Accordion from '../components/Accordion.jsx';
import WhatsAppIcon from '../components/WhatsAppIcon.jsx';
import useReveal from '../hooks/useReveal.js';
import { WHATSAPP_URL_HI } from '../constants/contact.js';

const MENTORSHIP_HIGHLIGHTS = [
  'Monthly cohort meetings with practising mentors',
  'Peer learning sessions across creative disciplines',
  '1:1 guidance &mdash; career, craft, and business questions',
  'Pathways into work, freelancing, or starting up',
];

const HUB_HIGHLIGHTS = [
  'Open to mentorship-programme graduates',
  'Hands-on with Corp Ops Development Consultants',
  'Anchored in the ILO SIYB framework',
  'Demo days &amp; introductions to early customers',
];

const SIYB_STEPS = [
  {
    code: 'GYB',
    icon: Compass,
    title: 'Generate Your Business idea',
    body:
      'Validate the spark. We help founders test whether an idea actually solves a real customer problem worth paying for &mdash; before they spend a shilling.',
  },
  {
    code: 'SYB',
    icon: Sparkles,
    title: 'Start Your Business',
    body:
      'Move from concept to launch. Founders define a model, basic finances, pricing, and a first version of the offer they can put in front of customers.',
  },
  {
    code: 'IYB',
    icon: Users,
    title: 'Improve Your Business',
    body:
      'Sharpen operations. Better systems for marketing, customers, costs, people, and cash flow &mdash; so the business stops leaking and starts compounding.',
  },
  {
    code: 'EYB',
    icon: Rocket,
    title: 'Expand Your Business',
    body:
      'Scale on solid ground. Founders prepare for new markets, hires, or capital &mdash; growing without losing the discipline that got them here.',
  },
];

function Programme({ idx, eyebrow, title, body, image, highlights, kicker }) {
  const ref = useReveal({ stagger: 0.1 });
  const flipped = idx % 2 === 1;
  return (
    <section
      ref={ref}
      className="relative py-20 sm:py-24"
      aria-labelledby={`prog-${idx}-heading`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid gap-10 md:grid-cols-12 items-center">
        <div className={`md:col-span-6 ${flipped ? 'md:order-2' : ''}`}>
          <div data-reveal className="relative rounded-3xl overflow-hidden shadow-soft">
            <img
              src={image}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-cream/95 text-navy text-xs font-mono tracking-widest">
              0{idx + 1}
            </div>
          </div>
        </div>
        <div className={`md:col-span-6 ${flipped ? 'md:order-1 md:pr-8' : 'md:pl-2'}`}>
          <p data-reveal className="eyebrow text-leaf">{eyebrow}</p>
          <h2
            id={`prog-${idx}-heading`}
            data-reveal
            className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl leading-tight"
          >
            {title}
          </h2>
          {kicker && (
            <p data-reveal className="mt-4 font-serif italic text-navy/70 text-lg">
              {kicker}
            </p>
          )}
          <p data-reveal className="mt-5 text-ink/80 leading-relaxed">
            {body}
          </p>
          <ul data-reveal className="mt-6 space-y-2">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-ink/85">
                <span className="mt-1 w-5 h-5 rounded-full bg-leaf/15 text-leaf flex items-center justify-center shrink-0">
                  <Check size={13} aria-hidden="true" />
                </span>
                <span dangerouslySetInnerHTML={{ __html: h }} />
              </li>
            ))}
          </ul>
          <div data-reveal className="mt-7 flex flex-col sm:flex-row flex-wrap gap-3">
            <Link to="/contact" className="btn btn-gold w-full sm:w-auto">
              Apply now
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <a
              href={WHATSAPP_URL_HI}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline text-navy border-navy/25 hover:bg-navy/5 w-full sm:w-auto"
              aria-label="Ask AfroKreate Navigator on WhatsApp"
            >
              <WhatsAppIcon size={16} />
              Ask Navigator
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SIYBSection() {
  const ref = useReveal({ stagger: 0.1 });
  return (
    <section
      ref={ref}
      className="relative py-24 sm:py-28 bg-navy text-cream"
      aria-labelledby="siyb-heading"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <p data-reveal className="eyebrow text-gold">SIYB framework</p>
          <h2
            id="siyb-heading"
            data-reveal
            className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl leading-tight text-cream"
          >
            Start &amp; Improve Your Business
            <span className="block font-serif italic text-gold">a four-stage path.</span>
          </h2>
          <p data-reveal className="mt-5 text-cream/75 leading-relaxed">
            We use the International Labour Organization&rsquo;s Start &amp; Improve Your
            Business framework. Tap each stage to expand the detail.
          </p>
        </div>

        <div data-reveal className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {SIYB_STEPS.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.code}
                className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 text-cream"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs tracking-widest text-gold">
                    {s.code}
                  </span>
                  <Icon size={18} className="text-gold/80" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-lg leading-snug">{s.title}</h3>
              </div>
            );
          })}
        </div>

        <div
          data-reveal
          className="mt-12 rounded-3xl bg-cream text-ink p-2 sm:p-4 md:p-6 shadow-soft"
        >
          <Accordion
            items={SIYB_STEPS.map((s) => ({
              q: `${s.code} — ${s.title}`,
              a: s.body,
            }))}
          />
        </div>
      </div>
    </section>
  );
}

export default function Programs() {
  return (
    <>
      <PageHeader
        eyebrow="Programmes"
        title="Two paths."
        italic="One academy."
        lead="From your first cohort meeting to your first paying customers — our programmes move learners from skill-building into real work or running their own ventures."
        image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=2000&q=80"
      />

      {/* Top-of-page Navigator nudge — for visitors who aren't sure which programme fits */}
      <section className="bg-cream pt-12 sm:pt-14" aria-label="Start with Navigator">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="rounded-3xl bg-leaf/10 border border-leaf/20 p-6 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div className="flex items-start gap-4 flex-1">
              <span className="shrink-0 w-12 h-12 rounded-2xl bg-leaf text-cream flex items-center justify-center">
                <WhatsAppIcon size={20} />
              </span>
              <div>
                <p className="eyebrow text-leaf">Not sure which programme?</p>
                <p className="mt-1 font-display text-lg sm:text-xl text-navy leading-snug">
                  Start with <span className="font-serif italic">Navigator</span> on WhatsApp.
                </p>
                <p className="mt-1 text-sm text-ink/70">
                  Two questions and you&rsquo;ll have a clear next step.
                </p>
              </div>
            </div>
            <a
              href={WHATSAPP_URL_HI}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp w-full sm:w-auto shrink-0"
              aria-label="Try AfroKreate Navigator on WhatsApp"
            >
              <WhatsAppIcon size={18} />
              Try Navigator now
            </a>
          </div>
        </div>
      </section>

      <Programme
        idx={0}
        eyebrow="Programme one"
        title="Youth Mentorship Programme"
        kicker="A 12-month mentorship and coaching journey."
        body="Built for youth aged 16–30 who are serious about their craft and their future. Cohorts meet monthly, work alongside practising mentors, and grow inside a peer community where everyone is moving forward at once. The aim is simple: practical confidence, a real portfolio, and a clear next step into work, freelancing, or starting up."
        image="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1600&q=80"
        highlights={MENTORSHIP_HIGHLIGHTS}
      />

      <Programme
        idx={1}
        eyebrow="Programme two"
        title="Business Incubation Hub"
        kicker="For mentorship graduates ready to build a venture."
        body="The Hub is where ideas become businesses. Founders work with our Corp Ops Development Consultants on the messy real work — model, money, customers, operations — and ship something that earns. The full programme is anchored in the ILO Start & Improve Your Business framework: GYB → SYB → IYB → EYB."
        image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80"
        highlights={HUB_HIGHLIGHTS}
      />

      <SIYBSection />

      {/* WhatsApp prompt after programme detail */}
      <section className="py-20 sm:py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="rounded-3xl bg-navy text-cream p-8 sm:p-10 md:p-12 grid gap-6 md:grid-cols-12 items-center">
            <div className="md:col-span-8">
              <p className="eyebrow text-gold">Still deciding?</p>
              <h2 className="mt-3 font-display text-2xl sm:text-3xl text-cream leading-tight">
                Chat with{' '}
                <span className="font-serif italic">AfroKreate Navigator</span>.
              </h2>
              <p className="mt-3 text-cream/75 max-w-lg leading-relaxed">
                Our WhatsApp chatbot can answer questions on cohort dates, requirements,
                fees, and what to expect &mdash; usually within minutes. Type{' '}
                <span className="font-mono text-cream">HELP</span> anytime to reach a
                human.
              </p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <a
                href={WHATSAPP_URL_HI}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp w-full md:w-auto"
                aria-label="Try AfroKreate Navigator on WhatsApp"
              >
                <WhatsAppIcon size={20} />
                Try Navigator
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
