'use client';

import React from 'react';
import FAQSection from '@/components/sections/FAQSection';
import { faqData } from '@/constant/faqData';

/**
 * HomeFAQsection component for the homepage.
 * Holds the specific FAQ data and uses the generic FAQSection for layout.
 * Based on Figma node 675:3906.
 */
export default function HomeFAQsection() {
  return (
    <section id="faqs" className="bg-white py-[60px]">
      <div className="container mx-auto max-w-[1440px] px-6 md:px-12 lg:px-[80px] flex flex-col gap-10 md:gap-[60px] lg:gap-16 items-center">

        {/* Heading Section */}
        <div className="max-w-[774px] w-full text-center">
          <h2 className="HeadingMBold text-[#001a77]">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Layout Section with Data */}
        <FAQSection items={faqData} cardClassName="bg-grey50" />

      </div>
    </section>
  );
}
