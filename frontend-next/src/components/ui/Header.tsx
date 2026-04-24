'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ReggieGas from '@/assets/icons/Reggie_Gas.svg';
import logoWhite from '@/assets/icons/logo-white.svg';

/**
 * Header component for Reclaim Rewards.
 * Refactored to include the logo and ensure tablet/mobile responsiveness.
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
      <header className={`absolute top-0 left-0 w-full transition-all duration-300 ${isMenuOpen ? 'z-70 bg-magenta600 rounded-none' : 'z-50 bg-transparent lg:bg-magenta600 rounded-bl-[24px] rounded-br-[24px]'}`}>
        <div className="max-w-[1440px] mx-auto h-[72px] md:h-[72px] px-6 md:px-6 lg:px-20 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" onClick={closeMenu} className={`flex-shrink-0 block transition-all duration-300 relative z-70 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto'}`}>
            <Image
              src={logoWhite}
              alt="Reclaim Rewards Logo"
              width={163}
              height={40}
              className="w-[120px] md:w-[163px] h-auto object-contain lg:hidden"
              priority
            />
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center gap-2 lg:gap-5">
            <Link
              href="/#how-it-works"
              onClick={(e) => scrollToSection(e, 'how-it-works')}
              className="px-3 py-2 ContentMBold text-white whitespace-nowrap hover:opacity-80 transition-opacity"
            >
              How It Works
            </Link>
            <Link
              href="/#rewards"
              onClick={(e) => scrollToSection(e, 'rewards')}
              className="px-3 py-2 ContentMBold text-white whitespace-nowrap hover:opacity-80 transition-opacity"
            >
              Rewards
            </Link>
            <Link
              href="/#faqs"
              onClick={(e) => scrollToSection(e, 'faqs')}
              className="px-3 py-2 ContentMBold text-white whitespace-nowrap hover:opacity-80 transition-opacity"
            >
              FAQs
            </Link>
            <Link
              href="/terms-conditions"
              className="px-3 py-2 ContentMBold text-white whitespace-nowrap hover:opacity-80 transition-opacity"
            >
              T&Cs
            </Link>
          </div>

          {/* Mobile/Tablet Menu Toggle */}
          <div className="lg:hidden cursor-pointer flex items-center relative z-70" onClick={toggleMenu}>
            <span className="material-symbols-outlined text-white text-[32px]">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </div>
        </div>
      </header>

      {/* Mobile/Tablet Menu Overlay */}
      <div
        className={`fixed inset-0 z-61 bg-magenta600 transition-opacity duration-300 lg:hidden flex flex-col ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="flex flex-col h-full pt-[80px] md:pt-[95px] gap-10 md:gap-5 px-6 md:pb-15 md:px-10">
          <nav className="flex flex-col w-full border-t border-white">
            <Link
              href="/#how-it-works"
              onClick={(e) => handleMobileLinkClick(e, 'how-it-works')}
              className="py-[10px] border-b border-white ContentMBold text-white"
            >
              How it works
            </Link>
            <Link
              href="/#rewards"
              onClick={(e) => handleMobileLinkClick(e, 'rewards')}
              className="py-[10px] border-b border-white ContentMBold text-white"
            >
              Rewards
            </Link>
            <Link
              href="/#sustainability"
              onClick={(e) => handleMobileLinkClick(e, 'sustainability')}
              className="py-[10px] border-b border-white ContentMBold text-white"
            >
              Why Join
            </Link>
            <Link
              href="/#faqs"
              onClick={(e) => handleMobileLinkClick(e, 'faqs')}
              className="py-[10px] border-b border-white ContentMBold text-white"
            >
              FAQs
            </Link>
          </nav>

          {/* Bottom Visual */}
          <div className="mt-auto relative w-full h-[385px] md:h-[518px] mb-[-1px]">
            <div className="absolute inset-0 flex justify-center">
              <Image
                src={ReggieGas}
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
