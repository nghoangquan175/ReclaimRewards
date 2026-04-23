import React from 'react';
import TermsConsBanner from './_components/TermsConsBanner';
import TermsConsContent from './_components/TermsConsContent';
import FAQSection from '@/components/sections/FAQSection';
import { faqData } from '@/constant/faqData';

export default function TermsConditionsPage() {
  return (
    <main className="flex flex-col w-full">
      <TermsConsBanner />

      {/* Terms Content */}
      <TermsConsContent />

      {/* Shared FAQ Section */}
      <div className="lg:hidden p-6 bg-grey100">
        <h2 className="HeadingMBold text-blue950 text-center mb-10">
          Frequently Asked Questions
        </h2>
        <FAQSection items={faqData} cardClassName="bg-white" />
      </div>
    </main>
  );
}
