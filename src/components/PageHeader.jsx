// Compact, consistent header for inner pages — keeps Hero scope on Home only.
export default function PageHeader({ eyebrow, title, italic, lead, image }) {
  return (
    <header className="relative isolate overflow-hidden bg-navy text-cream pt-36 pb-24 sm:pt-40 sm:pb-28">
      {image && (
        <>
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40"
            aria-hidden="true"
          />
        </>
      )}
      <div className="heritage-border absolute bottom-0 inset-x-0" aria-hidden="true" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <p className="eyebrow text-gold">{eyebrow}</p>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-cream max-w-3xl">
          {title}{' '}
          {italic && (
            <span className="font-serif italic text-gold">{italic}</span>
          )}
        </h1>
        {lead && (
          <p className="mt-6 max-w-2xl text-cream/80 text-lg leading-relaxed">{lead}</p>
        )}
      </div>
    </header>
  );
}
