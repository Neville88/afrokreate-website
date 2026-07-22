import { useState, useId } from 'react';
import { Plus, Minus } from 'lucide-react';

// Accessible accordion — single-open by default.
export default function Accordion({ items, allowMultiple = false }) {
  const [open, setOpen] = useState(() => new Set());
  const baseId = useId();

  const toggle = (idx) => {
    setOpen((prev) => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  return (
    <ul className="divide-y divide-black/10 border-y border-black/10">
      {items.map((it, idx) => {
        const isOpen = open.has(idx);
        const headerId = `${baseId}-h-${idx}`;
        const panelId = `${baseId}-p-${idx}`;
        return (
          <li key={it.q}>
            <h3>
              <button
                id={headerId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left group"
              >
                <span className="font-display text-lg sm:text-xl text-navy group-hover:text-gold transition-colors">
                  {it.q}
                </span>
                <span
                  className={[
                    'shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ease-cinematic',
                    isOpen
                      ? 'bg-navy text-cream rotate-0'
                      : 'bg-navy/5 text-navy group-hover:bg-navy group-hover:text-cream',
                  ].join(' ')}
                >
                  {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              hidden={!isOpen}
              className="pb-6 pr-4 sm:pr-12 text-ink/80 leading-relaxed"
            >
              {typeof it.a === 'string' ? <p>{it.a}</p> : it.a}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
