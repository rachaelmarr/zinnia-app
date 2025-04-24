// src/components/MyCalendarCard.jsx
import React from 'react';

export default function MyCalendarCard() {
  return (
    <div className="bg-white rounded-2xl p-5 w-full h-[480px] flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-[Literata] font-semibold text-cyan-700 mb-2">My Calendar</h3>
        <p className="text-xl font-[Literata] font-semibold text-slate-600">September 2023</p>
        {/* Placeholder for calendar grid */}
        <div className="grid grid-cols-7 gap-1 mt-4 text-center text-sm text-slate-600 font-[Montserrat]">
          {[...Array(30).keys()].map((day) => (
            <div key={day} className="py-2 rounded-full hover:bg-slate-100">{day + 1}</div>
          ))}
        </div>
      </div>
      <button className="mt-4 px-3 py-2 rounded-3xl outline outline-1 outline-slate-400 text-sm font-[Montserrat] text-slate-600 font-medium">
        Manage Availability
      </button>
    </div>
  );
}
