import React from 'react';
import { IconArrowRight } from './icons/IconArrowRight';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  showIcon?: boolean;
}

/**
 * Row 1: Primary On-Dark Button
 * Based on Figma node 314:1214.
 */
export const ButtonPrimaryOnDark: React.FC<ButtonProps> = ({
  children,
  icon,
  showIcon = true,
  className = '',
  disabled,
  ...props
}) => {
  return (
    <button
      className={`
        group flex h-[40px] items-center p-[4px] relative rounded-[80px] w-fit
        transition-all duration-300 ease-[cubic-bezier(0,0,0.58,1)]
        bg-white hover:bg-grey50 disabled:bg-grey300
        text-grey950 disabled:text-grey600
        cursor-pointer disabled:cursor-not-allowed
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      <div className="px-3 flex items-center justify-center">
        <span className="ContentMBold whitespace-nowrap">
          {children}
        </span>
      </div>
      
      {showIcon && (
        <div className="
          flex items-center justify-center rounded-full shrink-0 size-[32px] ml-auto
          transition-all duration-300 ease-[cubic-bezier(0,0,0.58,1)]
          bg-magenta600 group-hover:bg-magenta800 group-disabled:bg-grey400
          text-white
        ">
          {icon || <IconArrowRight />}
        </div>
      )}
    </button>
  );
};
