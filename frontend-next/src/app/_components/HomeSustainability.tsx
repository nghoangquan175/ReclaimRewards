'use client';

import React from 'react';
import { SplitContentSection } from '@/components/sections/SplitContentSection';
import mascotImg from '@/assets/images/A_Gas_RR_Mascotv2-3 1.png';
import { scrollToSection } from '@/lib/utils';

/**
 * HomeSustainability section explaining why the program matters.
 * Based on Figma node 803:2800.
 */
export default function HomeSustainability() {
  const features = [
    'Reduce emissions',
    'Support the transition to lower GWP refrigerants',
    'Keep valuable refrigerants in use',
    'Strengthen a circular economy for the HVAC-R industry',
  ];

  const extraContent = (
    <p className="font-bold text-[#001a77] text-[20px] tracking-[-0.4px] leading-tight mt-2">
      Now, your impact could take you all <br /> the way to Japan!
    </p>
  );

  return (
    <SplitContentSection
      id="sustainability"
      title="Why it Matters"
      subtext="Every kilogram returned helps:"
      features={features}
      imageSrc={mascotImg}
      imageAlt="Reggie Mascot"
      buttonText="Register Your Business"
      onButtonClick={() => scrollToSection('registration')}
      sectionClassName='pt-[20px] pb-[60px]'
      reverse={true}
      extraContent={extraContent}
      imageContainerClassName="bg-blue300"
    />
  );
}
