import React from 'react';

export default function MyServicesCard({ serviceCount = 0, viewsThisMonth = 0, onManageClick }) {
  const pluralize = (count, noun) => `${count} ${noun}${count !== 1 ? 's' : ''}`;

  return (
    <div className="bg-white rounded-2xl p-5 w-full min-h-[12rem] flex flex-col justify-between shadow-sm">
      <div>
        <h3 className="text-xl font-[Literata] font-semibold text-cyan-700 mb-2">My services</h3>
        <div className="flex gap-2 items-center text-sm font-[Literata] text-slate-600">
          <span className="text-cyan-700 font-medium">{serviceCount}</span> {pluralize(serviceCount, 'Service')}
          <div className="w-6 h-px bg-slate-400 mx-2 transform rotate-90" />
          <span className="text-cyan-700 font-medium">{viewsThisMonth}</span> total views this month
        </div>
      </div>
      <button
        onClick={onManageClick}
        className="mt-auto px-3 py-2 rounded-3xl outline outline-1 outline-slate-400 text-sm font-[Montserrat] text-slate-600 font-medium hover:bg-slate-50"
      >
        Manage My Services
      </button>
    </div>
  );
}
