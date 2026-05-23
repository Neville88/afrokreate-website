// Wordmark + monogram — keeps the brand consistent across navbar/footer.
export default function Logo({ tone = 'navy', compact = false }) {
  const wordColor = tone === 'cream' ? 'text-cream' : 'text-navy';
  const accent = tone === 'cream' ? '#F5F0E8' : '#1A1A2E';
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg
        width="34"
        height="34"
        viewBox="0 0 64 64"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="64" height="64" rx="14" fill={accent} />
        <path
          d="M14 46 L26 18 L34 18 L46 46 H38 L35 38 H25 L22 46 Z"
          fill="#D4A017"
        />
        <path d="M27 31 L33 31 L30 23 Z" fill={accent} />
      </svg>
      {!compact && (
        <span className={`font-display font-semibold tracking-tight leading-none ${wordColor}`}>
          <span className="block text-[0.62rem] uppercase tracking-[0.32em] opacity-70">
            The
          </span>
          <span className="block text-base sm:text-lg">AfroKreate Academy</span>
        </span>
      )}
    </span>
  );
}
