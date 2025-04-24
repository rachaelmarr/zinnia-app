import React from 'react';
import { ReactComponent as ZinniaLogo } from '../../../assets/zinnia-logo.svg';
import { FaBell, FaRegCommentDots, FaUserCircle } from 'react-icons/fa';

export default function VendorHeader({ isLoggedIn = false }) {
  return (
    <header className="w-full px-4 py-5 bg-white border-b border-slate-300 flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0">
      {/* Logo */}
      <div className="flex items-center gap-5">
        <ZinniaLogo className="h-6 w-auto" />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4 text-slate-600">
        {isLoggedIn ? (
          <>
            <FaRegCommentDots
              className="w-5 h-5 cursor-pointer hover:text-[#2E7684] active:text-[#124058] transition-colors"
              aria-label="Inbox"
            />
            <FaBell
              className="w-5 h-5 cursor-pointer hover:text-[#2E7684] active:text-[#124058] transition-colors"
              aria-label="Notifications"
            />
            <FaUserCircle
              className="w-6 h-6 text-slate-600 hover:text-[#2E7684] active:text-[#124058] cursor-pointer transition-colors"
              aria-label="Account"
            />
          </>
        ) : (
          <div className="w-6 h-6 bg-gradient-to-b from-[#1A2652] to-[#2E7684] rounded-full" />
        )}
      </div>
    </header>
  );
}
