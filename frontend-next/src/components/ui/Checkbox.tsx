'use client';

import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string | React.ReactNode;
}

/**
 * Branded Checkbox component for Reclaim Rewards.
 * Based on Figma node 307:11244 (Component Set).
 * Node 2 (307:11246) is the Disabled state.
 */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, disabled, ...props }, ref) => {
    return (
      <label className={`
        flex gap-3.5 items-start 
        ${disabled ? 'cursor-not-allowed' : 'cursor-pointer group'}
      `}>
        <div className="relative flex items-center justify-center pt-0.5">
          <input
            type="checkbox"
            ref={ref}
            disabled={disabled}
            className="peer sr-only"
            {...props}
          />
          {/* Custom Checkbox Box */}
          <div className={`
            size-5 rounded-[4px] border transition-all duration-300 ease-out
            ${disabled 
              ? 'bg-grey100 border-grey400' 
              : 'bg-blue50 border-blue950 peer-checked:bg-blue950'
            }
          `} />
          
          {/* Checkmark Icon */}
          <svg
            className={`
              absolute size-3.5 pointer-events-none transition-all duration-300 ease-out
              ${disabled ? 'text-grey400 opacity-100' : 'text-white opacity-0 peer-checked:opacity-100'}
            `}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6666 3.5L5.24992 9.91667L2.33325 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {label && (
          <span className={`
            ContentMRegular select-none transition-colors duration-300
            ${disabled ? 'text-grey400' : 'text-grey950'}
          `}>
            {label}
          </span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
