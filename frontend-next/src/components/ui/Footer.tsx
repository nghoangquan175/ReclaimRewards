'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ButtonPrimaryOnDark } from './ButtonPrimaryOnDark';
import { scrollToSection } from '@/lib/utils';
import { IconArrowRight } from './icons/IconArrowRight';
import logoWhite from '@/assets/icons/logo-white.svg';
import airefrigLogo from '@/assets/icons/airefrig-logo.svg';
import actrolLogo from '@/assets/icons/actrol-logo.svg';
import agasLogo from '@/assets/icons/agas-logo.svg';

/**
 * Footer component following the Reclaim Rewards design system.
 * Based on Figma node 319:15548.
 */
const Footer = () => {
  const programText = (
    <>
      A program by A-Gas. Registration 1 May – 30 June 2026. <br />
      Program runs to 30 June 2027.
    </>
  );

  const disclaimerText = `*Terms and Conditions: AU residents 18+ only, have licensed AU aircon/refrigeration Business (w/valid ABN & Refrigerant Trading Auth/AU Licence no) (Business), who register in A-Gas Reclaim Rewards Program (Program) (incl approved channel partner account) & able to take prize to Japan ‘27/’28 (dates TBC). Registration Period: 12.01am AEST 1/5/26 - 11.59pm AEST 30/6/26. Return Period: 12.01am AEST 1/7/26 - 11.59pm AEST 30/6/27. To enter, a Business must register for the Program during the Registration Period & have an account with an approved Channel Partner to be able to make Eligible Refrigerant Return/s & to qualify for the Program; then, before 11.59pm AEST 30/6/27, make Eligible Reclaimed Refrigerant Returns. Max 1 registration p/Business ABN. All Businesses eligible for Tier 1 prizes. 5 winning Businesses in total across Tier 2 & Tier 3 prizes & must meet Baseline Volume Requirement & Qualifying Return Volume. Overall winners based on highest returned volumes achieved during Return Period. Tier 1 prize, 150,000 Reclaim Points: up to 1k Reclaim Points p/Participating Business during Program (12 mths) valued at .50c ea. Tier 2 prize: Trip for 2 (18+) to Japan (economy class) valued at up to $15k. Tier 3 prize: Trip for 2 (18+) to Japan (business class) valued at up to $20k. Max 1 Tier 2/Tier3 prize p/Business. Winning Business told by phone & writing. See reclaimrewards.agas.com for Ts&Cs, registration instructions, Qualifying Return Volumes & more info incl. privacy statement. Promoter: A-Gas (Australia) Pty Limited ABN 18 066 273 247.`;

  return (
    <footer className="w-full bg-magenta600 text-white py-[60px] md:px-[60px] px-10 lg:px-20 lg:py-20">
      <div className="container mx-auto max-w-[1440px] flex flex-col gap-6 md:gap-0 lg:px-[80px]">

        {/* Top Row: Logo, Program Info, and Partners */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start gap-6 md:gap-10 lg:mb-10">

          {/* Branding & Info Box: Flattened for mobile/tablet order, grouped for desktop */}
          <div className="contents lg:flex lg:flex-col lg:gap-6 lg:w-full lg:max-w-xl lg:order-0">
            {/* Logo: Mobile/Tablet order 1 */}
            <div className="w-[122px] md:w-[163px] lg:w-[228px] order-1">
              <Image
                src={logoWhite}
                alt="Reclaim Rewards Logo"
                width={228}
                height={56}
                className="w-full h-auto"
              />
            </div>

            {/* Dark Box Wrapper for Mobile/Tablet Info + Button: Mobile/Tablet order 3 */}
            <div className="bg-magenta800 lg:bg-transparent p-6 lg:p-0 rounded-xl lg:rounded-none flex flex-col gap-6 order-3">
              <p className="ContentSBold leading-relaxed md:leading-relaxed font-bold md:font-bold opacity-100">
                {programText}
              </p>

              {/* Tablet-only content: Button */}
              <div className="hidden md:flex lg:hidden">
                <ButtonPrimaryOnDark 
                  className="w-full justify-between" 
                  showIcon={true}
                  onClick={() => scrollToSection('registration')}
                >
                  Register by 30 June 2026
                </ButtonPrimaryOnDark>
              </div>

              {/* Mobile-only content: Button and Links */}
              <div className="flex flex-col gap-6 md:hidden">
                <ButtonPrimaryOnDark 
                  className="w-full justify-between" 
                  showIcon={true}
                  onClick={() => scrollToSection('registration')}
                >
                  Register by 30 June 2026
                </ButtonPrimaryOnDark>

                <div className="flex flex-col gap-3 font-normal ContentSRegular">
                  <Link href="/terms-conditions" className="cursor-pointer">Terms & Conditions</Link>
                  <Link href="/privacy" className="cursor-pointer">Privacy Policy</Link>
                  <a href="mailto:info@agas.com" className="cursor-pointer">Contact</a>
                </div>
              </div>
            </div>
          </div>

          {/* Partners: Mobile/Tablet order 2 */}
          <div className="bg-white p-6 lg:px-10 lg:py-8 rounded-xl md:rounded-[32px] flex items-center justify-between md:justify-center gap-[18px] md:gap-[38px] lg:gap-10 shadow-lg w-full md:w-auto order-2 lg:order-none lg:ml-auto">
            <div className="flex items-center justify-center flex-1 md:flex-none">
              <Image src={airefrigLogo} alt="Airefrig Australia" width={120} height={40} className="h-5 md:h-10 w-auto object-contain" />
            </div>
            <div className="w-[1px] md:w-[2px] h-5 md:h-10 bg-blue950" />
            <div className="flex items-center justify-center flex-1 md:flex-none">
              <Image src={actrolLogo} alt="Actrol" width={140} height={32} className="h-5 md:h-8 w-auto object-contain" />
            </div>
            <div className="w-[1px] md:w-[2px] h-5 md:h-10 bg-blue950" />
            <div className="flex items-center justify-center flex-1 md:flex-none">
              <Image src={agasLogo} alt="A-Gas" width={120} height={40} className="h-5 md:h-10 w-auto object-contain" />
            </div>
          </div>
        </div>

        {/* Tablet Menu Links: Shown only on tablet */}
        <div className="hidden md:flex lg:hidden flex-col w-full order-4 my-6">
          <Link href="/terms-conditions" className="py-[10px] border-y border-white ContentMBold">Terms & Conditions</Link>
          <Link href="/privacy" className="py-[10px] border-b border-white ContentMBold">Privacy Policy</Link>
          <a href="mailto:info@agas.com" className="py-[10px] border-b border-white ContentMBold">Contact</a>
        </div>

        {/* Separator Line: Desktop only */}
        <div className="w-full h-px bg-white h-[1px] hidden lg:block" />

        {/* Middle Row: Desktop Button, Menu, and Copyright */}
        <div className="hidden lg:flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:my-5 order-4">

          {/* Main CTA Button: Desktop only here */}
          <div className="">
            <ButtonPrimaryOnDark onClick={() => scrollToSection('registration')}>
              Register by 30 June 2026
            </ButtonPrimaryOnDark>
          </div>

          {/* Navigation & Copyright Group */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 w-full md:w-auto">

            {/* Legal Links Menu: Hidden on mobile, shown on desktop */}
            <div className="flex flex-col md:flex-row w-full md:w-auto ContentSBold md:ContentSRegular lg:gap-5 md:opacity-80">
              <Link href="/terms-conditions" className="py-[14px] md:py-0 border-y md:border-none border-white/30 cursor-pointer">Terms & Conditions</Link>
              <Link href="/privacy" className="py-[14px] md:py-0 border-b md:border-none border-white/30 cursor-pointer">Privacy Policy</Link>
              <a href="mailto:info@agas.com" className="lg:hidden py-[14px] md:py-0 border-b md:border-none border-white/30 cursor-pointer">Contact</a>
            </div>

            {/* Copyright: Bottom on mobile, next to menu on desktop */}
            <p className="ContentSRegular md:opacity-80 md:order-none">
              © 2026 A-Gas All right Reserved
            </p>
          </div>
        </div>

        {/* Bottom Section: Legal Disclaimer Text */}
        <div className="w-full order-5">
          <p className="ContentSRegular opacity-100 md:opacity-90 text-justify md:text-left font-normal md:font-normal pt-0 lg:pt-8 tracking-tight md:tracking-normal">
            {disclaimerText}
          </p>
          <p className="ContentSRegular pt-6 opacity-100 lg:hidden">
            © 2026 A-Gas All right Reserved
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
