import React from 'react';
import Image, { StaticImageData } from 'next/image';
import hexagon from '@/assets/icons/star_2.svg';

interface InfoCardProps {
  step?: number;
  title?: string;
  description: string | React.ReactNode;
  iconSrc?: string | StaticImageData;
  iconContent?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

/**
 * InfoCard component for Home Services and Home Eligibility sections.
 * Based on Figma node 675:3721 and 675:3832.
 */
export const InfoCard: React.FC<InfoCardProps> = ({
  step,
  title,
  description,
  iconSrc,
  iconContent,
  children,
  className = ''
}) => {
  return (
    <div className={`bg-white flex flex-col gap-6 p-4 rounded-[24px] w-full h-full overflow-hidden ${className}`}>
      {/* Top Section: Icon Area */}
      <div className="bg-blue300 h-[260px] relative rounded-[8px] overflow-hidden flex items-center justify-center">
        {/* Hexagon Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Image
            src={hexagon}
            alt=""
            width={200}
            height={200}
            className="w-[200px] h-[200px]"
          />
        </div>

        {/* Central Content (Icon or JSX) */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          {iconSrc ? (
            <Image
              src={iconSrc}
              alt={typeof description === 'string' ? description : 'icon'}
              width={100}
              height={100}
              className="w-[100px] h-[100px] object-contain"
            />
          ) : (
            iconContent
          )}
        </div>

        {/* Optional Step Number Badge */}
        {step !== undefined && (
          <div className="absolute top-[15px] left-1/2 -translate-x-1/2 z-20">
            <div className="bg-blue950 rounded-full w-[36px] h-[36px] flex items-center justify-center">
              <span className="ContentXLBold">
                {step}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Section: Text Content */}
      <div className="flex flex-col gap-4 text-center">
        {title && (
          <h3 className="ContentXLBold text-blue950">
            {title}
          </h3>
        )}
        <div className="ContentMRegular text-grey950 leading-[1.3]">
          {description}
        </div>
      </div>

      {/* Optional Bottom Children (e.g. Buttons) */}
      {children && (
        <div className="mt-auto">
          {children}
        </div>
      )}
    </div>
  );
};
