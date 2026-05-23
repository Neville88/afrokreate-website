import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Manifesto() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = root.current?.querySelectorAll('[data-line]');
      if (!lines || !lines.length) return;
      gsap.fromTo(
        lines,
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.0,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: root.current,
            start: 'top 70%',
            once: true,
          },
        }
      );

      gsap.to(root.current.querySelector('[data-parallax]'), {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
        },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative isolate overflow-hidden bg-navy text-cream py-28 sm:py-36"
      aria-labelledby="manifesto-heading"
    >
      <div
        data-parallax
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 60'><g fill='none' stroke='%23D4A017' stroke-width='1'><path d='M0 30 L15 0 L30 30 L45 0 L60 30 L75 0 L90 30 L105 0 L120 30'/><path d='M0 30 L15 60 L30 30 L45 60 L60 30 L75 60 L90 30 L105 60 L120 30'/></g></svg>\")",
          backgroundSize: '240px 120px',
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10">
        <p data-line className="eyebrow text-gold">Our philosophy</p>

        <h2 id="manifesto-heading" className="sr-only">
          Our philosophy on education
        </h2>

        <p
          data-line
          className="mt-8 font-display text-3xl sm:text-4xl md:text-5xl leading-[1.15] text-cream/90"
        >
          Most education focuses on
          <span className="block font-serif italic text-cream/70">
            degrees and theory without clear paths to income.
          </span>
        </p>

        <div className="my-10 h-px w-24 bg-gold/60" aria-hidden="true" />

        <p
          data-line
          className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.15] text-cream"
        >
          We focus on
          <span className="block font-serif italic text-gold">
            practical skills, entrepreneurship, and mentorship
          </span>
          <span className="block text-cream/85 mt-2">
            that lead to jobs &mdash; or businesses youth build themselves.
          </span>
        </p>
      </div>
    </section>
  );
}
