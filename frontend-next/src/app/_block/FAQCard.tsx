'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface FAQCardProps {
  question: string;
  answer: string | React.ReactNode;
}

/**
 * Reusable FAQCard component with accordion expansion.
 * Based on Figma node 317:12886.
 */
export const FAQCard: React.FC<FAQCardProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="bg-grey50 flex flex-col gap-2 p-6 rounded-[24px] w-full transition-all duration-300 ease-in-out cursor-pointer hover:bg-grey100"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center w-full gap-6">
        <h4 className="flex-1 ContentLBold text-grey950 select-none">
          {question}
        </h4>
        <button 
          className="bg-blue950 flex items-center justify-center rounded-full shrink-0 size-9 transition-transform duration-300"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}
          aria-expanded={isOpen}
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
        >
          <Image 
            src={isOpen ? "/images/faq-minus.svg" : "/images/faq-plus.svg"} 
            alt={isOpen ? "Collapse" : "Expand"} 
            width={20} 
            height={20}
          />
        </button>
      </div>

      {/* Answer content with smooth expansion */}
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-grey200 pt-4 text-grey950 text-[16px] font-normal leading-[1.3] tracking-[-2%]">
          {answer}
        </div>
      </div>
    </div>
  );
};
