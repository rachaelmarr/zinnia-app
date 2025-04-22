import React from 'react';
import { FaTimes } from 'react-icons/fa';

export default function TextArea({
  label,
  required = false,
  placeholder = '',
  value = '',
  onChange = () => {},
  helperText = '',
  error = false,
  disabled = false,
  readOnly = false,
  showClear = true,
  rows = 4,
}) {
  const hasValue = Boolean(value);

  return (
    <div className="w-full flex flex-col gap-2 relative">
      {/* Label */}
      {label && (
        <label className="inline-flex justify-start items-center gap-2">
          <div className="flex justify-start items-start gap-0.5">
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

      {/* Textarea Field */}
      <div className="relative w-full">
        <textarea
          rows={rows}
          className={`
            w-full px-3 py-2 pr-8 rounded-lg bg-white outline outline-1 outline-offset-[-1px]
            text-sm font-normal font-[Montserrat] leading-tight tracking-tight resize-none
            ${error ? 'outline-[#B81E26] text-[#B81E26]' : 'outline-slate-400 text-slate-600'}
            ${disabled ? 'bg-neutral-100 text-slate-300 cursor-not-allowed' : ''}
            ${readOnly ? 'bg-neutral-100 text-slate-500 cursor-default' : ''}
          `}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          readOnly={readOnly}
        />

        {/* Clear Button */}
        {showClear && hasValue && !readOnly && !disabled && (
          <button
            onClick={() => onChange({ target: { value: '' } })}
            type="button"
            className="absolute right-2 top-2 w-5 h-5 flex items-center justify-center rounded-full bg-[#47567B] text-white hover:bg-[#3b4a6c] focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-[#0E7490]"
            aria-label="Clear text area"
          >
            <FaTimes className="w-2.5 h-2.5" />
          </button>
        )}
      </div>

      {/* Helper Text */}
      {helperText && (
        <p
          className={`text-sm font-normal font-[Montserrat] leading-tight tracking-tight ${
            error ? 'text-[#B81E26]' : 'text-slate-500'
          }`}
        >
          {helperText}
        </p>
      )}
    </div>
  );
}
