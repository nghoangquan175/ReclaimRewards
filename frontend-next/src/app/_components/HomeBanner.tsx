import React from 'react';
import Image from 'next/image';
import BannerCard from '../_block/BannerCard';

/**
 * HomeBanner - The Hero Section of the ReclaimRewards landing page.
 * Implements Figma node 307:4501.
 */
export default function HomeBanner() {
  return (
    <section 
      className="relative overflow-hidden bg-[#5F002F] min-h-[600px] lg:min-h-[710px] flex items-center pt-[100px] pb-[60px] lg:py-0"
      data-node-id="307:4501"
    >
      {/* Background Image (Japan Castle/Shrine) */}
      <div className="absolute right-0 bottom-0 w-full lg:w-[627px] h-full lg:h-[571px] pointer-events-none opacity-40 lg:opacity-100 z-0">
        <div className="relative w-full h-full">
          <Image
            src="/images/hero-bg.webp"
            alt="Japan Background"
            fill
            className="object-cover object-right-bottom"
            priority
          />
        </div>
      </div>

      <div className="container mx-auto max-w-[1440px] px-6 md:px-12 lg:px-[80px] relative z-10 flex flex-col lg:flex-row items-center">
        {/* Left Column: Content */}
        <div className="w-full lg:w-[55%] flex flex-col gap-6 lg:gap-14" data-node-id="307:5567">
          <div className="flex flex-col gap-6 lg:gap-10" data-node-id="307:5568">
            {/* Tag */}
            <div 
              className="inline-flex items-center gap-[5px] bg-[#FF98E4] px-2 py-2 rounded-[8px] w-fit"
              data-node-id="319:18128"
            >
              <div className="relative w-4 h-4">
                <Image 
                  src="/images/tag-icon.svg" 
                  alt="Tag Icon" 
                  width={16} 
                  height={16}
                />
              </div>
              <span className="text-[#5F002F] text-sm md:text-base font-medium leading-tight">
                Register by 30 June 2026
              </span>
            </div>

            {/* Headline */}
            <h1 
              className="text-[#FF98E4] text-[40px] md:text-[56px] lg:text-[72px] font-bold leading-[1.1] tracking-tight max-w-[600px]"
              data-node-id="307:5579"
            >
              Turn recovered refrigerant into rewards.
            </h1>

            {/* Subtitle */}
            <p 
              className="text-[#FF98E4] text-lg md:text-xl font-normal leading-relaxed max-w-[550px]"
              data-node-id="307:5580"
            >
              Earn points on every extra kilogram. Return the most, win a trip to Japan.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6" data-node-id="319:18151">
            {/* Primary Button */}
            <button 
              className="bg-white hover:bg-neutral-100 transition-colors px-1 py-1 rounded-[80px] flex items-center gap-3 w-full sm:w-fit group"
              data-node-id="319:18134"
            >
              <span className="text-[#252527] px-6 font-bold text-base whitespace-nowrap">
                Register your business
              </span>
              <div className="bg-[#EC008C] w-10 h-10 lg:w-8 lg:h-8 rounded-full flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
                <Image 
                  src="/images/hero-arrow-right.svg" 
                  alt="Arrow" 
                  width={20} 
                  height={20}
                  className="invert"
                />
              </div>
            </button>

            {/* Secondary Button */}
            <button 
              className="border border-[#FF98E4] text-[#FF98E4] hover:bg-[#FF98E4]/10 transition-colors px-8 py-3 rounded-[80px] font-bold text-base w-full sm:w-fit"
              data-node-id="319:18142"
            >
              How it works
            </button>
          </div>
        </div>

        {/* Right Column: Mascot & Promotion */}
        <div className="w-full lg:w-[45%] relative mt-12 lg:mt-0 min-h-[400px] lg:min-h-[760px] flex items-center lg:items-end justify-center">
            {/* Mascot Reggie */}
            <div 
              className="relative w-full max-w-[538px] aspect-[538/760] z-0 -mb-2"
              data-node-id="319:17022"
            >
              <Image
                src="/images/eligibility-mascot.png" // Fallback: Jumping Reggie
                alt="Reggie Mascot"
                fill
                className="object-contain"
              />
            </div>

            {/* BannerCard Overlay */}
            <div 
              className="absolute bottom-5 right-0 lg:bottom-[40px] lg:-right-[40px] z-20 w-[280px] sm:w-[326px]"
              data-node-id="307:5592"
            >
                <BannerCard />
            </div>
        </div>
      </div>
    </section>
  );
}
