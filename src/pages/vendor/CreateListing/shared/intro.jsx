import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateListingIntro() {
  // Fake listing check for now
  const vendorHasListing = false; // swap this with real API later
  const navigate = useNavigate();

  return (
    <div className="p-8 max-w-2xl mx-auto text-center">
      {vendorHasListing ? (
        <>
          <h2 className="text-2xl font-[Literata] text-[#47567b] mb-4">Your Listing</h2>
          <div className="bg-white rounded-lg p-6 shadow">
            <h3 className="text-lg font-semibold text-slate-700">Christine’s Florals</h3>
            <p className="text-sm text-slate-500">2 services listed • 145 views this month</p>
            <button className="mt-4 bg-[#667493] text-white px-4 py-2 rounded-full">
              Manage Listing
            </button>
          </div>
        </>
      ) : <div className="min-h-[400px] bg-[#f0f5fa] flex items-center justify-center px-6 w-full">
      <main className="flex flex-col items-center justify-center max-w-2xl w-full text-center">
        <div className="w-32 h-32 mb-6">
          <img
            src="/store-illustration.png"
            alt="Store illustration"
            className="w-full h-full"
          />
        </div>
        <h1 className="text-2xl font-[Literata] text-[#47567b] mb-4">Create your listing</h1>
        <p className="text-[#667493] font-[Montserrat] mb-8 max-w-md mx-auto">
          Start by adding your basic business info to build trust with couples.
        </p>
        <button
  className="bg-[#667493] hover:bg-[#505267] text-white px-6 py-2 rounded-full font-[Montserrat] transition-colors"
  onClick={() => navigate('/vendor/create-listing/step-1')}
>
  Create listing
</button>
      </main>
    </div>
    }
    </div>
  );
}
