'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * Header component for Reclaim Rewards.
 * Based on Figma node 319:15530.
 */
const Header = () => {
  const pathname = usePathname();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 50; // Height of the fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-magenta600 transition-all duration-300 rounded-bl-[24px] rounded-br-[24px]">
      <div className="max-w-[1440px] mx-auto h-[72px] px-6 md:px-10 lg:px-20 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className={`flex-shrink-0 transition-opacity hover:opacity-90 ${pathname === '/terms-conditions' ? 'invisible pointer-events-none' : ''}`}
        >
          <Image
            src="/images/logo-white.svg"
            alt="Reclaim Rewards Logo"
            width={163}
            height={40}
            className="h-8 md:h-10 w-auto"
            priority
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-2 lg:gap-5">
          <Link
            href="/#how-it-works"
            onClick={(e) => scrollToSection(e, 'how-it-works')}
            className="px-3 py-2 ContentMBold text-white whitespace-nowrap"
          >
            How It Works
          </Link>
          <Link
            href="/#rewards"
            onClick={(e) => scrollToSection(e, 'rewards')}
            className="px-3 py-2 ContentMBold text-white whitespace-nowrap"
          >
            Rewards
          </Link>
          <Link
            href="/#faqs"
            onClick={(e) => scrollToSection(e, 'faqs')}
            className="px-3 py-2 ContentMBold text-white whitespace-nowrap"
          >
            FAQs
          </Link>
          <Link
            href="/terms-conditions"
            className="px-3 py-2 ContentMBold text-white whitespace-nowrap"
          >
            T&Cs
          </Link>
        </div>

        {/* Mobile Menu Toggle (Optional placeholder for future) */}
        <div className="md:hidden cursor-pointer">
          <span className="material-symbols-outlined text-white">menu</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
