import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Flame,
  Sparkles,
  HeartHandshake,
  Mountain,
  Users,
  Quote,
} from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';
import WhatsAppIcon from '../components/WhatsAppIcon.jsx';
import useReveal from '../hooks/useReveal.js';
import { WHATSAPP_URL_HI } from '../constants/contact.js';

const VALUES = [
  {
    icon: ShieldCheck,
    name: 'Accountability',
    body:
      'We honour our word to learners, partners, and one another &mdash; with clear expectations and follow-through.',
  },
  {
    icon: Flame,
    name: 'Passion',
    body:
      'We bring real energy to the work. Apathy doesn&rsquo;t build a business or a creative practice.',
  },
  {
    icon: Sparkles,
    name: 'Creativity',
    body:
      'We treat creativity as a discipline &mdash; trained through practice, feedback, and shipped work.',
  },
  {
    icon: HeartHandshake,
    name: 'Inclusivity',
    body:
      'Our doors stay open across geographies, backgrounds, and starting points. Talent is everywhere.',
  },
  {
    icon: Mountain,
    name: 'Resilience',
    body:
      'Building anything worthwhile is hard. We help learners stay steady through the messy middle.',
  },
  {
    icon: Users,
    name: 'Teamwork',
    body:
      'No one rises alone. Cohorts, mentors, and partners move forward together &mdash; on purpose.',
  },
];

const TEAM_IMG = (file) => `${import.meta.env.BASE_URL}images/team/${file}`;

const LEADERS = [
  {
    name: 'Enoch Joel Kazibwe',
    role: 'Co-Founder & Team Leader',
    bio: 'Sets the academy&rsquo;s direction and stewards the culture our cohorts learn inside.',
    image: TEAM_IMG('enoch-kazibwe.png'),
  },
  {
    name: 'Allan G. Nkonge',
    role: 'Finance & Strategic Planning',
    bio: 'Keeps the operation honest &mdash; numbers, sustainability, long-range strategy.',
    image: TEAM_IMG('allan-nkonge.png'),
  },
  {
    name: 'David Clemy Kawooya',
    role: 'Social Entrepreneur & Mentor',
    bio: 'Bridges craft and commerce; mentors founders moving from idea into income.',
    image: TEAM_IMG('david-kawooya.png'),
  },
];

function MissionSection() {
  const ref = useReveal({ stagger: 0.1 });
  return (
    <section ref={ref} className="relative noise py-24 sm:py-28 bg-cream" aria-labelledby="mission-heading">
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10">
        <p data-reveal className="eyebrow text-leaf">Our mission</p>
        <h2
          id="mission-heading"
          data-reveal
          className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl leading-[1.15] text-navy"
        >
          A world where every young person in Africa is equipped with{' '}
          <span className="font-serif italic text-gold">
            critical work-readiness skills
          </span>{' '}
          &mdash; as a gateway to meaningful and decent work.
        </h2>
        <p data-reveal className="mt-6 max-w-2xl text-ink/70 leading-relaxed">
          The AfroKreate Academy was founded to close one stubborn gap: between the
          creative, ambitious youth of our continent and the kind of work, ventures, and
          communities they deserve to build.
        </p>
        <p data-reveal className="mt-5 max-w-2xl text-ink/70 leading-relaxed">
          The academy carries the long-term work &mdash; cohorts, mentors, the Incubation
          Hub. <strong className="text-navy">AfroKreate Navigator</strong>, our free
          WhatsApp chatbot, is the front door: a guided conversation that meets youth
          where they already are and points them towards a real next step. Start on
          WhatsApp. Grow with the Academy.
        </p>
        <a
          data-reveal
          href={WHATSAPP_URL_HI}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex btn btn-whatsapp"
          aria-label="Try AfroKreate Navigator on WhatsApp"
        >
          <WhatsAppIcon size={18} />
          Try Navigator on WhatsApp
        </a>
      </div>
    </section>
  );
}

