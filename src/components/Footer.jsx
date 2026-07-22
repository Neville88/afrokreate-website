import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';
import Logo from './Logo.jsx';
import WhatsAppIcon from './WhatsAppIcon.jsx';
import {
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  EMAIL_PRIMARY,
  EMAIL_SECONDARY,
  ADDRESS_LINES,
} from '../constants/contact.js';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-navy text-cream rounded-t-[2rem] sm:rounded-t-[3rem] mt-16 sm:mt-24 pb-[max(0rem,env(safe-area-inset-bottom))]">
      <div className="heritage-border absolute -top-px inset-x-0" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-10 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand block */}
        <div className="lg:col-span-1">
          <Logo tone="cream" />
          <p className="mt-5 text-cream/75 max-w-xs leading-relaxed">
            Equipping Africa&rsquo;s youth with creative and entrepreneurial skills to thrive in
            work, business, and community.
          </p>
          <div className="mt-6 flex items-center gap-3 text-cream/70">
            <a href="#" aria-label="Instagram" className="lift-link p-2 rounded-full bg-white/5 hover:bg-white/10">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="Facebook" className="lift-link p-2 rounded-full bg-white/5 hover:bg-white/10">
              <Facebook size={18} />
            </a>
            <a href="#" aria-label="LinkedIn" className="lift-link p-2 rounded-full bg-white/5 hover:bg-white/10">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="eyebrow text-gold">Explore</h3>
          <ul className="mt-5 space-y-3 text-cream/85">
            <li><Link to="/" className="lift-link">Home</Link></li>
            <li><Link to="/programs" className="lift-link">Programs</Link></li>
            <li><Link to="/about" className="lift-link">About us</Link></li>
            <li><Link to="/contact" className="lift-link">Contact</Link></li>
            <li><Link to="/contact#donate" className="lift-link">Donate</Link></li>
          </ul>
        </div>

        {/* Contact block */}
        <div>
          <h3 className="eyebrow text-gold">Reach us</h3>
          <ul className="mt-5 space-y-4 text-cream/85 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 text-gold shrink-0" aria-hidden="true" />
              <address className="not-italic leading-relaxed">
                {ADDRESS_LINES.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
              </address>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={18} className="mt-0.5 text-gold shrink-0" aria-hidden="true" />
              <a href={PHONE_TEL} className="lift-link">{PHONE_DISPLAY}</a>
            </li>
            <li className="flex items-start gap-3 min-w-0">
              <Mail size={18} className="mt-0.5 text-gold shrink-0" aria-hidden="true" />
              <div className="space-y-1 min-w-0">
                <a href={`mailto:${EMAIL_PRIMARY}`} className="lift-link block break-all">{EMAIL_PRIMARY}</a>
                <a href={`mailto:${EMAIL_SECONDARY}`} className="lift-link block text-cream/65 text-xs break-all">
                  {EMAIL_SECONDARY}
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* WhatsApp block */}
        <div>
          <h3 className="eyebrow text-gold">Chat with us</h3>
          <p className="mt-5 text-cream/80 text-sm leading-relaxed">
            Talk to our WhatsApp Navigator for instant guidance on programmes, mentorship, and
            applications.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 btn btn-whatsapp w-full justify-center"
            aria-label={`Chat on WhatsApp ${WHATSAPP_DISPLAY}`}
          >
            <WhatsAppIcon size={18} />
            <span>{WHATSAPP_DISPLAY}</span>
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-cream/55">
          <p>
            &copy; {year} The AfroKreate Academy
            <span aria-hidden="true" className="mx-2">·</span>
            <span className="text-cream/70">Navigator on WhatsApp</span>
          </p>
          <p className="flex items-center gap-2">
            <span>Registered in Uganda</span>
            <span aria-hidden="true">·</span>
            <span>Pan-African vision</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
