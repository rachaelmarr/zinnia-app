// src/components/RevenueCard.jsx
import React from 'react';

export default function RevenueCard() {
  return (
    <div className="bg-white rounded-2xl p-5 w-full h-72 relative overflow-hidden">
      <h3 className="text-xl font-[Literata] font-semibold text-cyan-700 mb-2">Revenue</h3>
      <div className="text-3xl font-[Literata] font-semibold text-slate-600 mb-6">$0</div>
      {/* Placeholder chart area */}
      <div className="absolute bottom-4 left-5 right-5 h-24 border-t border-slate-200 flex items-end gap-4">
        {['AUG', 'SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB', 'MAR'].map((month) => (
          <div key={month} className="flex flex-col items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-slate-600" />
            <span className="text-[10px] uppercase font-[Literata] text-slate-600">{month}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
