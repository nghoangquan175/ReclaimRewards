import React from 'react';
import { FAQCard } from '@/components/ui/FAQCard';

/**
 * FAQSection implementing the Frequently Asked Questions block.
 * Based on Figma node 307:6118.
 * Shared component used in Homepage and Terms & Conditions.
 */
export default function FAQSection() {
  const faqData = [
    {
      question: "How do you track what I return?",
      answer: "We partner directly with participating wholesalers (Airefrig Australia and Actrol). When you return refrigerant under your registered business account, they log the volumes directly with the program team. Ensure you use your registered ABN for every transaction."
    },
    {
      question: "What refrigerants count?",
      answer: "The program primarily counts high-GWP refrigerants eligible for reclaim. This includes common types like R410A, R404A, and R134a. Check our full Terms & Conditions for the specific list of accepted gases."
    },
    {
      question: "When will I hear back after registering?",
      answer: "Once you register your business during May-June 2026, we will verify your details (ABN and RTA licence). You will receive a confirmation email within 5 business days, followed by your baseline volume notification."
    },
    {
      question: "Who wins the Japan trip?",
      answer: "Top-performing businesses that return at least 1,000 kg and show significant growth above their baseline. Five winners will be chosen for two spots each on the 2027/28 A-Gas incentive trip."
    },
    {
      question: "What if I don't hit the 20% growth baseline?",
      answer: "While 20% growth is a requirement for Japan trip eligibility, you can still earn reward points for every extra kg returned above your baseline volume, provided you meet the minimum point threshold."
    }
  ];

  return (
    <section id="faqs" className="bg-white py-10 lg:py-20">
      <div className="container mx-auto max-w-[1440px] px-6 md:px-12 lg:px-[80px] flex flex-col gap-10 lg:gap-16 items-start lg:items-center">
        
        {/* Heading Section */}
        <div className="w-full lg:max-w-[774px] text-left lg:text-center">
          <h2 className="HeadingMBold lg:HeadingLBold text-blue950 hidden lg:block">
            Frequently Asked Questions
          </h2>
          <h2 className="HeadingSBold text-blue950 lg:hidden">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Columns: 1 col on mobile/tablet, 2 cols on lg */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 w-full items-start">
          {/* Mobile view: Simple list of all FAQs */}
          <div className="flex lg:hidden flex-col gap-4 w-full">
            {faqData.map((item, index) => (
              <FAQCard 
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>

          {/* Desktop view: Split into two columns */}
          <>
            <div className="hidden lg:flex flex-col gap-[16px] flex-1 w-full">
              {faqData.slice(0, 3).map((item, index) => (
                <FAQCard 
                  key={index}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
            <div className="hidden lg:flex flex-col gap-[16px] flex-1 w-full">
              {faqData.slice(3).map((item, index) => (
                <FAQCard 
                  key={index + 3}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
          </>
        </div>

      </div>
    </section>
  );
}
