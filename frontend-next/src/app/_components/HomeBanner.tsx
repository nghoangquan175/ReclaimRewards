'use client';

import React from 'react';
import Image from 'next/image';
import logoWhite from '@/assets/icons/logo-white.svg';
import reggieWithCylinder from '@/assets/images/RR_Reggie_Pose_a31.png';
import japanPortal from '@/assets/images/tower-circle.jpg';

/**
 * HomeBanner - Hero section for the homepage.
 * Implements Figma nodes 675:2544 and 675:2548.
 */
export default function HomeBanner() {
  return (
    <section className="bg-magenta600 relative w-full h-[700px] md:h-[550px] lg:h-[400px] overflow-hidden pt-[72px] lg:pt-0">
      <div className="container relative mx-auto max-w-[1440px] px-6 md:px-12 lg:px-[80px] h-full relative flex flex-col justify-center lg:block">

        {/* Left Column Container (Figma node 675:2548) */}
        <div className="relative z-60 w-[425px] h-[400px] lg:absolute lg:top-0 lg:left-[80px] lg:h-full flex flex-col items-center lg:items-start text-center lg:text-left py-10 lg:py-10 justify-between">

          {/* Logo (Figma node 675:2549) */}
          <div className="relative w-[240px] md:w-[320px] lg:w-[407.71px] h-[60px] md:h-[80px] lg:h-[100px] shrink-0">
            <Image
              src={logoWhite}
              alt="Reclaim Rewards Logo"
              width={407}
              height={100}
              priority
              className="w-full h-auto object-contain object-left"
              style={{ height: 'auto' }}
            />
          </div>

          {/* Headline (Figma node 675:2565) */}
          <h1 className="HeadingXSBold text-white">
            Turn recovered refrigerant into rewards for your business
          </h1>

          {/* Action Button (Figma node 675:2566) */}
          <div className="bg-blue950 text-white rounded-[120px] px-[24px] h-[60px] flex items-center justify-center ContentMBold whitespace-nowrap shrink-0">
            Register by 30 June 2026
          </div>
        </div>

        {/* Reggie & Cylinder - Positioned to the center-left of the right block */}
        <div className="absolute bottom-0 left-[522px] w-[379px] h-[560px] z-60">
            <Image
              src={reggieWithCylinder}
              alt="Reggie and A-Gas Cylinder"
              width={379}
              height={560}
              priority
              className="object-contain object-bottom absolute top-[222px]"
              style={{ height: 'auto' }}
            />
        </div>

        {/* Japan Portal Circular Design (Figma node 713:10150) */}
        <div className="hidden lg:block absolute top-[79.5px] left-[959px] w-[500px] h-[500px] rounded-full border-[20px] border-[#8BB8F8] overflow-hidden z-10 box-border pointer-events-none">
          <Image
            src={japanPortal}
            alt="Japan Trip Reward"
            fill
            sizes="(max-width: 1024px) 100vw, 500px"
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}
