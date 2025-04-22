import React from 'react';

export default function RadioOption({
  label,
  helperText,
  name,
  value,
  checked,
  onChange,
  disabled = false,
}) {
  return (
    <label className="flex items-start gap-2 cursor-pointer">
      <div
        className={`relative pt-0.5 w-4 h-4 rounded-full border-2 transition-all duration-150
          ${checked ? 'bg-[#2E7684] border-[#2E7684]' : 'bg-white border-slate-400'}
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        `}
      >
        {checked && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
          </div>
        )}
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          className="absolute inset-0 opacity-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E7490] focus-visible:ring-offset-2"
        />
      </div>

      <div className="flex flex-col gap-0.5">
        <span className="text-slate-600 text-sm font-medium font-[Literata] leading-tight tracking-tight">
          {label}
        </span>
        {helperText && (
          <span className="text-slate-500 text-sm font-normal font-[Montserrat] leading-tight tracking-tight">
            {helperText}
          </span>
        )}
      </div>
    </label>
  );
}
