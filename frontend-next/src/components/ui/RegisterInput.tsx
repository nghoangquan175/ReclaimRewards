import React from 'react';

interface RegisterInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  variant?: 'blue' | 'pink' | 'grey';
  helperText?: string;
  error?: boolean;
}

/**
 * Specialized Input component for the Registration form.
 * Supports different background variants based on design requirements.
 * Based on Figma node 337:18206 and related variants.
 */
export const RegisterInput = React.forwardRef<HTMLInputElement, RegisterInputProps>(
  ({ label, variant = 'grey', helperText, error, className, ...props }, ref) => {
    
    // Background color mappings based on design context
    const variantStyles = {
      blue: 'bg-blue100 text-blue950 rounded-[8px]',
      pink: 'bg-magenta50 text-magenta950 rounded-[8px]',
      grey: 'bg-grey50 text-grey950 rounded-[16px]',
    };

    const labelStyles = variant === 'pink' ? 'text-magenta950' : 'text-grey950';

    return (
      <div className="flex flex-col gap-3 w-full">
        <label className={`ContentMRegular ${labelStyles}`}>
          {label}
        </label>
        <div className={`h-[56px] px-4 flex items-center transition-all ${variantStyles[variant]} ${error ? 'ring-2 ring-red-500' : ''}`}>
          <input
            ref={ref}
            className="w-full bg-transparent border-none focus:outline-none focus:ring-0 ContentMRegular placeholder:text-grey500 disabled:opacity-50"
            {...props}
          />
        </div>
        {helperText && (
          <p className={`text-[16px] font-normal leading-[1.3] tracking-[-2%] ${variant === 'pink' ? 'text-magenta950' : 'text-grey950'}`}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

RegisterInput.displayName = 'RegisterInput';
