'use client';

import React from 'react';
import { InfoCard } from '@/components/ui/InfoCard';
import FAQSection from '@/components/sections/FAQSection';

/**
 * Helper component for the eligibility checklist items.
 */
const CheckItem = ({ checked, text }: { checked: boolean; text: string }) => (
  <div className="flex items-start gap-2 mt-1">
    <span className={`ContentMRegular ${checked ? 'text-[#1a1a1a]' : 'text-grey600'}`}>
      {checked ? '✓' : '✗'}
    </span>
    <span className={`ContentMRegular ${checked ? 'text-[#1a1a1a]' : 'text-grey600'}`}>
      {text}
    </span>
  </div>
);

/**
 * Helper component for the statistics list.
 */
const StatLine = ({ label, value }: { label: string; value: string }) => (
  <div className="flex gap-1">
    <span className="ContentMBold text-[#1a1a1a]">{label}:</span>
    <span className="ContentMRegular text-[#1a1a1a]">{value}</span>
  </div>
);

/**
 * HomeEligibility section implementing the "Japan Trip Eligibility" block.
 * Rebuilt to match Figma node 675:3828 and the latest content requirements.
 */
export default function HomeEligibility() {
  const eligibilityCards = [
    {
      iconContent: (
        <div className="flex flex-col gap-2 items-center justify-center text-[#001a77] text-center">
          <span className="font-bold text-[48px] tracking-[-1.44px] leading-none">20%</span>
          <span className="ContentXLRegular tracking-[-0.4px] leading-none">MORE</span>
        </div>
      ),
      description: (
        <p>
          Return at least 20% more refrigerant<br />
          than previous year’s reclaim volume
        </p>
      ),
    },
    {
      iconContent: (
        <div className="flex flex-col gap-2 items-center justify-center text-[#001a77] text-center">
          <span className="ContentXLRegular tracking-[-0.4px] leading-none">MINIMUM</span>
          <span className="HeadingSBold tracking-[-0.84px] leading-none">VOLUME</span>
          <span className="font-bold text-[48px] tracking-[-1.44px] leading-none">3T</span>
        </div>
      ),
      description: "Meet the minimum volume threshold",
    },
    {
      iconContent: (
        <div className="flex flex-col gap-2 items-center justify-center text-[#001a77] text-center">
          <span className="ContentXLRegular tracking-[-0.4px] leading-none uppercase">Registered</span>
          <span className="HeadingSBold tracking-[-0.84px] leading-none uppercase">Business</span>
        </div>
      ),
      description: (
        <p>
          Registered Australian Business with<br />
          RTA AU Licence
        </p>
      ),
    },
  ];

  const faqs = [
    {
      question: "Meets All Criteria",
      answer: (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <StatLine label="Previous Return" value="2t" />
            <StatLine label="Target (+20%)" value="2.4t" />
            <StatLine label="Actual Return" value="3.5t" />
          </div>
          <div className="flex flex-col">
            <CheckItem checked={true} text="Meets 20% increase" />
            <CheckItem checked={true} text="Exceeds 3t minimum" />
            <CheckItem checked={true} text="Eligible to win economy trip" />
          </div>
        </div>
      )
    },
    {
      question: "Misses Minimum Volume",
      answer: (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <StatLine label="Previous Return" value="1.5t" />
            <StatLine label="Target (+20%)" value="1.8t" />
            <StatLine label="Actual Return" value="2.8t" />
          </div>
          <div className="flex flex-col">
            <CheckItem checked={true} text="Meets 20% increase" />
            <CheckItem checked={false} text="Does not reach 3t minimum" />
            <CheckItem checked={false} text="Not eligible" />
          </div>
        </div>
      )
    },
    {
      question: "Eligible for Business Class",
      answer: (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <StatLine label="Previous Return" value="6t" />
            <StatLine label="Target (+20%)" value="7.2t" />
            <StatLine label="Actual Return" value="11t" />
          </div>
          <div className="flex flex-col">
            <CheckItem checked={true} text="Meets 20% increase" />
            <CheckItem checked={true} text="Exceeds 10t minimum" />
            <CheckItem checked={true} text="Eligible to win business class trip" />
          </div>
        </div>
      )
    },

    {
      question: "Meets Volume, Not Growth",
      answer: (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <StatLine label="Previous Return" value="4t" />
            <StatLine label="Target (+20%)" value="4.8t" />
            <StatLine label="Actual Return" value="4.5t" />
          </div>
          <div className="flex flex-col">
            <CheckItem checked={false} text="Does not meet 20% increase" />
            <CheckItem checked={true} text="Exceeds 3t minimum" />
            <CheckItem checked={false} text="Not eligible" />
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="eligibility" className="bg-grey100 py-[60px] lg:py-20">
      <div className="container mx-auto max-w-[1440px] px-6 md:px-10 lg:px-[80px]">

        <div className=" flex flex-col gap-10 md:gap-[40px] lg:gap-16">
          {/* Heading Container */}
          <div className="w-full">
            <h2 className="HeadingLBold text-blue950 text-center">
              Japan Trip Eligibility
            </h2>
          </div>
          {/* Eligibility Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5">
            {eligibilityCards.map((card, index) => (
              <InfoCard
                key={index}
                iconContent={card.iconContent}
                description={card.description}
              />
            ))}
          </div>
        </div>

        {/* FAQ Section with Data passed to generic layout */}
        <div className="mt-[20px]">
          <FAQSection items={faqs} cardClassName="bg-[#F5F5F5]" />
        </div>
      </div>
    </section>
  );
}
