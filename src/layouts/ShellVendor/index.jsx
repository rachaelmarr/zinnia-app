import React from 'react';
import { Outlet } from 'react-router-dom';
import VendorHeader from '../../shared/components/VendorHeader';
import VendorSidebar from '../VendorSidebar';


export default function ShellVendor() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex">
      {/* Collapsible left nav */}
      <VendorSidebar />

      {/* Main content area */}
      <div className="flex-1">
        <VendorHeader isLoggedIn={true} />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
