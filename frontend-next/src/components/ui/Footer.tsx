'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
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

  const disclaimerText = `AU residents 18+ only, have licensed AU aircon/refrigeration Business (w/valid ABN & Refrigerant Trading Auth/AU Licence no) (Business), who register in A-Gas Reclaim Rewards Program (Program) (incl approved wholesale partner account) & able to take prize to Japan ‘27/’28 (dates TBC). Registration Period: 12.01am AEST 1/5/26 - 11.59pm AEST 30/6/26. Return Period: 12.01am AEST 1/7/26 - 11.59pm AEST 30/6/27. To enter, a Business must register for the Program during the Registration Period & have an account with an approved Wholesale Partner to be able to make Eligible Refrigerant Return/s & to qualify for the Program; then, before 11.59pm AEST 30/6/27, make Eligible Reclaimed Refrigerant Returns. Max 1 registration p/Business ABN. All Businesses eligible for Tier 1 prizes. 5 winning Businesses in total across Tier 2 & Tier 3 prizes & must meet Baseline Volume Requirement & Qualifying Return Volume. Overall winners based on highest returned volumes achieved during Return Period. Tier 1 prize, 150,000 Reclaim Points: up to 1k Reclaim Points p/Participating Business during Program (12 mths) valued at .50c ea. Tier 2 prize: Trip for 2 (18+) to Japan (economy class) valued at up to $15k. Tier 3 prize: Trip for 2 (18+) to Japan (business class) valued at up to $20k. Max 1 Tier 2/Tier3 prize p/Business. Winning Business told by phone & writing. See reclaimrewards.agas.com/  for Ts&Cs, registration instructions, Qualifying Return Volumes & more info incl. privacy statement.  Promoter: A-Gas (Australia) Pty Limited ABN 18 066 273 247.`;

  const router = useRouter();
  const pathname = usePathname();

  const handleRegisterClick = () => {
    if (pathname === '/') {
      scrollToSection('registration');
    } else {
      router.push('/#registration');
    }
  };

  return (
    <footer className="w-full bg-magenta600 text-white py-[60px] md:p-[60px] lg:px-20 lg:py-20">
      <div className="container mx-auto max-w-[1440px] flex flex-col gap-6 md:gap-[24px] lg:gap-0 lg:px-[80px]">

        {/* Top Branding Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:mb-10 lg:gap-10">

          <div className="flex flex-col w-full lg:w-[40%] gap-5 md:gap-5 lg:gap-6">
            {/* Logo */}
            <div className="w-[122px] md:w-[163px] lg:w-[228px]">
              <Image
                src={logoWhite}
                alt="Reclaim Rewards Logo"
                width={228}
                height={56}
                className="w-full h-auto"
              />
            </div>

            {/* Info + Button Row (Tablet/Desktop Logic) */}
            <div className="flex flex-col md:flex-row lg:flex-col items-start md:items-center lg:items-start justify-between gap-6 md:gap-5 lg:gap-6 w-full md:border-b md:border-white lg:border-none md:pb-5 lg:pb-0">
              <div className="bg-magenta800 md:bg-transparent p-6 md:p-0 rounded-xl md:rounded-none w-full md:w-auto">
                <p className="ContentSBold md:text-[14px] lg:ContentSBold leading-relaxed md:leading-[1.3] font-bold">
                  {programText}
                </p>

                {/* Mobile-only button & links inside the box */}
                <div className="flex flex-col gap-6 md:hidden mt-6">
                  <ButtonPrimaryOnDark
                    className="w-full justify-between"
                    showIcon={true}
                    onClick={handleRegisterClick}
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

              {/* Tablet-only button: side-by-side with text */}
              <div className="hidden md:flex lg:hidden w-full md:max-w-[316px]">
                <ButtonPrimaryOnDark
                  className="w-full justify-between md:justify-center"
                  showIcon={true}
                  onClick={handleRegisterClick}
                >
                  Register by 30 June 2026
                </ButtonPrimaryOnDark>
              </div>
            </div>
          </div>

          {/* Partner Logos: Full width on mobile/tablet */}
          <div className="bg-white p-6m md:mt-6 lg:mt-0 md:px-10 md:py-6 lg:px-10 lg:py-8 rounded-xl md:rounded-[12px] lg:rounded-[32px] flex items-center justify-between md:justify-center gap-[18px] md:gap-[38px] lg:gap-10 shadow-lg w-full lg:w-auto lg:ml-auto">
            <div className="flex items-center justify-center flex-1 md:flex-none">
              <Image src={actrolLogo} alt="Actrol" width={140} height={32} className="h-5 md:h-8 w-auto object-contain" />
            </div>
            <div className="w-[1px] md:w-[2px] h-5 md:h-10 bg-blue950 opacity-20 md:opacity-100" />
            <div className="flex items-center justify-center flex-1 md:flex-none">
              <Image src={airefrigLogo} alt="Airefrig Australia" width={120} height={40} className="h-5 md:h-[42px] w-auto object-contain" />
            </div>
            <div className="w-[1px] md:w-[2px] h-5 md:h-10 bg-blue950 opacity-20 md:opacity-100" />
            <div className="flex items-center justify-center flex-1 md:flex-none">
              <Image src={agasLogo} alt="A-Gas" width={120} height={40} className="h-5 md:h-10 w-auto object-contain" />
            </div>
          </div>
        </div>

        {/* Tablet/Mobile Links */}
        <div className="hidden md:flex lg:hidden flex-col w-full">
          <Link href="/terms-conditions" className="py-[12px] border-y border-white ContentMBold">Terms & Conditions</Link>
          <Link href="/privacy" className="py-[12px] border-b border-white ContentMBold">Privacy Policy</Link>
          <a href="mailto:info@agas.com" className="py-[12px] border-b border-white ContentMBold">Contact</a>
        </div>

        {/* Desktop Separator Line */}
        <div className="w-full h-px bg-white hidden lg:block" />

        {/* Desktop Middle Row */}
        <div className="hidden lg:flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:my-5">
          <div className="">
            <ButtonPrimaryOnDark
              className="w-full justify-between"
              showIcon={true}
              onClick={handleRegisterClick}
            >
              Register by 30 June 2026
            </ButtonPrimaryOnDark>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 w-full md:w-auto">
            <div className="flex flex-col md:flex-row w-full md:w-auto ContentSBold md:ContentSRegular lg:gap-5 md:opacity-80">
              <Link href="/terms-conditions" className="cursor-pointer">Terms & Conditions</Link>
              <Link href="/privacy" className="cursor-pointer">Privacy Policy</Link>
            </div>

            <p className="ContentSRegular md:opacity-80">
              © 2026 A-Gas All right Reserved
            </p>
          </div>
        </div>

        {/* Bottom Section: Legal Disclaimer Text */}
        <div className="w-full">
          <p className="text-[14px] leading-[1.3] opacity-100 md:opacity-90 text-justify md:text-left font-normal pt-0 lg:pt-8 tracking-tight">
            {disclaimerText}
          </p>
          <p className="text-[14px] pt-6 opacity-100 lg:hidden">
            © 2026 A-Gas All right Reserved
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
