import React from 'react';
import { cn } from '../../../utils/classnames';

export default function Button({
  children,
  disabled = false,
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  onClick,
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-3xl text-sm font-medium font-[Montserrat] tracking-tight leading-tight transition-all duration-150';

  const sizeMap = {
    sm: 'px-2 py-1 h-8 text-xs',
    md: 'px-3 py-2 h-9 text-sm',
    lg: 'px-4 py-3 h-10 text-base',
  };

  const primary = !disabled
    ? 'bg-gradient-to-b from-[#1A2652] to-[#2E7684] text-white ' +
      'hover:from-[#5EB9B9] hover:to-[#5EB9B9] hover:bg-[#5EB9B9] ' +
      'active:from-cyan-900 active:to-cyan-900 active:bg-cyan-900 active:scale-[0.97] ' +
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E7490] focus-visible:ring-offset-2'
    : 'bg-neutral-100 text-slate-300 cursor-not-allowed';

  const secondary = !disabled
    ? 'text-slate-600 outline outline-1 outline-offset-[-1px] outline-slate-400 ' +
      'hover:bg-neutral-200 hover:outline-slate-600 ' +
      'active:bg-neutral-300 active:outline-blue-950 ' +
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E7490] focus-visible:ring-offset-2'
    : 'bg-neutral-100 text-slate-300 cursor-not-allowed';

  const styleMap = {
    primary,
    secondary,
  };

  return (
    <button
      className={cn(base, sizeMap[size], styleMap[variant])}
      disabled={disabled}
      onClick={onClick}
    >
      {iconLeft && <span className="flex items-center">{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span className="flex items-center">{iconRight}</span>}
    </button>
  );
}
