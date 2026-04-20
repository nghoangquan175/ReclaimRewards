import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  theme?: 'on-dark' | 'on-light';
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  theme = 'on-light',
  icon,
  children,
  className = '',
  disabled,
  ...props
}) => {
  // Base classes for the button container
  const baseClasses = 'flex h-[40px] items-center p-[4px] relative rounded-[80px] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';
  
  // Variant & Theme combinations
  const variants = {
    primary: {
      'on-light': 'bg-magenta600 hover:bg-magenta800 text-white disabled:bg-grey300',
      'on-dark': 'bg-white hover:bg-grey50 text-grey950 disabled:bg-grey200',
    },
    // The "Secondary" in figma had two types: Magenta solid (similar to Primary OnLight) 
    // and White Outline. I'll split these into secondary and outline.
    secondary: {
      'on-light': 'bg-magenta600 hover:bg-magenta800 text-white disabled:bg-grey300',
      'on-dark': 'bg-magenta600 hover:bg-magenta800 text-white disabled:bg-grey300',
    },
    outline: {
      'on-light': 'bg-transparent border border-grey600 text-grey600 hover:bg-grey50 disabled:border-grey200 disabled:text-grey200',
      'on-dark': 'bg-transparent border border-white text-white hover:bg-white/10 disabled:border-grey400 disabled:text-grey400',
    }
  };

  // Icon container classes
  const iconContainerBase = 'flex items-center justify-center rounded-full shrink-0 size-[32px] p-[8px] ml-auto';
  const iconContainers = {
    primary: {
      'on-light': 'bg-white text-magenta600',
      'on-dark': 'bg-magenta600 text-white',
    },
    secondary: {
      'on-light': 'bg-transparent text-white',
      'on-dark': 'bg-transparent text-white',
    },
    outline: {
      'on-light': 'bg-transparent text-grey600',
      'on-dark': 'bg-transparent text-white',
    },
  };


  const themeClasses = variants[variant][theme];

  return (
    <button
      className={`${baseClasses} ${themeClasses} ${className}`}
      disabled={disabled}
      {...props}
    >
      <span className="px-[12px] ContentMBold whitespace-nowrap">
        {children}
      </span>
      {icon && (
        <div className={`${iconContainerBase} ${iconContainers[variant][theme]}`}>
          {typeof icon === 'string' ? (
            <span className="material-symbols-outlined !text-[20px]">{icon}</span>
          ) : (
            icon
          )}
        </div>
      )}
    </button>
  );
};
