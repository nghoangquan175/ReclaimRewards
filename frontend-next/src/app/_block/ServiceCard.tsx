import React from 'react';
import Image from 'next/image';

interface ServiceCardProps {
  step: number;
  title: string;
  description: string;
  iconSrc: string;
}

/**
 * ServiceCard component for the Home Services section.
 * Based on Figma node 307:5675.
 */
export const ServiceCard: React.FC<ServiceCardProps> = ({ step, title, description, iconSrc }) => {
  return (
    <div className="bg-white flex flex-col gap-6 p-6 rounded-[24px] w-full h-full shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      {/* Top Section: Number and Icon */}
      <div className="bg-blue200 h-[260px] relative rounded-[8px] overflow-hidden flex items-center justify-center">
        {/* Decoractive Star Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-80">
          <Image
            src="/images/service-steps/star-decorative.svg"
            alt=""
            width={200}
            height={200}
            className="w-[200px] h-auto"
          />
        </div>

        {/* Central Icon/Illustration */}
        <div className="relative z-10">
          <Image
            src={iconSrc}
            alt={title}
            width={120}
            height={120}
            className="w-auto h-[100px] object-contain"
          />
        </div>

        {/* Step Number Badge */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[110px] z-20">
          <div className="bg-blue950 rounded-full w-[44px] h-[44px] flex items-center justify-center border-2 border-white/20">
            <span className="HeadingXSBold text-white">
              {step}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Section: Text Content */}
      <div className="flex flex-col gap-4 text-center">
        <h3 className="HeadingXSBold text-blue950">
          {title}
        </h3>
        <p className="ContentMRegular text-grey950">
          {description}
        </p>
      </div>
    </div>
  );
};
