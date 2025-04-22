import React from 'react';
import { FaCheck } from 'react-icons/fa';

export default function Checkbox({
  label,
  helperText,
  checked,
  onChange,
  disabled = false,
  readOnly = false,
}) {
  return (
    <label className="flex items-start gap-2 cursor-pointer">
      <div
        className={`relative pt-0.5 w-4 h-4 rounded border-2 flex items-center justify-center transition-all duration-150
          ${checked ? 'bg-[#2E7684] border-[#2E7684]' : 'bg-white border-slate-400'}
        `}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled || readOnly}
          className="absolute inset-0 opacity-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E7490] focus-visible:ring-offset-2"
        />
        {checked && <FaCheck className="text-neutral-50 text-[10px] pointer-events-none" />}
      </div>

      <div className="flex flex-col justify-start items-start gap-0.5">
        {label && (
          <div className="text-slate-600 text-sm font-medium font-[Literata] leading-tight tracking-tight">
            {label}
          </div>
        )}
        {helperText && (
          <div className="text-slate-500 text-sm font-normal font-[Montserrat] leading-tight tracking-tight">
            {helperText}
          </div>
        )}
      </div>
    </label>
  );
}
