'use client';

import React, { useState, useEffect } from 'react';

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: boolean;
  showSearchIcon?: boolean;
  showCloseIcon?: boolean;
  onClear?: () => void;
  variant?: 'blue' | 'magenta' | 'grey' | 'default';
}

/**
 * High-fidelity Input component based on Figma node 307:11296.
 * Supports 5 states: Default, Active (Focus/Hover), Filled, Error, and Disabled.
 * Animation: 300ms ease-out.
 */
export const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
  ({ label, helperText, error, disabled, showSearchIcon, showCloseIcon, onClear, className, onFocus, onBlur, onChange, value, defaultValue, variant = 'default', ...props }, ref) => {

    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [internalValue, setInternalValue] = useState(value || defaultValue || '');

    // Synchronize internal value with controlled prop
    useEffect(() => {
      if (value !== undefined) {
        setInternalValue(value);
      }
    }, [value]);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      if (onFocus) onFocus(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      if (onBlur) onBlur(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInternalValue(e.target.value);
      if (onChange) onChange(e);
    };

    const hasValue = internalValue !== '';

    // Determine state based on priority
    let state: 'Default' | 'Active' | 'Filled' | 'Error' | 'Disabled' = 'Default';
    if (disabled) state = 'Disabled';
    else if (error) state = 'Error';
    else if (hasValue) state = 'Filled'; // Filled takes priority over Active/Hover
    else if (isFocused || isHovered) state = 'Active'; // Only Active if empty and focused/hovered

    const styles = {
      Default: {
        bg: variant === 'blue' ? 'bg-blue100' : variant === 'magenta' ? 'bg-magenta50' : variant === 'grey' ? 'bg-grey50' : 'bg-grey50',
        rounded: variant === 'blue' || variant === 'magenta' ? 'rounded-[8px]' : 'rounded-[16px]',
        text: variant === 'magenta' ? 'text-magenta950' : 'text-grey950',
        label: variant === 'magenta' ? 'text-magenta950' : 'text-grey950',
        placeholder: variant === 'magenta' ? 'placeholder:text-magenta400' : 'placeholder:text-grey500',
        icon: variant === 'magenta' ? 'text-magenta950' : 'text-grey500',
      },
      Active: {
        bg: 'bg-grey100',
        rounded: 'rounded-[8px]',
        text: 'text-grey950',
        label: 'text-grey950',
        placeholder: 'placeholder:text-grey800',
        icon: 'text-grey950',
      },
      Filled: {
        bg: 'bg-blue100',
        rounded: 'rounded-[8px]',
        text: 'text-blue950',
        label: 'text-grey950',
        placeholder: 'placeholder:text-blue400',
        icon: 'text-blue950',
      },
      Error: {
        bg: 'bg-magenta50',
        rounded: 'rounded-[8px]',
        text: 'text-magenta950',
        label: 'text-magenta950',
        placeholder: 'placeholder:text-magenta400',
        icon: 'text-magenta950',
      },
      Disabled: {
        bg: 'bg-grey100',
        rounded: 'rounded-[8px]',
        text: 'text-grey400',
        label: 'text-grey400',
        placeholder: 'placeholder:text-grey300',
        icon: 'text-grey300',
      }
    };

    const currentStyle = styles[state];

    return (
      <div className={`flex flex-col gap-3 w-full ${className || ''}`}>
        {label && (
          <label className={`ContentMRegular ${currentStyle.label} transition-colors duration-300 ease-out cursor-pointer`}>
            {label}
          </label>
        )}

        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`
            h-[56px] px-4 flex items-center gap-2 
            transition-all duration-300 ease-out cursor-text
            ${currentStyle.bg} ${currentStyle.rounded}
            `}
        // ${error && state !== 'Disabled' ? 'ring-2 ring-magenta950' : ''}
        >
          {showSearchIcon && (
            <div className={`shrink-0 transition-colors duration-300 ${currentStyle.icon}`}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          )}

          <input
            ref={ref}
            disabled={disabled}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            value={value}
            defaultValue={defaultValue}
            className={`
              w-full bg-transparent border-none focus:outline-none focus:ring-0 p-0
              ContentMRegular transition-colors duration-300 
              ${currentStyle.text} ${currentStyle.placeholder}
              disabled:cursor-not-allowed
            `}
            {...props}
          />

          {showCloseIcon && hasValue && !disabled && (
            <button
              type="button"
              onClick={() => {
                setInternalValue('');
                if (onClear) onClear();
              }}
              className={`shrink-0 transition-colors duration-300 cursor-pointer hover:opacity-70 ${currentStyle.icon}`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
        </div>

        {helperText && (
          <p className={`ContentSRegular transition-colors duration-300 ${currentStyle.label}`}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

InputText.displayName = 'InputText';
