'use client';

import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="w-full bg-white/10 backdrop-blur-md border-b border-white/20 text-white py-4">
      <div className="max-w-[1000px] mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-purple-400">
          <Link href="/">Julio.dev</Link>
        </div>

        {/* Navigation Links */}
        <div className="space-x-4 text-sm md:text-base">
          <Link href="/">
            <span className="hover:text-purple-400 transition-colors duration-200">Home</span>
          </Link>
          <Link href="/about-me">
            <span className="hover:text-purple-400 transition-colors duration-200">About Me</span>
          </Link>
          <Link href="/contact">
            <span className="hover:text-purple-400 transition-colors duration-200">Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};
