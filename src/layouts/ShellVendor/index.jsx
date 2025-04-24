// src/layouts/ShellVendor/index.jsx
import { Outlet } from 'react-router-dom';
import VendorHeader from '../../shared/components/VendorHeader';

export default function ShellVendor() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans">
      <VendorHeader isLoggedIn={true} />
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
