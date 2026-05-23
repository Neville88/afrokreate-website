import { useEffect, useRef, useState } from 'react';
import { Palette, Briefcase, Users, Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useReveal from '../../hooks/useReveal.js';

gsap.registerPlugin(ScrollTrigger);

const TYPED_LINE = 'Turn ideas into ventures that pay.';

function CardCreative() {
  const ref = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const path = ref.current?.querySelector('path');
      if (!path) return;
      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      ScrollTrigger.create({
        trigger: ref.current,
        start: 'top 80%',
        once: true,
        onEnter: () =>
          gsap.to(path, { strokeDashoffset: 0, duration: 1.6, ease: 'power2.inOut' }),
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <article ref={ref} data-reveal className="card p-8 group">
      <div className="flex items-center justify-between">
        <div className="w-12 h-12 rounded-2xl bg-gold/15 text-gold flex items-center justify-center">
          <Palette size={22} aria-hidden="true" />
        </div>
        <span className="font-mono text-[11px] tracking-widest text-navy/45">01</span>
      </div>
      <h3 className="mt-5 font-display text-xl text-navy">Creative skills development</h3>
      <p className="mt-3 text-ink/75 leading-relaxed">
        Design, digital art, music, film, and hands-on craft &mdash; the practical creative
        toolkit Africa&rsquo;s industries are actually hiring for.
      </p>
      <svg
        className="mt-6 w-full h-12 text-gold/70"
        viewBox="0 0 200 40"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M2 22 C 24 4, 44 38, 70 22 S 110 8, 130 22 S 170 38, 198 18"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    </article>
  );
}

function CardEntrepreneurship() {
  const ref = useRef(null);
  const [typed, setTyped] = useState('');
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ref.current,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          let i = 0;
          const id = setInterval(() => {
            i += 1;
            setTyped(TYPED_LINE.slice(0, i));
            if (i >= TYPED_LINE.length) clearInterval(id);
          }, 36);
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <article ref={ref} data-reveal className="card p-8">
      <div className="flex items-center justify-between">
        <div className="w-12 h-12 rounded-2xl bg-leaf/15 text-leaf flex items-center justify-center">
          <Briefcase size={22} aria-hidden="true" />
        </div>
        <span className="font-mono text-[11px] tracking-widest text-navy/45">02</span>
      </div>
      <h3 className="mt-5 font-display text-xl text-navy">Entrepreneurship focus</h3>
      <p className="mt-3 text-ink/75 leading-relaxed">
        Practical business knowledge &mdash; finance, customers, operations &mdash; rooted in
        the ILO&rsquo;s Start &amp; Improve Your Business framework.
      </p>
      <p
        className="mt-6 font-mono text-sm text-navy bg-cream/80 border border-black/5 rounded-xl px-4 py-3"
        aria-live="polite"
      >
        <span className="text-leaf">$</span> {typed}
        <span className="inline-block w-[2px] h-4 bg-navy/70 ml-0.5 align-middle animate-pulse" aria-hidden="true" />
      </p>
    </article>
  );
}

function CardYouth() {
  const items = ['Cohort community', '1:1 mentorship', 'Real-world projects', 'Pathways to work'];
  return (
    <article data-reveal className="card p-8 transition-transform duration-500 ease-cinematic hover:-translate-y-1.5 hover:shadow-[0_20px_60px_-20px_rgba(26,26,46,0.35)]">
      <div className="flex items-center justify-between">
        <div className="w-12 h-12 rounded-2xl bg-navy/10 text-navy flex items-center justify-center">
          <Users size={22} aria-hidden="true" />
        </div>
        <span className="font-mono text-[11px] tracking-widest text-navy/45">03</span>
      </div>
      <h3 className="mt-5 font-display text-xl text-navy">Youth-centered learning</h3>
      <p className="mt-3 text-ink/75 leading-relaxed">
        Mentorship, cohort community, and real-world experience &mdash; not lecture-hall
        theory alone.
      </p>
      <ul className="mt-6 space-y-2">
        {items.map((it) => (
          <li key={it} className="flex items-center gap-2 text-sm text-ink/80">
            <span className="w-5 h-5 rounded-full bg-leaf/15 text-leaf flex items-center justify-center">
              <Check size={13} aria-hidden="true" />
            </span>
            {it}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Features() {
  const ref = useReveal({ stagger: 0.12 });
  return (
    <section
      ref={ref}
      className="relative noise py-24 sm:py-28 bg-cream"
      aria-labelledby="features-heading"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <p data-reveal className="eyebrow text-leaf">Three pillars</p>
          <h2
            id="features-heading"
            data-reveal
            className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl leading-tight"
          >
            One academy, three pillars
            <span className="block font-serif italic text-navy/80">that work together.</span>
          </h2>
          <p data-reveal className="mt-5 text-ink/70 leading-relaxed">
            We don&rsquo;t bolt creative skills onto a generic curriculum. Every learner
            grows on three tracks at once &mdash; craft, business, and community.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <CardCreative />
          <CardEntrepreneurship />
          <CardYouth />
        </div>
      </div>
    </section>
  );
}
