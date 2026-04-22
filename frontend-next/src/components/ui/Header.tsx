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

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  const handleMobileLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    closeMenu();
    scrollToSection(e, sectionId);
  };

  return (
    <>
      <header className={`absolute top-0 left-0 w-full z-50 bg-magenta600 transition-all duration-300 ${isMenuOpen ? 'rounded-none' : 'rounded-bl-[24px] rounded-br-[24px]'}`}>
        <div className="max-w-[1440px] mx-auto h-[72px] px-6 md:px-10 lg:px-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={`flex-shrink-0 transition-opacity hover:opacity-90 ${pathname === '/terms-conditions' ? 'invisible pointer-events-none' : ''}`}
            onClick={closeMenu}
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

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center gap-2 lg:gap-5">
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

          {/* Mobile/Tablet Menu Toggle */}
          <div className="lg:hidden cursor-pointer flex items-center" onClick={toggleMenu}>
            <span className="material-symbols-outlined text-white text-[32px]">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </div>
        </div>
      </header>

      {/* Mobile/Tablet Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-magenta600 transition-opacity duration-300 lg:hidden flex flex-col ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="flex flex-col h-full pt-[80px] md:pt-[92px] gap-10 px-6 md:pb-15 md:px-10">
          <nav className="flex flex-col w-full border-t border-white/20">
            <Link
              href="/#how-it-works"
              onClick={(e) => handleMobileLinkClick(e, 'how-it-works')}
              className="py-[17px] md:py-[22px] border-b border-white/20 ContentMBold text-white"
            >
              How it works
            </Link>
            <Link
              href="/#rewards"
              onClick={(e) => handleMobileLinkClick(e, 'rewards')}
              className="py-[17px] md:py-[22px] border-b border-white/20 ContentMBold text-white"
            >
              Rewards
            </Link>
            <Link
              href="/#why-join"
              onClick={(e) => handleMobileLinkClick(e, 'why-join')}
              className="py-[17px] md:py-[22px] border-b border-white/20 ContentMBold text-white"
            >
              Why Join
            </Link>
            <Link
              href="/#faqs"
              onClick={(e) => handleMobileLinkClick(e, 'faqs')}
              className="py-[17px] md:py-[22px] border-b border-white/20 ContentMBold text-white"
            >
              FAQs
            </Link>
          </nav>

          {/* Bottom Visual */}
          <div className="mt-auto relative w-full h-[385px] md:h-[518px] mb-[-1px]">
            {/* Background */}
            <div className="absolute inset-0 top-[38px] md:top-[136px] bottom-0 md:bottom-[98px] rounded-tl-[24px] rounded-tr-[24px] md:rounded-[32px] overflow-hidden">
              <Image
                src="/images/hero-bg.webp"
                alt="Background"
                width={1390}
                height={781}
                className="object-cover absolute w-[1390px] h-[781px] top-[-450px] md:top-[-495px]"
              />
            </div>
            {/* Mascot */}
            <div className="absolute inset-0 flex justify-center">
              <Image
                src="/images/RR_Reggie_Pose_a31.png"
                alt="Reggie Mascot"
                width={440}
                height={518}
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
