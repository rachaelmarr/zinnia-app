// src/components/NewBookingsCard.jsx
import React from 'react';

export default function NewBookingsCard() {
  return (
    <div className="bg-white rounded-2xl p-5 w-full h-72">
      <h3 className="text-xl font-[Literata] font-semibold text-cyan-700 mb-6">New Bookings</h3>
      <p className="text-sm text-slate-600 font-[Montserrat] tracking-tight">
        You don’t have any bookings to confirm.
      </p>
    </div>
  );
}
