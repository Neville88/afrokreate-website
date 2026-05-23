import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import Logo from './Logo.jsx';
import WhatsAppIcon from './WhatsAppIcon.jsx';
import { WHATSAPP_URL_HI } from '../constants/contact.js';

const links = [
  { to: '/', label: 'Home' },
  { to: '/programs', label: 'Programs' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Hero is dark only on the home route — pick contrasting nav surface.
  const overHero = pathname === '/' && !scrolled;

  return (
    <header className="fixed top-0 inset-x-0 z-40 px-4 pt-4">
      <nav
        aria-label="Primary"
        className={[
          'mx-auto flex items-center justify-between gap-3 transition-all duration-500 ease-cinematic',
          'rounded-full border',
          overHero
            ? 'max-w-6xl bg-white/10 border-white/20 backdrop-blur-md text-cream'
            : 'max-w-6xl bg-cream/85 border-black/5 backdrop-blur-md text-navy shadow-soft',
          'pl-4 pr-2 py-2',
        ].join(' ')}
      >
        <Link
          to="/"
          aria-label="The AfroKreate Academy — home"
          className="flex items-center"
        >
          <Logo tone={overHero ? 'cream' : 'navy'} />
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1 text-sm font-medium">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  [
                    'px-4 py-2 rounded-full transition-colors duration-200',
                    isActive
                      ? overHero
                        ? 'bg-white/20 text-cream'
                        : 'bg-navy text-cream'
                      : overHero
                      ? 'text-cream/85 hover:text-cream hover:bg-white/10'
                      : 'text-navy/80 hover:text-navy hover:bg-black/5',
                  ].join(' ')
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-2">
          <a
            href={WHATSAPP_URL_HI}
            target="_blank"
            rel="noopener noreferrer"
            className={[
              'btn px-4 py-2 text-sm border',
              overHero
                ? 'border-white/40 text-cream hover:bg-white/10'
                : 'border-leaf/40 text-leaf hover:bg-leaf/10',
            ].join(' ')}
            aria-label="Try AfroKreate Navigator on WhatsApp"
          >
            <WhatsAppIcon size={16} />
            <span>Try Navigator</span>
          </a>
          <Link
            to="/contact#donate"
            className={[
              'btn-ghost btn px-3 py-2 text-sm',
              overHero ? 'text-cream/85 hover:text-cream' : 'text-navy/80 hover:text-navy',
            ].join(' ')}
          >
            <Heart size={15} aria-hidden="true" />
            <span>Donate</span>
          </Link>
          <Link to="/contact" className="btn btn-gold text-sm px-5 py-2">
            Apply
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className={[
            'lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full transition-colors',
            overHero ? 'bg-white/15 text-cream' : 'bg-navy text-cream',
          ].join(' ')}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu sheet */}
      <div
        className={[
          'lg:hidden mx-auto max-w-6xl mt-2 origin-top transition-all duration-300 ease-cinematic',
          open
            ? 'opacity-100 scale-y-100 pointer-events-auto'
            : 'opacity-0 scale-y-95 pointer-events-none',
        ].join(' ')}
      >
        <div className="rounded-3xl bg-cream border border-black/5 shadow-soft p-4 text-navy">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) =>
                    [
                      'block px-4 py-3 rounded-2xl text-base',
                      isActive ? 'bg-navy text-cream' : 'hover:bg-black/5',
                    ].join(' ')
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-3 grid grid-cols-1 gap-2">
            <a
              href={WHATSAPP_URL_HI}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp w-full"
              aria-label="Try AfroKreate Navigator on WhatsApp"
            >
              <WhatsAppIcon size={18} />
              Try Navigator on WhatsApp
            </a>
            <Link to="/contact" className="btn btn-gold w-full">
              Apply for admission
            </Link>
            <Link
              to="/contact#donate"
              className="btn btn-outline w-full text-navy border-navy/20 hover:bg-navy/5"
            >
              <Heart size={16} aria-hidden="true" />
              Donate
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
