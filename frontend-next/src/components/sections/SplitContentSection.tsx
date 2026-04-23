'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { ButtonPrimaryOnLight } from '@/components/ui/ButtonPrimaryOnLight';
import tickIcon from '@/assets/icons/tick-magenta.svg';

interface SplitContentSectionProps {
  id?: string;
  title: string | React.ReactNode;
  subtext?: string;
  features: (string | React.ReactNode)[];
  imageSrc: string | StaticImageData;
  imageAlt: string;
  buttonText?: string;
  onButtonClick?: () => void;
  reverse?: boolean; // If true, image on left, text on right
  extraContent?: React.ReactNode;
  imageContainerClassName?: string;
  sectionClassName?: string;
}

/**
 * A reusable split-content section (Image + Text) used for Benefits, Japan Trip, and Sustainability.
 * Based on Figma nodes 307:5848, 675:3872, and 803:2800.
 */
export const SplitContentSection: React.FC<SplitContentSectionProps> = ({
  id,
  title,
  subtext,
  features,
  imageSrc,
  imageAlt,
  buttonText,
  onButtonClick,
  reverse = false,
  extraContent,
  imageContainerClassName = '',
  sectionClassName = '',
}) => {
  return (
    <section id={id} className={`bg-grey100 ${sectionClassName}`}>
      <div className="container mx-auto max-w-[1440px] px-6 md:px-12 lg:px-[80px]">
        <div className={`
          bg-white flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} 
          items-stretch justify-between gap-10 p-10 md:p-[30px] rounded-[24px] 
          min-h-[566px] overflow-hidden
        `}>

          {/* Text Content */}
          <div className="flex flex-col flex-1 gap-8 items-start justify-between">
            <div className="flex flex-col gap-8 items-start w-full">
              <h2 className="HeadingMBold text-blue950 max-w-[559px] leading-tight">
                {title}
              </h2>

              {subtext && (
                <p className="ContentMRegular text-grey950">
                  {subtext}
                </p>
              )}

              {/* Features List */}
              <ul className="flex flex-col gap-[10px] w-full">
                {features.map((feature, index) => (
                  <li key={index} className="flex gap-[14px] items-start">
                    <div className="bg-magenta600 rounded-full shrink-0 size-5 flex items-center justify-center mt-0.5">
                      <Image
                        src={tickIcon}
                        alt=""
                        width={14}
                        height={14}
                        className="w-auto h-auto"
                      />
                    </div>
                    <span className="ContentMRegular text-grey950 flex-1">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {extraContent}
            </div>

            {buttonText && (
              <ButtonPrimaryOnLight
                onClick={onButtonClick}
                className="mt-4"
              >
                {buttonText}
              </ButtonPrimaryOnLight>
            )}
          </div>

          {/* Image Container */}
          <div className={`
            relative flex-1 min-h-[300px] lg:min-h-full rounded-[24px] overflow-hidden
            ${imageContainerClassName}
          `}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
