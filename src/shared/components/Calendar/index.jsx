// src/shared/components/Calendar/index.jsx
import React from 'react';
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
  isBefore,
} from 'date-fns';

export default function Calendar({ selectedDate, onChange }) {
  const today = new Date();
  const startMonth = startOfMonth(today);
  const endMonth = endOfMonth(today);
  const startDate = startOfWeek(startMonth);
  const endDate = endOfWeek(endMonth);

  const renderDays = () => {
    const days = [];
    let day = new Date(startDate); // Clone to avoid mutation issues

    while (day <= endDate) {
      const dayClone = new Date(day); // Stable reference
      const isCurrentMonth = isSameMonth(dayClone, today);
      const isToday = isSameDay(dayClone, today);
      const isSelected = selectedDate && isSameDay(dayClone, selectedDate);
      const isDisabled = isBefore(dayClone, today) && !isToday;

      days.push(
        <button
          key={dayClone.toISOString()}
          disabled={isDisabled}
          onClick={() => onChange(dayClone)}
          className={`
            w-10 h-10 rounded-full flex items-center justify-center 
            text-sm font-normal font-[Montserrat] leading-tight tracking-tight 
            ${isSelected 
                ? 'bg-cyan-700 text-white pointer-events-none' 
                : isDisabled 
                  ? 'opacity-30 cursor-not-allowed' 
                  : 'text-slate-600 hover:bg-neutral-200'}
          `}
        >
          {format(dayClone, 'd')}
        </button>
      );

      day = addDays(day, 1);
    }

    return days;
  };

  const renderWeekdays = () => {
    const weekdays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
    return weekdays.map((day) => (
      <div
        key={day}
        className="text-center text-slate-600 text-sm font-extrabold font-[Literata] leading-tight tracking-tight"
      >
        {day}
      </div>
    ));
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-slate-300 inline-flex flex-col items-center gap-4 w-full">
      <h2 className="text-slate-600 text-2xl font-bold font-[Literata] capitalize leading-loose text-center">
        {format(today, 'MMMM yyyy')}
      </h2>

      <div className="grid grid-cols-7 gap-1 w-full">{renderWeekdays()}</div>
      <div className="grid grid-cols-7 gap-1 w-full">{renderDays()}</div>
    </div>
  );
}