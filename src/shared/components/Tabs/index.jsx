import React, { useState } from 'react';
import { cn } from '../../../utils/classnames';

export function Tabs({ tabs = [], defaultIndex = 0, onTabChange }) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const handleTabClick = (index) => {
    setActiveIndex(index);
    if (onTabChange) onTabChange(index);
  };

  return (
    <div className="w-full">
      <div className="flex border-b border-slate-200 overflow-x-auto">
        {tabs.map((tab, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={tab.label}
              onClick={() => handleTabClick(index)}
              className={cn(
                'h-9 px-3 py-2 inline-flex items-center gap-3 transition-all duration-150 overflow-hidden',
                'text-sm font-normal font-[Montserrat] leading-tight tracking-tight',
                isActive
                  ? 'text-slate-600 border-b-2 border-neutral-900'
                  : 'text-slate-500 border-b-2 border-transparent',
                isActive
                  ? 'hover:bg-neutral-200 active:bg-neutral-300'
                  : 'hover:bg-neutral-200 active:bg-neutral-300',
                'focus:outline-none focus-visible:bg-white focus-visible:shadow-[0px_0px_0px_4px_rgba(14,116,144,1)] focus-visible:shadow-[0px_0px_0px_2px_rgba(255,255,255,1)]'
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="mt-4">
        {tabs[activeIndex]?.content}
      </div>
    </div>
  );
}
