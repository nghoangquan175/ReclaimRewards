'use client';

import Image from 'next/image';
import Link from 'next/link';
import logoWhite from '@/assets/icons/logo-white.svg';
import ReggieGas from '@/assets/images/RR_Reggie_Pose_a31.png';
import japanPortal from '@/assets/icons/tower-ellipse.svg';

/**
 * HomeBanner - Hero section for the homepage.
 * Updated for tablet (768px) responsiveness based on Figma node 514:11321.
 */
export default function HomeBanner() {
  return (
    <section className="bg-magenta600 relative w-full  overflow-hidden pt-[72px] lg:pt-0">
      <div className="container h-[700px] md:h-[300px] lg:h-[400px] relative mx-auto max-w-[1440px] px-6 md:px-[40px] lg:px-[80px] flex flex-col justify-center md:block">

        {/* Content Block (Logo, Headline, Button) - Figma node 514:11336 for tablet */}
        <div className="relative z-60 w-full max-w-[425px] h-auto md:w-[335px] lg:w-[425px]  md:h-full flex flex-col items-center md:items-start text-center md:text-left justify-between md:py-[30px] lg:py-10">

          {/* Logo (Figma node 514:11337) */}
          <Link href="/" className="relative w-[240px] md:w-[326px] lg:w-[407.71px] h-[60px] md:h-[80px] lg:h-[100px] shrink-0 block">
            <Image
              src={logoWhite}
              alt="Reclaim Rewards Logo"
              width={407}
              height={100}
              priority
              className="w-full h-auto object-contain object-left"
              style={{ height: 'auto' }}
            />
          </Link>

          {/* Headline (Figma node 514:11353) */}
          <h1 className="HeadingXSBold text-white mt-8 md:mt-0">
            Turn recovered refrigerant into <br />
            rewards for your business
          </h1>

          {/* Action Button (Figma node 514:11354) */}
          <Link
            href="/#registration"
            className="HeadingXSBold bg-blue950 text-white rounded-[120px] px-[24px] h-[40px] lg:h-[60px] flex items-center justify-center whitespace-nowrap shrink-0 mt-8 md:mt-0 w-fit"
          >
            Register by 30 June 2026
          </Link>
        </div>

        {/* Reggie Mascot - Figma node 514:12491 for tablet */}
        <div className="absolute bottom-0 md:left-[334px] lg:left-[522px] w-[283.57px] lg:w-[379px] h-[400px] lg:h-[560px] z-60 pointer-events-none">
          <Image
            src={ReggieGas}
            alt="Reggie Mascot"
            width={379}
            height={560}
            className="w-full h-full object-contain object-bottom absolute md:top-[33px] lg:top-[109px]"
          />
        </div>

        {/* Japan Portal Circular Design - Figma node 798:5941 for tablet */}
        <div className="hidden md:block absolute md:top-[5px] md:left-[495px] md:w-[350px] md:h-[350px] lg:top-[79.5px] lg:left-[959px] lg:w-[500px] lg:h-[500px]">
          <Image
            src={japanPortal}
            alt="Japan Trip Reward"
            width={1882}
            height={1076}
            className=""

          />
        </div>

      </div>
    </section>
  );
}
