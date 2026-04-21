import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

/**
 * Row 4: Outline Button
 * Based on Figma node 314:1253.
 */
export const ButtonOutline: React.FC<ButtonProps> = ({
  children,
  className = '',
  disabled,
  ...props
}) => {
  return (
    <button
      className={`
        px-8 h-[40px] items-center justify-center relative rounded-[80px] w-fit
        transition-all duration-300 ease-[cubic-bezier(0,0,0.58,1)]
        bg-transparent border border-white text-white
        hover:border-grey50 hover:text-grey50
        disabled:border-grey200 disabled:text-grey200
        cursor-pointer disabled:cursor-not-allowed
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      <span className="ContentMBold whitespace-nowrap">
        {children}
      </span>
    </button>
  );
};
