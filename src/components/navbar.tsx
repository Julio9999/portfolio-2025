'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { LanguageSwitch } from './language-switch';
import { useCommonContext } from '@/context/common-context';
import { translations } from '@/i18n/i18n';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { language } = useCommonContext();
  const t = translations[language]

  
  return (
    <nav className="w-full bg-white/10 backdrop-blur-md border-b border-white/5 text-white py-4 z-20">
      <div className="max-w-[1000px] mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-purple-400">
          <Link href="/">Julio.dev</Link>
        </div>

        {/* Hamburger button */}
        <button
          className="md:hidden text-white focus:outline-none"
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

        {/* Links */}
        <div
          className={`flex-col bg-gradient-to-r from-[#1e1b4b] to-[#2e026d] md:bg-none md:flex-row md:flex md:items-center w-full md:w-auto absolute md:static top-full left-0 md:top-auto md:left-auto rounded-b-lg md:rounded-none transition-all duration-300 md:space-x-4 p-4 md:p-0 ${isOpen ? 'flex' : 'hidden'
            }`}
        >
          <Link href="/">
            <span
              onClick={() => setIsOpen(false)}
              className="block py-2 md:py-0 cursor-pointer hover:text-purple-400 transition-colors duration-200"
            >
              {t.home}
            </span>
          </Link>
          <Link href="/about-me">
            <span
              onClick={() => setIsOpen(false)}
              className="block py-2 md:py-0 cursor-pointer hover:text-purple-400 transition-colors duration-200"
            >
              {t.aboutMe}
            </span>
          </Link>
          <Link href="/contact">
            <span
              onClick={() => setIsOpen(false)}
              className="block py-2 md:py-0 cursor-pointer hover:text-purple-400 transition-colors duration-200"
            >
              {t.contact}
            </span>
          </Link>

          <div className="pt-2 md:pt-0">
            <LanguageSwitch />
          </div>
        </div>
      </div>
    </nav>
  );
};
