import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// 🖼️ Replace these with your actual file paths
import coupleRest from '../../../assets/illustration/couple_rest.svg';
import coupleSelected from '../../../assets/illustration/couple_selected.svg';
import vendorRest from '../../../assets/illustration/vendor_rest.svg';
import vendorSelected from '../../../assets/illustration/vendor_selected.svg';

export default function SignUpChoice() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const handleNext = () => {
    if (selected === 'couple') navigate('/signup/couple/create-account');
    if (selected === 'vendor') navigate('/signup/vendor/create-account');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between px-6 py-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-2xl font-[Literata] text-slate-700 mb-2">
          Are you signing up as a couple or vendor?
        </h1>
        <p className="text-sm font-[Montserrat] text-slate-500">
          Already have an account?{" "}
          <a href="/login" className="text-[#2E7684] underline">
            Log in here
          </a>
        </p>
      </div>

      {/* Selection */}
      <div className="flex flex-col sm:flex-row gap-8 justify-center items-center my-12">
        {/* Couple */}
        <button
          type="button"
          className={`p-4 rounded-full border-2 flex flex-col items-center transition-all ${
            selected === 'couple' ? 'border-[#318913]' : 'border-slate-300'
          }`}
          onClick={() => setSelected('couple')}
        >
          <img
            src={selected === 'couple' ? coupleSelected : coupleRest}
            alt="Couple icon"
            className="w-40 h-40"
          />
          <span className="mt-2 font-[Literata] text-base text-slate-700 font-semibold">Couple</span>
        </button>

        {/* Vendor */}
        <button
          type="button"
          className={`p-4 rounded-full border-2 flex flex-col items-center transition-all ${
            selected === 'vendor' ? 'border-[#318913]' : 'border-slate-300'
          }`}
          onClick={() => setSelected('vendor')}
        >
          <img
            src={selected === 'vendor' ? vendorSelected : vendorRest}
            alt="Vendor icon"
            className="w-40 h-40"
          />
          <span className="mt-2 font-[Literata] text-base text-slate-700 font-semibold">Vendor</span>
        </button>
      </div>

      {/* Actions */}
      <div className="flex justify-center gap-4">
        <button
          type="button"
          className="text-slate-500 font-[Montserrat] text-sm"
          onClick={() => navigate('/')}
        >
          Cancel
        </button>
        <button
          type="button"
          className={`px-6 py-2 rounded-full text-white font-[Montserrat] text-sm transition ${
            selected ? 'bg-[#47567b] hover:bg-[#2E4D6A]' : 'bg-slate-300 cursor-not-allowed'
          }`}
          onClick={handleNext}
          disabled={!selected}
        >
          Next
        </button>
      </div>
    </div>
  );
}
