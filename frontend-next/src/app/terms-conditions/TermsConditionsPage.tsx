import React from 'react';
import TermsConsBanner from './_components/TermsConsBanner';
import TermsConsContent from './_components/TermsConsContent';
import FAQSection from '@/components/sections/FAQSection';

export default function TermsConditionsPage() {
  return (
    <main className="flex flex-col w-full">
      <TermsConsBanner />

      {/* Terms Content */}
      <TermsConsContent />

      {/* Shared FAQ Section */}
      {/* <FAQSection /> */}
    </main>
  );
}
