import React from 'react';

export default function MyCalendarCard({
  monthLabel = 'September 2023',
  daysInMonth = 30,
  onManageClick,
  bookedDates = [],
}) {
  const isBooked = (day) => bookedDates.includes(day);

  return (
    <div className="bg-white rounded-2xl p-5 w-full min-h-[12rem] flex flex-col justify-between shadow-sm">
      <div>
        <h3 className="text-xl font-[Literata] font-semibold text-cyan-700 mb-2">My Calendar</h3>
        <p className="text-xl font-[Literata] font-semibold text-slate-600">{monthLabel}</p>

        <div className="grid grid-cols-7 gap-1 mt-4 text-center text-sm text-slate-600 font-[Montserrat]">
          {[...Array(daysInMonth).keys()].map((day) => {
            const dayNum = day + 1;
            return (
              <div
                key={day}
                className={`py-2 rounded-full ${
                  isBooked(dayNum) ? 'bg-cyan-100 text-cyan-800 font-semibold' : 'hover:bg-slate-100'
                }`}
                aria-label={`Day ${dayNum}`}
              >
                {dayNum}
              </div>
            );
          })}
        </div>
      </div>
      <button
        onClick={onManageClick}
        className="mt-4 px-3 py-2 rounded-3xl outline outline-1 outline-slate-400 text-sm font-[Montserrat] text-slate-600 font-medium hover:bg-slate-50"
      >
        Manage Availability
      </button>
    </div>
  );
}
