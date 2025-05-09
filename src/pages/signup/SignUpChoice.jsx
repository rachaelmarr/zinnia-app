// src/pages/signup/SignUpChoice.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUpChoice() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col items-center justify-center px-6 py-12 text-center">
      <h1 className="text-3xl font-[Literata] text-[#47567b] mb-4">
        Who are you signing up as?
      </h1>
      <p className="text-[#667493] font-[Montserrat] mb-10 max-w-md">
        Zinnia helps couples plan weddings and vendors grow their business. Choose your path below.
      </p>
      <div className="flex flex-col sm:flex-row gap-6">
        <button
          className="bg-[#47567b] hover:bg-[#2e4d6a] text-white px-6 py-3 rounded-full font-[Montserrat] transition-colors"
          onClick={() => navigate('/signup/couple/create-account')}
        >
          I'm a couple
        </button>
        <button
          className="bg-[#47567b] hover:bg-[#2e4d6a] text-white px-6 py-3 rounded-full font-[Montserrat] transition-colors"
          onClick={() => navigate('/signup/vendor/create-account')}
        >
          I'm a vendor
        </button>
      </div>
    </div>
  );
}
