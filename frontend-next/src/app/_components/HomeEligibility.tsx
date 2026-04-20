import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

/**
 * HomeEligibility section implementing "Who can take part".
 * Based on Figma node 307:12235.
 */
export default function HomeEligibility() {
  const eligibilityCriteria = [
    {
      icon: '/images/eligibility-icon-1.svg',
      text: 'Registered Australian business with a valid ABN',
    },
    {
      icon: '/images/eligibility-icon-2.svg',
      text: 'Hold a current RTA AU licence.',
    },
    {
      icon: '/images/eligibility-icon-3.svg',
      text: 'Return refrigerant through Airefrig Australia or Actrol.',
    },
    {
      icon: '/images/eligibility-icon-4.svg',
      text: 'Return at least 20% more refrigerant than their previous 12-month volume.',
    },
    {
      icon: '/images/eligibility-icon-5.svg',
      text: 'Meet the minimum volume threshold (see T&Cs).',
    },
  ];

  return (
    <section className="bg-grey100 py-16 lg:py-[60px] px-6 md:px-12 lg:px-[80px]">
      <div className="container mx-auto max-w-[1440px] flex flex-col lg:flex-row gap-10 lg:gap-[20px]">
        
        {/* Left Column: Sticky Title and Mascot */}
        <div className="lg:w-1/2 flex flex-col gap-8 lg:sticky lg:top-[100px] self-start h-fit">
          <h2 className="HeadingLBold text-blue950">
            Who can take part
          </h2>
          <div className="relative w-full max-w-[444px] aspect-[444/734] overflow-hidden">
            <Image 
              src="/images/eligibility-mascot.png" 
              alt="Eligibility Mascot" 
              fill
              className="object-contain object-left-top"
              priority
            />
          </div>
        </div>

        {/* Right Column: Content and Checklist */}
        <div className="lg:w-1/2 flex flex-col gap-10 py-4 lg:py-[60px] relative">
          
          {/* Introductory Text */}
          <h3 className="text-grey950 text-[24px] font-bold leading-tight tracking-[-3%] max-w-[425px]">
            Reclaim Rewards is open to Australian HVAC-R businesses that:
          </h3>

          {/* Checklist with Connector Line */}
          <div className="relative flex flex-col gap-8 lg:gap-[40px]">
            
            {/* Vertical Connector Line */}
            <div className="absolute left-[29.5px] top-[40px] bottom-[40px] w-[1px] hidden md:block">
              <Image 
                src="/images/eligibility-line.svg" 
                alt="" 
                fill
                className="object-cover"
              />
            </div>

            {/* Criteria Items */}
            {eligibilityCriteria.map((item, index) => (
              <div key={index} className="flex gap-8 items-center z-10">
                <div className="bg-white rounded-full flex items-center justify-center size-[60px] shrink-0 shadow-sm">
                  <Image 
                    src={item.icon} 
                    alt="" 
                    width={24} 
                    height={24}
                  />
                </div>
                <p className="ContentMRegular text-grey950 max-w-[425px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-4">
            <Button 
              variant="outline" 
              theme="on-light" 
              className="border-magenta600 text-magenta600 hover:bg-magenta50"
            >
              See 4 worked examples
            </Button>
          </div>

          {/* Disclaimer */}
          <p className="text-grey950 text-[14px] font-normal leading-tight tracking-[-2%] mt-4">
            *Japan trip eligibility requires all three: 20% growth + minimum volume + registered business with RTA AU licence.
          </p>
        </div>

      </div>
    </section>
  );
}
