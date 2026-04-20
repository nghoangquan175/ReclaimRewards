'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './Button';

/**
 * Footer component following the Reclaim Rewards design system.
 * Based on Figma node 319:15548.
 */
const Footer = () => {
  return (
    <footer className="w-full bg-magenta600 text-white py-12 md:py-20 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto max-w-[1440px]">
        
        {/* Top Section: Branding and Partners */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 mb-10">
          <div className="flex flex-col gap-6 max-w-xl">
            <Image 
              src="/images/logo-white.svg" 
              alt="Reclaim Rewards Logo" 
              width={228} 
              height={56} 
              className="h-12 md:h-14 w-auto"
            />
            <p className="ContentSBold leading-relaxed opacity-100">
              A program by A-Gas. Registration 1 May – 30 June 2026. <br />
              Program runs to 30 June 2027.
            </p>
          </div>
          
          {/* Partners container: Rounded white box with logos and dividers */}
          <div className="bg-white px-8 py-6 md:px-12 md:py-8 rounded-[32px] flex flex-col md:flex-row items-center gap-8 md:gap-10 shadow-lg">
            <div className="flex items-center min-w-[140px] justify-center">
              <Image 
                src="/images/actrol-logo.svg" 
                alt="Actrol" 
                width={140} 
                height={32} 
                className="h-8 w-auto object-contain"
              />
            </div>
            <div className="hidden md:block w-px h-10 bg-grey300 opacity-50" />
            <div className="flex items-center min-w-[120px] justify-center">
              <Image 
                src="/images/airefrig-logo.svg" 
                alt="Airefrig Australia" 
                width={120} 
                height={40} 
                className="h-10 w-auto object-contain"
              />
            </div>
            <div className="hidden md:block w-px h-10 bg-grey300 opacity-50" />
            <div className="flex items-center min-w-[120px] justify-center">
              <Image 
                src="/images/agas-logo.svg" 
                alt="A-Gas" 
                width={120} 
                height={40} 
                className="h-10 w-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-white/30 mb-8" />

        {/* Middle Section: CTA and Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-12">
          {/* Main CTA Button */}
          <Button 
            variant="primary" 
            theme="on-dark" 
            icon="arrow_forward"
          >
            Register by 30 June 2026
          </Button>

          {/* Legal Links & Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 text-[14px] md:text-[16px]">
            <div className="flex gap-8 ContentSBold">
              <Link href="/terms" className="hover:opacity-80 transition-opacity">Terms & Conditions</Link>
              <Link href="/privacy" className="hover:opacity-80 transition-opacity">Privacy Policy</Link>
            </div>
            <p className="ContentSBold opacity-80">
              © 2026 A-Gas All right Reserved
            </p>
          </div>
        </div>

        {/* Bottom Section: Legal Disclaimer Text */}
        <div className="w-full">
          <p className="text-[13px] md:text-[14px] leading-relaxed opacity-90 text-justify md:text-left font-normal border-t border-white/10 pt-8">
            *Terms and Conditions: AU residents 18+ only, have licensed AU aircon/refrigeration Business (w/valid ABN & Refrigerant Trading Auth/AU Licence no) (Business), who register in A-Gas Reclaim Rewards Program (Program) (incl approved channel partner account) & able to take prize to Japan ‘27/’28 (dates TBC). Registration Period: 12.01am AEST 1/5/26 - 11.59pm AEST 30/6/26. Return Period: 12.01am AEST 1/7/26 - 11.59pm AEST 30/6/27. To enter, a Business must register for the Program during the Registration Period & have an account with an approved Channel Partner to be able to make Eligible Refrigerant Return/s & to qualify for the Program; then, before 11.59pm AEST 30/6/27, make Eligible Reclaimed Refrigerant Returns. Max 1 registration p/Business ABN. All Businesses eligible for Tier 1 prizes. 5 winning Businesses in total across Tier 2 & Tier 3 prizes & must meet Baseline Volume Requirement & Qualifying Return Volume. Overall winners based on highest returned volumes achieved during Return Period. Tier 1 prize, 150,000 Reclaim Points: up to 1k Reclaim Points p/Participating Business during Program (12 mths) valued at .50c ea. Tier 2 prize: Trip for 2 (18+) to Japan (economy class) valued at up to $15k. Tier 3 prize: Trip for 2 (18+) to Japan (business class) valued at up to $20k. Max 1 Tier 2/Tier3 prize p/Business. Winning Business told by phone & writing. See {' '}
            <a href="http://reclaimrewards.agas.com" className="underline hover:text-white" target="_blank" rel="noopener noreferrer">
              reclaimrewards.agas.com
            </a>
            {' '} for Ts&Cs, registration instructions, Qualifying Return Volumes & more info incl. privacy statement. Promoter: A-Gas (Australia) Pty Limited ABN 18 066 273 247.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
