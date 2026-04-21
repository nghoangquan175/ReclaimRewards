import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

/**
 * Row 3: Secondary Button (Filled with Border)
 * Based on Figma node 314:1244.
 */
export const ButtonSecondary: React.FC<ButtonProps> = ({
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
        bg-magenta600 border border-white text-white
        hover:bg-magenta700 hover:border-grey200 hover:text-magenta200
        disabled:bg-grey950 disabled:border-grey400 disabled:text-grey400
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
