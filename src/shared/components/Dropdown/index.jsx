import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function Dropdown({
  label,
  required = false,
  helperText = '',
  placeholder = 'Select...',
  options = [],
  value = '',
  onChange = () => {},
  disabled = false,
  className = '', // ✨ new prop
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const hasValue = Boolean(value);

  const toggle = () => !disabled && setIsOpen((open) => !open);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  // 🔁 Close dropdown if user clicks outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`w-full flex flex-col gap-2 ${className}`} ref={dropdownRef}>
      {/* Optional Label */}
      {label && (
        <label className="inline-flex justify-start items-center gap-2">
          <div className="flex gap-0.5">
            <span className="text-slate-600 text-sm font-medium font-[Literata] leading-tight tracking-tight">
              {label}
            </span>
            {required && (
              <span className="text-slate-600 text-sm font-medium font-[Literata] leading-tight tracking-tight">
                *
              </span>
            )}
          </div>
        </label>
      )}

      {/* Button + Menu container */}
      <div className="relative w-full min-w-[240px]">
        <div
          tabIndex={0}
          role="button"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          onClick={toggle}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggle();
            }
          }}
          className={`
            h-9 px-3 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-400
            inline-flex justify-between items-center gap-2 overflow-hidden transition-colors w-full
            ${disabled ? 'cursor-not-allowed text-slate-300 bg-neutral-100' : 'hover:bg-neutral-100 cursor-pointer'}
          `}
        >
          <span
            className={`
              text-sm font-normal font-[Montserrat] leading-tight tracking-tight
              ${hasValue ? 'text-slate-600' : 'text-slate-400'}
            `}
          >
            {hasValue ? value : placeholder}
          </span>
          <FaChevronDown className="text-slate-500 w-4 h-4" />
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div
            role="listbox"
            className="absolute w-full mt-1 rounded-md border border-slate-300 bg-white shadow-md z-20 max-h-60 overflow-auto"
          >
            {options.map((opt) => (
              <div
                key={opt}
                role="option"
                onClick={() => handleSelect(opt)}
                className="px-3 py-2 text-sm font-[Montserrat] hover:bg-neutral-100 cursor-pointer"
              >
                {opt}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Helper Text */}
      {helperText && (
        <p className="text-slate-500 text-sm font-normal font-[Montserrat] leading-tight tracking-tight">
          {helperText}
        </p>
      )}
    </div>
  );
}
