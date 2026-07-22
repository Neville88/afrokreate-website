import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Heart, Copy, Check } from 'lucide-react';
import PageHeader from '../components/PageHeader.jsx';
import Accordion from '../components/Accordion.jsx';
import WhatsAppIcon from '../components/WhatsAppIcon.jsx';
import useReveal from '../hooks/useReveal.js';
import {
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
  WHATSAPP_URL_HI,
  PHONE_DISPLAY,
  PHONE_TEL,
  EMAIL_PRIMARY,
  EMAIL_SECONDARY,
  ADDRESS_LINES,
  ADDRESS_SINGLE_LINE,
} from '../constants/contact.js';

const FAQ = [
  {
    q: 'How do I reach AfroKreate quickly?',
    a: (
      <p>
        The fastest way is WhatsApp. Send us a message at{' '}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-leaf font-medium lift-link"
        >
          {WHATSAPP_DISPLAY}
        </a>{' '}
        and our Navigator will respond &mdash; usually within minutes during working hours.
      </p>
    ),
  },
  {
    q: 'What is The AfroKreate Academy?',
    a:
      'A youth-centred academy headquartered in Kampala, Uganda, equipping Africa\u2019s young people with creative and entrepreneurial skills through mentorship cohorts and a startup incubation hub.',
  },
  {
    q: 'Who can join?',
    a:
      'Youth aged roughly 16–30 who are seeking real skills, clear direction, or entrepreneurship support. Open to learners across creative disciplines and business interests; pan-African in vision, East African in operations.',
  },
  {
    q: 'Do I need a university degree?',
    a:
      'No. We meet learners where they are and focus on practical pathways and mentorship. Many of our graduates come in without a degree and leave with portfolio work, ventures, or paid roles.',
  },
  {
    q: 'What programmes do you offer?',
    a: (
      <p>
        Two flagship programmes: the{' '}
        <a href="#/programs" className="text-leaf font-medium lift-link">
          Youth Mentorship Programme
        </a>{' '}
        and the{' '}
        <a href="#/programs" className="text-leaf font-medium lift-link">
          Business Incubation Hub
        </a>
        . Both are detailed on the Programs page.
      </p>
    ),
  },
];

