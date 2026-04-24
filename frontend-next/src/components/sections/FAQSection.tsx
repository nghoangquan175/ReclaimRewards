'use client';

import React from 'react';
import { FAQCard } from '@/components/ui/FAQCard';

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

interface FAQSectionProps {
  items: FAQItem[];
  cardClassName?: string;
}

/**
 * Generic FAQSection layout component.
 * Handles the two-column grid logic and rendering of FAQCards.
 */
export default function FAQSection({ items, cardClassName }: FAQSectionProps) {
  // Split the items into two columns for tablet/desktop views
  const midpoint = Math.ceil(items.length / 2);
  const leftColumn = items.slice(0, midpoint);
  const rightColumn = items.slice(midpoint);

  return (
    <div className="flex flex-col md:flex-row gap-5 lg:gap-x-5 lg:gap-y-4 w-full items-start">
      {/* Left Column / Mobile Column */}
      <div className="flex flex-col gap-5 flex-1 w-full">
        {leftColumn.map((item, index) => (
          <FAQCard
            key={`left-${index}`}
            question={item.question}
            answer={item.answer}
            className={cardClassName}
          />
        ))}
        {/* On mobile, show the rest of the items in this single column */}
        <div className="flex md:hidden flex-col gap-5 w-full">
          {rightColumn.map((item, index) => (
            <FAQCard
              key={`right-mob-${index}`}
              question={item.question}
              answer={item.answer}
              className={cardClassName}
            />
          ))}
        </div>
      </div>

      {/* Right Column (Hidden on Mobile) */}
      <div className="hidden md:flex flex-col gap-[16px] flex-1 w-full">
        {rightColumn.map((item, index) => (
          <FAQCard
            key={`right-${index}`}
            question={item.question}
            answer={item.answer}
            className={cardClassName}
          />
        ))}
      </div>
    </div>
  );
}