function ValuesGrid() {
  const ref = useReveal({ stagger: 0.08 });
  return (
    <section
      ref={ref}
      className="relative py-24 sm:py-28 bg-navy text-cream"
      aria-labelledby="values-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <p data-reveal className="eyebrow text-gold">Values</p>
          <h2
            id="values-heading"
            data-reveal
            className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl text-cream leading-tight"
          >
            Six values
            <span className="block font-serif italic text-gold/95">we actually use.</span>
          </h2>
        </div>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v) => {
            const Icon = v.icon;
            return (
              <li
                key={v.name}
                data-reveal
                className="rounded-2xl bg-white/[0.04] border border-white/10 p-6"
              >
                <div className="w-11 h-11 rounded-xl bg-gold/15 text-gold flex items-center justify-center">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-xl text-cream">{v.name}</h3>
                <p
                  className="mt-2 text-cream/75 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: v.body }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function HeadMessage() {
  const ref = useReveal({ stagger: 0.1 });
  return (
    <section
      ref={ref}
      className="relative noise py-24 sm:py-28 bg-cream"
      aria-labelledby="head-heading"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 grid gap-10 md:grid-cols-12 items-center">
        <div data-reveal className="md:col-span-5">
          <div className="relative rounded-3xl overflow-hidden shadow-soft">
            <img
              src={TEAM_IMG('pheona-nakishero.png')}
              alt="Portrait of Pheona Nakishero, Head of The AfroKreate Academy."
              loading="lazy"
              className="w-full aspect-[4/5] object-cover object-top"
            />
            <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-navy/85 to-transparent text-cream">
              <p className="font-display text-lg">Pheona Nakishero</p>
              <p className="text-cream/75 text-sm">Head of The AfroKreate Academy</p>
            </div>
          </div>
        </div>
        <div className="md:col-span-7">
          <p data-reveal className="eyebrow text-leaf">A welcome</p>
          <h2
            id="head-heading"
            data-reveal
            className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl leading-tight text-navy"
          >
            From the head of the academy
          </h2>
          <Quote
            data-reveal
            size={36}
            className="mt-7 text-gold"
            aria-hidden="true"
          />
          <blockquote
            data-reveal
            className="mt-3 font-serif italic text-2xl sm:text-[1.7rem] leading-snug text-ink/85"
          >
            &ldquo;We don&rsquo;t shape learners around our curriculum. We shape the
            curriculum around the lives our learners are trying to build &mdash; and we
            walk it with them.&rdquo;
          </blockquote>
          <p data-reveal className="mt-7 text-ink/80 leading-relaxed max-w-xl">
            Welcome. If you&rsquo;re curious about our cohorts, our mentors, or simply how
            to take the next step &mdash; reach out. We respond to every message.
          </p>
          <Link
            data-reveal
            to="/contact"
            className="mt-7 btn btn-navy"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}

function Leadership() {
  const ref = useReveal({ stagger: 0.1 });
  return (
    <section
      ref={ref}
      className="relative py-24 sm:py-28 bg-cream"
      aria-labelledby="leadership-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <p data-reveal className="eyebrow text-leaf">Leadership</p>
          <h2
            id="leadership-heading"
            data-reveal
            className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl leading-tight text-navy"
          >
            Co-founders
            <span className="block font-serif italic text-navy/70">
              who built this with their hands.
            </span>
          </h2>
        </div>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {LEADERS.map((p) => (
            <li key={p.name} data-reveal className="card p-0 overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={`Portrait of ${p.name}.`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-cinematic hover:scale-[1.04]"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-navy">{p.name}</h3>
                <p className="mt-1 text-leaf text-sm font-medium">{p.role}</p>
                <p
                  className="mt-3 text-ink/75 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: p.bio }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="An academy for the work"
        italic="that pays — and matters."
        lead="The AfroKreate Academy is a youth-centred academy based in Kampala, Uganda, with a pan-African vision. We exist to close the gap between Africa's creative young people and the work, ventures, and communities they deserve to build."
        image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=2000&q=80"
      />
      <MissionSection />
      <ValuesGrid />
      <HeadMessage />
      <Leadership />
    </>
  );
}
