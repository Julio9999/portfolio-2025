'use client';

import Link from 'next/link';
import { useState } from 'react';
import { LanguageSwitch } from './language-switch';
import { useCommonContext } from '@/context/common-context';
import { translations } from '@/i18n/i18n';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { language } = useCommonContext();
  const t = translations[language];

  const links = [
    { href: '/', label: t.home },
    { href: '/about-me', label: t.aboutMe },
    { href: '/contact', label: t.contact },
  ];

  return (
    <header className="sticky top-0 z-30">
      <nav className="mx-auto mt-4 flex w-[min(1100px,92%)] items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-xl md:px-6">
        <div className="text-xl font-semibold tracking-tight text-[var(--text)]">
          <Link href="/" className="inline-flex items-center gap-2">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[var(--brand)]" />
            Julio.dev
          </Link>
        </div>

        <button
          className="md:hidden text-[var(--text)]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>

        <div
          className={`absolute left-0 top-[110%] w-full flex-col rounded-2xl border border-white/20 bg-[#0f1a39]/95 p-4 backdrop-blur-xl md:static md:top-auto md:flex md:w-auto md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0 px-4 bg-red ${isOpen ? 'flex' : 'hidden'
            }`} 
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="p-2 text-[15px] text-[var(--muted)] transition hover:text-[var(--text)]"
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-2 md:pt-0 md:pl-2">
            <LanguageSwitch />
          </div>
        </div>
      </nav>
    </header>
  );
};
