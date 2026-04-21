import React from 'react';
import Image from 'next/image';

interface RewardCardProps {
  iconSrc: any;
  title: string;
  children: React.ReactNode;
}

/**
 * RewardCard component for the Home Rewards section.
 * Based on Figma node 307:5710.
 */
export const RewardCard: React.FC<RewardCardProps> = ({ iconSrc, title, children }) => {
  return (
    <div className="bg-white flex flex-col gap-4 p-8 rounded-[24px] w-full h-full shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Icon Container */}
      <div className="bg-blue950 rounded-full size-10 flex items-center justify-center flex-shrink-0">
        <Image
          src={iconSrc}
          alt=""
          width={24}
          height={24}
          className="w-6 h-6 invert"
        />
      </div>

      {/* Content Details */}
      <div className="flex flex-col gap-4">
        <h3 className="ContentXLBold text-blue950 leading-[1.3]">
          {title}
        </h3>
        <div className="ContentMRegular text-grey950">
          {children}
        </div>
      </div>
    </div>
  );
};
