import React from 'react';
import VendorHeader from '../../../shared/components/VendorHeader';

export default function VendorDashboard() {
  return (
    <>
      <VendorHeader isLoggedIn={true} />

      <main className="p-6">
        <h1 className="text-2xl font-[Literata] text-slate-700 mb-4">Vendor Dashboard</h1>
        <p className="text-slate-600 font-[Montserrat]">
          Welcome! Here's a snapshot of your business, new inquiries, and recent activity.
        </p>

        {/* Dashboard cards or components go here */}
      </main>
    </>
  );
}
