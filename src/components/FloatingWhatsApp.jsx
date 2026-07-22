import { useEffect, useState } from 'react';
import WhatsAppIcon from './WhatsAppIcon.jsx';
import { WHATSAPP_URL_HI } from '../constants/contact.js';

// Floating WhatsApp action button
// - Always visible on desktop
// - Hides when scrolling down on small screens, returns on scroll up
// - Subtle pulse only on the first visit of a session (tasteful)
export default function FloatingWhatsApp() {
  const [hidden, setHidden] = useState(false);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    try {
      const seen = sessionStorage.getItem('akademy_fab_seen');
      if (!seen) {
        setPulse(true);
        sessionStorage.setItem('akademy_fab_seen', '1');
        const t = setTimeout(() => setPulse(false), 7500);
        return () => clearTimeout(t);
      }
    } catch {
      /* sessionStorage may be unavailable; fail open */
    }
  }, []);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        const goingDown = y > lastY && y > 240;
        const isMobile = window.innerWidth < 768;
        if (isMobile) setHidden(goingDown);
        else setHidden(false);
        lastY = y;
        ticking = false;
      });
      ticking = true;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={WHATSAPP_URL_HI}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open AfroKreate Navigator on WhatsApp"
      className={[
        'fixed z-50 right-4 sm:right-7',
        'bottom-[max(1.25rem,env(safe-area-inset-bottom))] sm:bottom-7',
        'inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16',
        'rounded-full bg-whatsapp text-white shadow-soft',
        'transition-all duration-500 ease-cinematic',
        'hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold',
        hidden ? 'translate-y-24 opacity-0' : 'translate-y-0 opacity-100',
        pulse ? 'animate-fab-pulse' : '',
      ].join(' ')}
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
