import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import WhatsAppIcon from '../WhatsAppIcon.jsx';
import { WHATSAPP_URL_HI } from '../../constants/contact.js';

// Tasteful WhatsApp chat mockup — 1 user line, 2 bot lines.
// Lives inside the hero on desktop; collapses to a compact card on mobile.
function ChatMockup() {
  return (
    <div className="relative w-full max-w-sm mx-auto md:ml-auto">
      {/* Subtle glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-6 rounded-[2.5rem] bg-gold/10 blur-2xl"
      />
      <div className="relative rounded-[2rem] bg-[#0c1024]/85 backdrop-blur-md border border-white/10 shadow-soft p-3 overflow-hidden">
        {/* Bar */}
        <div className="flex items-center gap-2.5 px-3 pt-1 pb-3 border-b border-white/10">
          <span className="inline-flex w-9 h-9 rounded-full bg-leaf/95 items-center justify-center text-cream">
            <WhatsAppIcon size={16} />
          </span>
          <div className="flex-1 leading-tight">
            <p className="text-cream text-sm font-medium">AfroKreate Navigator</p>
            <p className="text-[11px] text-cream/55 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-leaf inline-block" aria-hidden="true" />
              online · WhatsApp Business
            </p>
          </div>
        </div>

        {/* Conversation */}
        <div className="px-3 py-4 space-y-2.5">
          {/* User bubble */}
          <div className="flex justify-end" data-chat-bubble>
            <div className="max-w-[80%] rounded-2xl rounded-tr-md bg-leaf/95 text-cream text-sm px-3.5 py-2 shadow">
              Hi
            </div>
          </div>
          {/* Bot bubble 1 */}
          <div className="flex justify-start" data-chat-bubble>
            <div className="max-w-[88%] rounded-2xl rounded-tl-md bg-white/10 text-cream text-sm px-3.5 py-2.5 leading-snug">
              Welcome to AfroKreate Navigator <span aria-hidden="true">👋</span>
              <br />
              I&rsquo;ll help you find your next step.
            </div>
          </div>
          {/* Bot bubble 2 */}
          <div className="flex justify-start" data-chat-bubble>
            <div className="max-w-[88%] rounded-2xl rounded-tl-md bg-white/10 text-cream text-sm px-3.5 py-2.5 leading-snug">
              First — what&rsquo;s your name and how old are you?
            </div>
          </div>
          {/* Typing indicator */}
          <div className="flex justify-start pl-1 pt-1" aria-hidden="true">
            <div className="flex items-center gap-1">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-cream/40"
                  style={{
                    animation: 'fab-pulse 1.2s ease-in-out infinite',
                    animationDelay: `${i * 0.15}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Input bar */}
        <div className="mt-1 mx-3 mb-3 rounded-full bg-white/8 border border-white/10 px-4 py-2 text-xs text-cream/55 flex items-center justify-between">
          <span>Type a message…</span>
          <WhatsAppIcon size={14} className="text-leaf" />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('[data-hero-badge]', { y: 12, autoAlpha: 0, duration: 0.6 })
        .from('[data-hero-eyebrow]', { y: 14, autoAlpha: 0, duration: 0.6 }, '-=0.35')
        .from('[data-hero-line-1]', { y: 28, autoAlpha: 0, duration: 0.9 }, '-=0.4')
        .from('[data-hero-line-2]', { y: 28, autoAlpha: 0, duration: 0.9 }, '-=0.65')
        .from('[data-hero-sub]', { y: 18, autoAlpha: 0, duration: 0.7 }, '-=0.55')
        .from(
          '[data-hero-cta] > *',
          { y: 14, autoAlpha: 0, duration: 0.6, stagger: 0.08 },
          '-=0.5'
        )
        .from('[data-hero-trust]', { autoAlpha: 0, duration: 0.6 }, '-=0.3')
        .from(
          '[data-hero-mock]',
          { x: 30, autoAlpha: 0, duration: 0.9 },
          '-=0.9'
        )
        .from(
          '[data-chat-bubble]',
          { y: 8, autoAlpha: 0, duration: 0.5, stagger: 0.18 },
          '-=0.5'
        );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative isolate min-h-0 md:min-h-[90dvh] w-full overflow-hidden bg-navy text-cream"
      aria-labelledby="hero-heading"
    >
      <img
        src={`${import.meta.env.BASE_URL}images/hero-mentorship.png`}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-[center_45%] scale-105"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#1A1A2E]/96 via-[#1A1A2E]/82 to-[#1A1A2E]/55"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/95 via-[#1A1A2E]/35 to-transparent md:via-[#1A1A2E]/15"
        aria-hidden="true"
      />
      <div className="heritage-border absolute bottom-0 inset-x-0" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 pt-32 pb-16 sm:pt-36 sm:pb-24 md:pt-40 md:pb-32 grid md:grid-cols-12 gap-8 lg:gap-12 items-end md:min-h-[90dvh]">
        {/* Left: copy + CTAs */}
        <div className="md:col-span-7 lg:col-span-7">
          {/* Navigator badge */}
          <span
            data-hero-badge
            className="inline-flex items-center gap-2 rounded-full bg-leaf/15 border border-leaf/30 px-3 py-1.5 text-[10px] sm:text-[11px] font-mono tracking-[0.14em] sm:tracking-[0.22em] uppercase text-leaf"
          >
            <WhatsAppIcon size={12} className="text-leaf shrink-0" />
            <span className="sm:hidden">Navigator · WhatsApp</span>
            <span className="hidden sm:inline">AfroKreate Navigator · WhatsApp</span>
          </span>

          <p data-hero-eyebrow className="mt-4 sm:mt-5 eyebrow text-gold/90">
            Build your skills, shape your future
          </p>
          <h1
            id="hero-heading"
            className="mt-3 sm:mt-4 font-display font-semibold leading-[1.02] sm:leading-[0.98] text-cream"
          >
            <span
              data-hero-line-1
              className="block text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Invest in futures,
            </span>
            <span
              data-hero-line-2
              className="block font-serif italic font-medium text-gold text-[2.15rem] sm:text-6xl md:text-7xl lg:text-[5rem] mt-1"
            >
              build communities.
            </span>
          </h1>

          <p
            data-hero-sub
            className="mt-5 sm:mt-7 max-w-xl text-cream/85 text-[0.95rem] sm:text-lg leading-relaxed"
          >
            Your next step, on WhatsApp &mdash; meet{' '}
            <strong className="text-cream font-semibold">AfroKreate Navigator</strong>, our
            free chatbot that guides Africa&rsquo;s youth from where you are to a clearer
            next step. <span className="text-cream/70">No app download. Just chat.</span>
          </p>

          <div data-hero-cta className="mt-7 sm:mt-9 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">
            <a
              href={WHATSAPP_URL_HI}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp text-base w-full sm:w-auto"
              aria-label="Try AfroKreate Navigator on WhatsApp"
            >
              <WhatsAppIcon size={20} />
              <span>Try Navigator now</span>
            </a>
            <Link to="/contact" className="btn btn-gold text-base w-full sm:w-auto">
              Apply for admission
            </Link>
            <Link
              to="/programs"
              className="btn btn-outline text-cream/90 hover:text-cream w-full sm:w-auto"
            >
              Explore programmes
            </Link>
          </div>

          <p data-hero-trust className="mt-6 sm:mt-7 text-xs text-cream/65 tracking-wide leading-relaxed">
            Trusted by learners across East Africa
            <span className="dot" />
            Kampala · Pan-African vision
          </p>
        </div>

        {/* Right: chat mockup — desktop only to keep the first mobile viewport uncluttered */}
        <aside
          className="hidden md:block md:col-span-5 lg:col-span-5 md:self-end"
          aria-label="AfroKreate Navigator chat preview"
          data-hero-mock
        >
          <ChatMockup />
        </aside>
      </div>
    </section>
  );
}
