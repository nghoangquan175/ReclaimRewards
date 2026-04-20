import React from 'react';
import Image from 'next/image';

/**
 * BannerCard component - "Win a trip to Japan".
 * Based on Figma node 307:5592.
 */
export default function BannerCard() {
  return (
    <div className="bg-blue950 rounded-[20px] p-8 flex flex-col gap-2 items-center justify-center text-center">
      
      {/* Title */}
      <h3 className="HeadingXSRegular text-white uppercase tracking-[-3%]">
        WIN A TRIP TO
      </h3>

      {/* Japan Logo (Logo composed of 2 SVGs) */}
      <div className="relative h-[60px] w-[162px] my-2">
        <div className="absolute inset-0">
          <Image 
            src="/images/banner-japan-1.svg" 
            alt="Japan" 
            fill 
            className="object-contain"
          />
        </div>
        <div className="absolute inset-0">
          <Image 
            src="/images/banner-japan-2.svg" 
            alt="" 
            fill 
            className="object-contain"
          />
        </div>
      </div>

      {/* Value Badge */}
      <div className="bg-blue200 rounded-full px-6 py-4 flex flex-col sm:flex-row gap-2 items-center justify-center mt-2">
        <div className="flex flex-col text-right sm:text-right">
          <span className="ContentSRegular text-blue950 leading-tight">Each trip</span>
          <span className="ContentSRegular text-blue950 leading-tight">valued up to</span>
        </div>
        <div className="flex items-center">
          <span className="HeadingMBold text-blue950 text-[36px] leading-none">
            $20,000
          </span>
        </div>
      </div>

    </div>
  );
}
