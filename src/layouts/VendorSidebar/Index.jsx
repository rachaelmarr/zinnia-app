import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaThLarge, FaCalendarAlt, FaUsers, FaClipboardList, FaFileInvoice, FaComments, FaUser
} from 'react-icons/fa';

const navItems = [
  { label: 'Dashboard', icon: <FaThLarge />, path: '/vendor' },
  { label: 'Calendar', icon: <FaCalendarAlt />, path: '/vendor/calendar' },
  { label: 'Contacts', icon: <FaUsers />, path: '/vendor/contacts' },
  { label: 'My Listing & Services', icon: <FaClipboardList />, path: '/vendor/services' },
  { label: 'Invoices', icon: <FaFileInvoice />, path: '/vendor/invoices' },
  { label: 'Messages', icon: <FaComments />, path: '/vendor/messages' },
  { label: 'My Account', icon: <FaUser />, path: '/vendor/account' },
];

export default function VendorSidebar() {
  const [collapsed, setCollapsed] = useState(true);
  const location = useLocation();

  return (
    <aside className={`bg-white h-screen py-6 px-3 transition-all duration-300 ease-in-out ${collapsed ? 'w-20' : 'w-52'} flex flex-col gap-6 border-r border-slate-200`}>
      {/* Toggle */}
      <button onClick={() => setCollapsed(!collapsed)} className="text-slate-600 w-6 h-6 mb-4 hover:text-[#2E7684]">
        <div className="w-4 h-3 border-t-2 border-b-2 border-slate-600"></div>
      </button>

      {/* Nav Items */}
      <nav className="flex-1 flex flex-col gap-2">
        {navItems.map(({ label, icon, path }) => {
          const active = location.pathname === path;
          return (
            <Link
              key={label}
              to={path}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200
                ${active ? 'bg-gradient-to-b from-blue-950 to-cyan-700 text-neutral-100' : 'text-slate-600 hover:bg-slate-100'}
              `}
            >
              <span className="text-lg">{icon}</span>
              {!collapsed && (
                <span className="text-sm font-[Montserrat] tracking-tight">{label}</span>
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
