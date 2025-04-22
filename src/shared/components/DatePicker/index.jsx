// src/shared/components/DatePicker/index.jsx
import React, { useState, useRef, useEffect } from 'react';
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
  subMonths,
  addMonths,
} from 'date-fns';
import { FaCalendarAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function DatePicker({
  value,
  onChange,
  placeholder = 'Any day',
  leftIcon = <FaCalendarAlt />,
  disabled = false,
}) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const ref = useRef();

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowCalendar(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDateSelect = (date) => {
    console.log('✅ Selected date:', date);
    onChange(date);
    setShowCalendar(false);
  };

  const startMonth = startOfMonth(currentMonth);
  const endMonth = endOfMonth(currentMonth);
  const startDate = startOfWeek(startMonth, { weekStartsOn: 1 });
  const endDate = endOfWeek(endMonth, { weekStartsOn: 1 });

  const renderDays = () => {
    const days = [];
    let day = startDate;

    while (day <= endDate) {
      const current = new Date(day); // ✅ clone to avoid mutation issues
      const isCurrentMonth = isSameMonth(current, currentMonth);
      const isSelected = value && isSameDay(current, value);
      const isDisabled = isBefore(current, new Date()) && !isSameDay(current, new Date());

      days.push(
        <button
          key={current.toISOString()}
          disabled={isDisabled}
          onClick={() => handleDateSelect(current)}
          className={`w-8 h-8 rounded-full text-sm flex items-center justify-center font-[Montserrat]
            ${isSelected ? 'bg-slate-300 text-white' : 'text-slate-700'}
            ${!isCurrentMonth ? 'text-slate-300' : ''}
            ${isDisabled ? 'opacity-40 cursor-not-allowed' : 'hover:bg-neutral-200'}
          `}
        >
          {format(current, 'd')}
        </button>
      );

      day = addDays(day, 1); // move to next day
    }

    return <div className="grid grid-cols-7 gap-1 w-full">{days}</div>;
  };

  const weekdays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

  return (
    <div className="relative w-full min-w-[160px]" ref={ref}>
      {/* Trigger */}
      <div
        className={`h-9 px-3 min-w-[160px] bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-400
          inline-flex justify-start items-center gap-2 cursor-pointer hover:bg-neutral-100 ${disabled ? 'cursor-not-allowed opacity-50' : ''}`}
        onClick={() => !disabled && setShowCalendar((prev) => !prev)}
      >
        {leftIcon && <FaCalendarAlt className="text-slate-500 w-4 h-4" />}
        <span className={`text-sm font-[Montserrat] ${value ? 'text-slate-600' : 'text-slate-400'}`}>
          {value ? format(value, 'MMM d, yyyy') : placeholder}
        </span>
      </div>

      {/* Calendar dropdown */}
      {showCalendar && (
        <div className="absolute z-20 mt-2 p-4 bg-white rounded-lg shadow-lg border border-slate-300 w-[320px]">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
              <FaChevronLeft className="text-slate-600 w-4 h-4" />
            </button>
            <h2 className="text-lg font-bold font-[Literata] text-slate-700">
              {format(currentMonth, 'MMMM yyyy')}
            </h2>
            <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
              <FaChevronRight className="text-slate-600 w-4 h-4" />
            </button>
          </div>

          {/* Weekday Labels */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {weekdays.map((day) => (
              <div key={day} className="text-sm font-extrabold font-[Literata] text-center text-slate-600">
                {day}
              </div>
            ))}
          </div>

          {/* Day Grid */}
          {renderDays()}
        </div>
      )}
    </div>
  );
}