function WhatsAppHero() {
  const ref = useReveal({ stagger: 0.08 });
  return (
    <section ref={ref} className="relative bg-cream py-16 sm:py-20" aria-labelledby="wa-card">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div
          data-reveal
          className="rounded-3xl overflow-hidden shadow-soft border border-black/5"
        >
          <div className="bg-gradient-to-br from-leaf to-[#0f5a3a] text-cream p-8 sm:p-10 md:p-12 grid gap-8 md:grid-cols-12 items-center">
            <div className="md:col-span-7">
              <p className="eyebrow text-cream/80">Fastest way to reach us</p>
              <h2
                id="wa-card"
                className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl leading-tight text-cream"
              >
                AfroKreate Navigator
                <span className="block font-serif italic">on WhatsApp.</span>
              </h2>
              <p className="mt-5 text-cream/85 max-w-lg leading-relaxed">
                Send <span className="font-mono">&ldquo;Hi&rdquo;</span> and our chatbot
                guides you to your next step &mdash; cohorts, applications, fees,
                mentorship, or simply where to begin. Type{' '}
                <span className="font-mono">HELP</span> anytime to reach a human.
              </p>
            </div>
            <div className="md:col-span-5 md:text-right space-y-3">
              <p className="font-display text-3xl sm:text-4xl text-cream tracking-tight">
                {WHATSAPP_DISPLAY}
              </p>
              <a
                href={WHATSAPP_URL_HI}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp text-base w-full md:w-auto"
                aria-label="Try AfroKreate Navigator on WhatsApp"
              >
                <WhatsAppIcon size={20} />
                Try Navigator now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    // Static-site safe fallback: open user's mail client with prefilled body.
    // Replace with Formspree / Web3Forms by setting `action` on the <form>
    // (e.g. action="https://formspree.io/f/<your-id>" method="POST").
    setStatus('sending');
    const subject = encodeURIComponent(
      form.subject || 'Inquiry — The AfroKreate Academy'
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`
    );
    window.location.href = `mailto:${EMAIL_PRIMARY}?subject=${subject}&body=${body}`;
    setTimeout(() => setStatus('sent'), 400);
  };

  return (
    // FORMSPREE-READY:
    // Replace the no-op submit handler with a real endpoint, e.g.:
    //   <form action="https://formspree.io/f/<id>" method="POST">
    // and remove the onSubmit + mailto fallback below.
    <form
      onSubmit={onSubmit}
      className="rounded-3xl bg-white shadow-soft border border-black/5 p-7 sm:p-8 space-y-5"
      aria-label="Contact The AfroKreate Academy"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-navy">Full name</span>
          <input
            required
            name="name"
            type="text"
            value={form.name}
            onChange={onChange}
            placeholder="Your name"
            className="mt-2 w-full rounded-xl border border-black/10 bg-cream/60 px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-navy">Email</span>
          <input
            required
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            placeholder="you@example.com"
            className="mt-2 w-full rounded-xl border border-black/10 bg-cream/60 px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition"
          />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium text-navy">Phone (optional)</span>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={onChange}
            placeholder="+256 7XX XXX XXX"
            className="mt-2 w-full rounded-xl border border-black/10 bg-cream/60 px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-navy">Subject</span>
          <input
            name="subject"
            type="text"
            value={form.subject}
            onChange={onChange}
            placeholder="Mentorship, Incubation, partnership…"
            className="mt-2 w-full rounded-xl border border-black/10 bg-cream/60 px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition"
          />
        </label>
      </div>
      <label className="block">
        <span className="text-sm font-medium text-navy">Message</span>
        <textarea
          required
          name="message"
          rows={5}
          value={form.message}
          onChange={onChange}
          placeholder="Tell us a little about you and how we can help."
          className="mt-2 w-full rounded-xl border border-black/10 bg-cream/60 px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition resize-y"
        />
      </label>

      <div className="flex flex-col gap-4 pt-2">
        <p className="text-xs text-ink/60 max-w-sm break-words">
          Submitting opens your email client with a prefilled message to{' '}
          <a className="underline break-all" href={`mailto:${EMAIL_PRIMARY}`}>
            {EMAIL_PRIMARY}
          </a>
          . Or chat with us instantly on WhatsApp.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto sm:ml-auto">
          <a
            href={`mailto:${EMAIL_PRIMARY}`}
            className="btn btn-outline text-navy border-navy/20 hover:bg-navy/5 w-full sm:w-auto"
          >
            <Mail size={16} aria-hidden="true" />
            Email instead
          </a>
          <button
            type="submit"
            className="btn btn-gold w-full sm:w-auto"
            disabled={status === 'sending'}
          >
            <Send size={16} aria-hidden="true" />
            {status === 'sent' ? 'Sent' : 'Send message'}
          </button>
        </div>
      </div>
    </form>
  );
}

function CopyableLine({ label, value, href, isWhatsApp }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard may be blocked */
    }
  };
  return (
    <div className="flex items-start gap-3 min-w-0">
      <div className="mt-0.5 text-gold shrink-0">
        {label === 'Phone' ? (
          <Phone size={18} />
        ) : label === 'WhatsApp' ? (
          <WhatsAppIcon size={18} />
        ) : label === 'Email' ? (
          <Mail size={18} />
        ) : (
          <MapPin size={18} />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs uppercase tracking-widest text-navy/55">{label}</p>
        <a
          href={href}
          target={isWhatsApp ? '_blank' : undefined}
          rel={isWhatsApp ? 'noopener noreferrer' : undefined}
          className={[
            'lift-link text-navy font-medium',
            label === 'Email' ? 'break-all' : 'break-words',
          ].join(' ')}
        >
          {value}
        </a>
      </div>
      <button
        type="button"
        onClick={copy}
        aria-label={`Copy ${label}`}
        className="text-navy/40 hover:text-navy transition shrink-0"
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>
    </div>
  );
}

function InfoAndFAQ() {
  const ref = useReveal({ stagger: 0.08 });
  return (
    <section ref={ref} className="relative noise py-20 sm:py-24 bg-cream">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 grid gap-10 lg:grid-cols-12">
        {/* Info + FAQ column */}
        <div className="lg:col-span-5">
          <div data-reveal className="rounded-3xl bg-white p-7 sm:p-8 shadow-soft border border-black/5">
            <h2 className="font-display text-2xl text-navy">Visit or write to us</h2>
            <p className="mt-2 text-ink/70 text-sm">
              Our office is in Kampala, Uganda. You can also email or call &mdash; our team
              is reachable Monday through Saturday.
            </p>

            <div className="mt-6 space-y-5">
              <CopyableLine
                label="Address"
                value={ADDRESS_SINGLE_LINE}
                href={`https://maps.google.com/?q=${encodeURIComponent(ADDRESS_SINGLE_LINE)}`}
              />
              <CopyableLine
                label="Phone"
                value={PHONE_DISPLAY}
                href={PHONE_TEL}
              />
              <CopyableLine
                label="WhatsApp"
                value={WHATSAPP_DISPLAY}
                href={WHATSAPP_URL}
                isWhatsApp
              />
              <CopyableLine
                label="Email"
                value={EMAIL_PRIMARY}
                href={`mailto:${EMAIL_PRIMARY}`}
              />
              <CopyableLine
                label="Email"
                value={EMAIL_SECONDARY}
                href={`mailto:${EMAIL_SECONDARY}`}
              />
            </div>

            {/* Address block (semantic) */}
            <address className="sr-only not-italic">
              {ADDRESS_LINES.join(', ')}
            </address>
          </div>

          <div data-reveal className="mt-8">
            <p className="eyebrow text-leaf">FAQ</p>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl text-navy">
              Common questions
            </h2>
            <div className="mt-6">
              <Accordion items={FAQ} />
            </div>
          </div>
        </div>

        {/* Form column */}
        <div className="lg:col-span-7">
          <div data-reveal>
            <p className="eyebrow text-gold">Send a message</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl text-navy leading-tight">
              We reply to every learner.
            </h2>
            <p className="mt-3 text-ink/70 max-w-xl leading-relaxed">
              Tell us about you and what you&rsquo;re hoping to do. If you&rsquo;d rather
              chat right now, our WhatsApp number is one tap away.
            </p>
          </div>
          <div data-reveal className="mt-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function DonateBlock() {
  const ref = useReveal({ stagger: 0.08 });
  return (
    <section
      id="donate"
      ref={ref}
      className="relative py-20 sm:py-24 bg-navy text-cream"
      aria-labelledby="donate-heading"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <Heart data-reveal size={28} className="mx-auto text-gold" aria-hidden="true" />
        <p data-reveal className="mt-5 eyebrow text-gold">Support a learner</p>
        <h2
          id="donate-heading"
          data-reveal
          className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl leading-tight text-cream"
        >
          Sponsor a youth into our next cohort.
        </h2>
        <p data-reveal className="mt-5 text-cream/80 leading-relaxed max-w-xl mx-auto">
          Every contribution helps us reach more young people across East Africa with
          mentorship, business support, and creative tools. Reach out and we&rsquo;ll
          share donation pathways tailored to you &mdash; individual, corporate, or
          institutional.
        </p>
        <div data-reveal className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3">
          <a
            href={WHATSAPP_URL_HI}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp w-full sm:w-auto"
            aria-label="Talk to our team on WhatsApp via AfroKreate Navigator"
          >
            <WhatsAppIcon size={18} />
            Talk to our team
          </a>
          <a
            href={`mailto:${EMAIL_PRIMARY}?subject=Donation%20inquiry`}
            className="btn btn-outline border-white/30 text-cream hover:bg-white/10 w-full sm:w-auto"
          >
            <Mail size={16} aria-hidden="true" />
            Email about donating
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to us."
        italic="We listen."
        lead="Whether you're a prospective learner, parent, partner, or supporter — there's a door for you here. Pick the channel that works for you."
        image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=80"
      />
      <WhatsAppHero />
      <InfoAndFAQ />
      <DonateBlock />
    </>
  );
}
