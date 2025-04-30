import React from 'react';

export default function RevenueCard({
  revenueTotal = 0,
  revenueByMonth = [],
}) {
  // Fallback labels if no data is passed
  const months = ['AUG', 'SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB', 'MAR'];

  return (
    <div className="bg-white rounded-2xl p-5 w-full h-72 relative overflow-hidden shadow-sm">
      <h3 className="text-xl font-[Literata] font-semibold text-cyan-700 mb-2">Revenue</h3>
      <div className="text-3xl font-[Literata] font-semibold text-slate-600 mb-6">${revenueTotal}</div>

      {/* Mini Chart */}
      <div className="absolute bottom-4 left-5 right-5 h-24 border-t border-slate-200 flex items-end gap-4">
        {months.map((month, i) => {
          const value = revenueByMonth[i] || 0;
          const height = Math.max(4, (value / 10000) * 40); // scale for display

          return (
            <div key={month} className="flex flex-col items-center gap-1">
              <div
                style={{ height: `${height}px` }}
                className="w-2 rounded-full bg-slate-600 transition-all"
                aria-label={`Revenue for ${month}: $${value}`}
              />
              <span className="text-[10px] uppercase font-[Literata] text-slate-600">{month}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
