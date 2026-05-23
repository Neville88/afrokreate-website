import useReveal from '../../hooks/useReveal.js';

const STATS = [
  {
    value: '7M',
    valueLabel: '7 million',
    label: 'Young graduates Africa produces yearly — yet only ~3 million jobs are created.',
  },
  {
    value: '3 yrs',
    valueLabel: '3 years',
    label: 'Average time for a university graduate in Africa to land first employment.',
  },
  {
    value: '45%',
    valueLabel: '45 percent',
    label: 'Employers who report a clear skills gap in young African applicants.',
  },
];

export default function ProblemBand() {
  const ref = useReveal({ stagger: 0.12 });
  return (
    <section
      ref={ref}
      className="relative bg-navy text-cream py-24 sm:py-28"
      aria-labelledby="problem-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <p data-reveal className="eyebrow text-gold">The urgency</p>
          <h2
            id="problem-heading"
            data-reveal
            className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl text-cream leading-tight"
          >
            A continent of talent.
            <span className="block font-serif italic text-gold/95">A widening gap.</span>
          </h2>
          <p data-reveal className="mt-5 text-cream/75 leading-relaxed">
            Africa&rsquo;s young people are creative, ambitious, and hungry for
            opportunity. The numbers below frame the gap we exist to close.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {STATS.map((s) => (
            <li
              key={s.value}
              data-reveal
              className="relative rounded-3xl bg-white/[0.04] border border-white/10 p-7 sm:p-8 overflow-hidden"
            >
              {/* Gold geometric corner */}
              <svg
                className="absolute top-3 right-3 text-gold/70"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                aria-hidden="true"
              >
                <path
                  d="M2 18 L10 10 L18 18 L26 10 L34 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <path
                  d="M2 26 L10 18 L18 26 L26 18 L34 26"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  opacity="0.55"
                />
              </svg>
              <p
                aria-label={s.valueLabel}
                className="font-display font-semibold text-5xl sm:text-6xl text-gold tracking-tight"
              >
                {s.value}
              </p>
              <p className="mt-4 text-cream/85 leading-relaxed">{s.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
