// src/components/NewBookingsCard.jsx
import React from 'react';
import { Icons } from '@/components/Icons'; // Assuming this exists in your icon system

export default function NewBookingsCard({ bookings = [] }) {
  const hasBookings = bookings.length > 0;

  return (
    <div className="bg-white rounded-2xl p-5 w-full min-h-[12rem] shadow-sm">
      <h3 className="text-xl font-[Literata] font-semibold text-cyan-700 mb-4">New Bookings</h3>

      {hasBookings ? (
        <ul className="space-y-2">
          {bookings.map((booking, i) => (
            <li key={i} className="text-sm text-slate-700 font-[Montserrat]">
              {booking}
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex items-center gap-2 text-sm text-slate-600 font-[Montserrat] tracking-tight">
          <Icons.Calendar className="w-4 h-4 text-slate-400" />
          You don’t have any bookings to confirm.
        </div>
      )}
    </div>
  );
}
