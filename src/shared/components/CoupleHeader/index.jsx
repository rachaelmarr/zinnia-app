// src/shared/components/CoupleHeader/index.jsx
import React, { useState } from 'react';
import { Dropdown, Button, LocationField, DatePicker } from '../';
import { ReactComponent as ZinniaLogo } from '../../../assets/zinnia-logo.svg';
import {
  FaShoppingCart,
  FaBell,
  FaUser,
  FaRegCalendarAlt,
  FaQuestionCircle,
  FaSearch,
} from 'react-icons/fa';

export default function CoupleHeader({ isLoggedIn = false, onSearch = () => {} }) {
  const [vendorType, setVendorType] = useState('All vendors');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState(null);

  return (
    <header className="w-full px-4 py-5 bg-white border-b border-slate-300 flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0">
      {/* Logo */}
      <div className="flex items-center gap-5">
        <ZinniaLogo className="h-6 w-auto" />
      </div>

      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full md:w-auto">
        <div className="w-full max-w-[240px]">
          <Dropdown
            value={vendorType}
            onChange={setVendorType}
            options={["All vendors", "Photographers", "Venues", "Caterers"]}
          />
        </div>

        <div className="w-full max-w-[320px]">
          <LocationField value={location} onChange={setLocation} />
        </div>

        <div className="w-full max-w-[200px]">
          <DatePicker
            value={date}
            onChange={(newDate) => setDate(newDate)}
            placeholder="Any day"
            leftIcon={<FaRegCalendarAlt />}
          />
        </div>

        <Button
          onClick={onSearch}
          variant="primary"
          size="md"
          iconLeft={<FaSearch className="text-white w-4 h-4" />}
        >
          Search
        </Button>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <FaShoppingCart className="text-slate-600 w-5 h-5 hover:text-[#2F7685] active:text-[#124058] cursor-pointer transition-colors" />
        {isLoggedIn ? (
          <>
            <FaBell className="text-slate-600 w-5 h-5 hover:text-[#2F7685] active:text-[#124058] cursor-pointer transition-colors" />
            <img
              src="https://placehold.co/24x24"
              alt="User avatar"
              className="w-6 h-6 rounded-full"
            />
          </>
        ) : (
          <>
            <FaUser className="text-slate-600 w-5 h-5" />
            <FaQuestionCircle className="text-slate-600 w-5 h-5" />
          </>
        )}
      </div>
    </header>
  );
}
