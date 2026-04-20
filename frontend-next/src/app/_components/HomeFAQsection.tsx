import React from 'react';
import { FAQCard } from '../_block/FAQCard';

/**
 * HomeFAQsection implementing the Frequently Asked Questions block.
 * Based on Figma node 307:6118.
 */
export default function HomeFAQsection() {
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
    <section className="bg-white py-16 lg:py-20 px-6 md:px-12 lg:px-[80px]">
      <div className="container mx-auto max-w-[1440px] flex flex-col gap-16 items-center">
        
        {/* Heading Section */}
        <div className="max-w-[774px] w-full text-center">
          <h2 className="HeadingMBold text-blue950">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-x-[24px] lg:gap-y-[16px] w-full items-start">
          {faqData.map((item, index) => (
            <FAQCard 
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
