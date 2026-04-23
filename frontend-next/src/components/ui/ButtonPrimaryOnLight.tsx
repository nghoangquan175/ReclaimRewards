import React from 'react';
import { IconArrowRight } from './icons/IconArrowRight';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  showIcon?: boolean;
  size?: 'small' | 'medium' | 'large';
}

/**
 * Row 2: Primary On-Light Button
 * Based on Figma node 314:1229.
 */
export const ButtonPrimaryOnLight: React.FC<ButtonProps> = ({
  children,
  icon,
  showIcon = true,
  size = 'medium',
  className = '',
  disabled,
  ...props
}) => {
  const sizeStyles = {
    small: {
      button: 'h-[32px] p-[2px]',
      text: 'px-2 text-[14px]',
      icon: 'size-[28px]'
    },
    medium: {
      button: 'h-[40px] p-[4px]',
      text: 'px-3 text-[16px]',
      icon: 'size-[32px]'
    },
    large: {
      button: 'h-[56px] p-[5.6px]',
      text: 'px-4 md:px-[16.8px] text-[20px] md:text-[22.4px]',
      icon: 'size-[44.8px]'
    }
  };

  const currentSize = sizeStyles[size];

  return (
    <button
      className={`
        group flex items-center relative rounded-[80px] w-fit
        transition-all duration-300 ease-[cubic-bezier(0,0,0.58,1)]
        bg-magenta600 hover:bg-magenta800 disabled:bg-grey300
        text-white disabled:text-grey600
        cursor-pointer disabled:cursor-not-allowed
        ${currentSize.button}
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      <div className={`flex items-center justify-center ${currentSize.text}`}>
        <span className="ContentMBold whitespace-nowrap">
          {children}
        </span>
      </div>

      {showIcon && (
        <div className={`
          flex items-center justify-center rounded-full shrink-0 ml-auto
          transition-all duration-300 ease-[cubic-bezier(0,0,0.58,1)]
          bg-white group-disabled:bg-grey400
          text-magenta600 group-disabled:text-grey600
          ${currentSize.icon}
        `}>
          {icon || <IconArrowRight className="size-6 md:size-7" />}
        </div>
      )}
    </button>
  );
};
