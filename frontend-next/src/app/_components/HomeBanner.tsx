import React from 'react';
import Image from 'next/image';
import BannerCard from '../_block/BannerCard';
import { ButtonPrimaryOnDark } from '@/components/ui/ButtonPrimaryOnDark';
import { ButtonOutline } from '@/components/ui/ButtonOutline';
import { IconArrowRight } from '@/components/ui/icons/IconArrowRight';
import registrationIcon from '@/assets/icons/assignment_ind.svg';

/**
 * HomeBanner - The Hero Section of the ReclaimRewards landing page.
 * Implements Figma node 307:4501.
 */
export default function HomeBanner() {
  return (
    <section
      className="overflow-hidden bg-[#EC008C] min-h-[600px] lg:min-h-[710px] flex items-center pt-[100px] pb-[60px] lg:py-0"
      data-node-id="307:4501"
    >
      <div className="container mx-auto max-w-[1440px] px-6 md:px-12 lg:px-[80px] relative z-10 flex flex-col lg:flex-row items-center">
        {/* Left Column: Content */}
        <div className="w-full lg:w-[55%] flex flex-col gap-6 lg:gap-14" data-node-id="307:5567">
          <div className="flex flex-col gap-6 lg:gap-10" data-node-id="307:5568">
            {/* Tag */}
            <div
              className="inline-flex items-center gap-[5px] bg-[#FF98E4] px-3 py-2 rounded-[8px] w-fit"
              data-node-id="319:18128"
            >
              <div className="relative w-4 h-4">
                <Image
                  src={registrationIcon}
                  alt="Tag Icon"
                  width={16}
                  height={16}
                  className="brightness-0" // Force black
                />
              </div>
              <span className="text-magenta950 ContentSBold leading-tight">
                Register by 30 June 2026
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-white HeadingXLBold max-w-[600px] !leading-[1.1] !tracking-[-3px]"
              data-node-id="307:5579"
            >
              Turn recovered refrigerant into rewards.
            </h1>

            {/* Subtitle */}
            <p
              className="text-white ContentXLRegular max-w-[514px]"
              data-node-id="307:5580"
            >
              Earn points on every extra kilogram. Return the most, win a trip to Japan.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6" data-node-id="319:18151">
            {/* Primary Button */}
            <ButtonPrimaryOnDark
              className="w-full sm:w-fit"
            >
              Register your business
            </ButtonPrimaryOnDark>

            {/* Secondary Button */}
            <ButtonOutline
              className="w-full sm:w-fit"
            >
              How it works
            </ButtonOutline>
          </div>
        </div>

        {/* Right Column: Mascot & Promotion */}
        <div className="w-full lg:w-[45%] mt-12 lg:mt-0 min-h-[400px] lg:min-h-[710px] flex items-center lg:items-end justify-center">
          {/* Mascot Reggie */}
          <div
            className="absolute top-[41.5px] left-[594px] w-full max-w-[538px] aspect-[538/761] z-0 -mb-2 z-10 "
            data-node-id="319:17022"
          >
            <Image
              src="/images/eligibility-mascot.png" // Reference: reggie-pose-a.png once provided
              alt="Reggie Mascot"
              fill
              className="object-contain object-bottom"
            />
          </div>

          <div className="absolute top-[139px] left-[731px] rounded-t-[24px] w-full lg:w-[627px] h-full lg:h-[571px] pointer-events-none opacity-40 lg:opacity-100 z-0 overflow-hidden">
            <div className="relative w-full h-full">
              <Image
                src="/images/hero-bg.webp" // Reference: hero-bg-japan.png once provided
                alt="Japan Background"
                fill
                className="object-cover object-right-bottom"
                priority
              />
            </div>
          </div>

          {/* BannerCard Overlay */}
          <div
            className="absolute bottom-5 right-0 lg:top-[440px] lg:left-[1094px] z-20 w-[300px] sm:w-[326px]"
            data-node-id="307:5592"
          >
            <BannerCard />
          </div>
        </div>
      </div>
    </section>
  );
}
