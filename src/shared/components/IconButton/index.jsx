import React from 'react';

export default function IconButton({
  icon,
  onClick,
  disabled = false,
  variant = 'primary',
  size = 'md',
  ariaLabel = 'Icon Button',
}) {
  const base =
    'inline-flex items-center justify-center rounded-full transition-all duration-150 ' +
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E7490] focus-visible:ring-offset-2';

  const sizeMap = {
    sm: 'w-8 h-8 p-1',
    md: 'w-9 h-9 p-2',
    lg: 'w-10 h-10 p-2.5',
  };

  const variants = {
    primary: disabled
      ? 'bg-neutral-100 text-slate-300 cursor-not-allowed'
      : 'bg-white text-slate-600 outline outline-1 outline-offset-[-1px] outline-slate-600 ' +
        'hover:bg-neutral-200 ' +
        'active:bg-cyan-900 active:text-white active:outline-cyan-900 active:scale-[0.97] ' +
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E7490] focus-visible:ring-offset-2',
  };

  return (
    <button
      className={`${base} ${sizeMap[size]} ${variants[variant]}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {icon}
    </button>
  );
}
