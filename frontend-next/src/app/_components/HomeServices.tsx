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
      title: 'Register',
      description: 'Register your business here',
      iconSrc: step1,
      showButton: true,
    },
    {
      step: 2,
      title: 'Recover and Return',
      description: (
        <>
          Return refrigerant via participating wholesalers during return period’ <br />
          (1 July 2026 - 30 June 2027)
        </>
      ),
      iconSrc: step2,
      showButton: false,
    },
    {
      step: 3,
      title: 'Earn Rewards',
      description: 'You can then earn points, and even unlock a trip to Japan',
      iconSrc: step3,
      showButton: false,
    },
  ];

  return (
    <section id="how-it-works" className="bg-grey100 py-[60px] lg:py-20">
      <div className="container mx-auto max-w-[1440px] px-6 md:px-10 lg:px-[80px] flex flex-col gap-10 md:gap-[40px] lg:gap-16 items-center">
        <h2 className="HeadingLBold text-blue950 text-center">
          How it Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
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
