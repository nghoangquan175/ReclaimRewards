'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Header component for Reclaim Rewards.
 * Based on Figma node 319:15530.
 */
const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-magenta600 transition-all duration-300 rounded-bl-[24px] rounded-br-[24px]">
      <div className="max-w-[1440px] mx-auto h-[72px] px-6 md:px-10 lg:px-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 transition-opacity hover:opacity-90">
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
            className="px-3 py-2 ContentMBold text-white hover:text-white/80 transition-colors whitespace-nowrap"
          >
            How It Works
          </Link>
          <Link
            href="/#rewards"
            className="px-3 py-2 ContentMBold text-white hover:text-white/80 transition-colors whitespace-nowrap"
          >
            Rewards
          </Link>
          <Link
            href="/#faqs"
            className="px-3 py-2 ContentMBold text-white hover:text-white/80 transition-colors whitespace-nowrap"
          >
            FAQs
          </Link>
          <Link
            href="/terms-conditions"
            className="px-3 py-2 ContentMBold text-white hover:text-white/80 transition-colors whitespace-nowrap"
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
