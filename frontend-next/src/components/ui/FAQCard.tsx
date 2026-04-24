'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import plusIcon from '@/assets/icons/faq-plus.svg';

interface FAQCardProps {
  question: string;
  answer: string | React.ReactNode;
  className?: string;
}

/**
 * Reusable FAQCard component with accordion expansion.
 * Standardized to match Figma node 317:12798.
 */
export const FAQCard: React.FC<FAQCardProps> = ({ question, answer, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`
        flex flex-col px-6 pt-6 rounded-[24px] w-full cursor-pointer select-none
        transition-all duration-300 ease-[cubic-bezier(0,0,0.58,1)]
        ${className || 'bg-grey50'}
      `}
    >
      <div className="flex justify-between items-center w-full gap-4 pb-5">
        <div className="flex-1 ContentLBold text-[#1a1a1a] select-none min-h-[36px] flex items-center">
          {question}
        </div>
        <div
          className={`
            bg-blue950 flex items-center justify-center rounded-full shrink-0 size-9
            transition-transform duration-300 ease-[cubic-bezier(0,0,0.58,1)]
            ${isOpen ? 'rotate-[-45deg]' : 'rotate-0'}
          `}
        >
          <Image
            src={plusIcon}
            alt={isOpen ? "Collapse" : "Expand"}
            width={20}
            height={20}
          />
        </div>
      </div>

      {/* Answer content with smooth decoupled expansion */}
      <div
        className={`
          grid transition-all duration-400 ease-[cubic-bezier(0,0,0.58,1)] 
          ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}
        `}
      >
        <div className="overflow-hidden">
          <div
            className={`
              ContentMRegular text-grey800 pb-6 
              transition-all duration-400 ease-[cubic-bezier(0,0,0.58,1)]
              ${isOpen ? 'opacity-100' : 'opacity-0'}
            `}
          >
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};
