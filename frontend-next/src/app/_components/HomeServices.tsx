'use client';

import React from 'react';
import { InfoCard } from '@/components/ui/InfoCard';
import { ButtonSecondary } from '@/components/ui/ButtonSecondary';
import { scrollToSection } from '@/lib/utils';
import step1 from '@/assets/icons/step_1.svg';
import step2 from '@/assets/icons/step_2.svg';
import step3 from '@/assets/icons/step_3.svg';

/**
 * HomeServices section implementing the "How it Works" block.
 * Uses the InfoCard component and ButtonSecondary as per latest instructions.
 */
export default function HomeServices() {
  const steps = [
    {
      step: 1,
      title: 'Register your business',
      description: 'Sign up to the program by providing your business details.',
      iconSrc: step1,
      showButton: true,
    },
    {
      step: 2,
      title: 'Return to wholesalers',
      description: 'Drop off recovered refrigerant at participating wholesalers.',
      iconSrc: step2,
      showButton: false,
    },
    {
      step: 3,
      title: 'Earn rewards',
      description: 'You can then earn points, and even unlock a trip to Japan',
      iconSrc: step3,
      showButton: false,
    },
  ];

  return (
    <section id="how-it-works" className="bg-grey100 pt-20 pb-15">
      <div className="container mx-auto max-w-[1440px] px-6 md:px-12 lg:px-[80px] flex flex-col gap-12">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 overflow-hidden">
          <h2 className="HeadingLBold text-blue950 text-center">
            How it Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((item) => (
            <InfoCard
              key={item.step}
              step={item.step}
              title={item.title}
              description={item.description}
              iconSrc={item.iconSrc}
            >
              {item.showButton && (
                <div className="flex justify-center w-full">
                  <ButtonSecondary 
                    className="w-full"
                    onClick={() => scrollToSection('registration')}
                  >
                    Join The Challenge
                  </ButtonSecondary>
                </div>
              )}
            </InfoCard>
          ))}
        </div>
      </div>
    </section>
  );
}
