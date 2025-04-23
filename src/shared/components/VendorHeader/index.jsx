// src/shared/components/VendorHeader/index.jsx
import React from 'react';
import { ReactComponent as ZinniaLogo } from '../../../assets/zinnia-logo.svg';
import {
  FaBell,
  FaEnvelope,
  FaUserCircle,
} from 'react-icons/fa';

export default function VendorHeader({ isLoggedIn = false }) {
  return (
    <header className="w-full px-10 py-4 bg-white border-b border-slate-300 flex justify-between items-center">
      {/* Left: Logo */}
      <div className="flex items-center gap-10">
        <div className="h-6 w-36 flex items-center overflow-hidden">
          <ZinniaLogo className="h-6 w-auto" />
        </div>
      </div>

      {/* Right: Logged In / Out state */}
      <div className="flex items-center gap-6">
        {isLoggedIn ? (
          <>
            <FaEnvelope className="text-slate-600 w-5 h-5 hover:text-[#2F7685] transition-colors cursor-pointer" />
            <FaBell className="text-slate-600 w-5 h-5 hover:text-[#2F7685] transition-colors cursor-pointer" />
            <img
              className="w-10 h-10 rounded-full"
              src="https://placehold.co/40x40"
              alt="Vendor avatar"
            />
          </>
        ) : (
          <div className="w-10 h-10 rounded-full bg-gradient-to-b from-[#1A2652] to-[#2E7684]" />
        )}
      </div>
    </header>
  );
}
