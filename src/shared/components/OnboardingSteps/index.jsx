// src/components/OnboardingSteps.jsx
import React from 'react';

const steps = [
  {
    title: 'Create your listing',
    description: 'Create your listing and add services',
    actionLabel: 'Create listing',
    action: () => {}, // wire this to routing/action later
  },
  {
    title: 'Set your availability',
    description: 'Set your availability so people can book you.',
    actionLabel: 'Set Availability',
    action: () => {},
  },
  {
    title: 'Bank account and tax information',
    description: 'We’ll use Stripe to verify your information',
    actionLabel: 'Add Bank Info',
    action: () => {},
  },
  {
    title: 'Finalize your bio',
    description: 'Finalize your listing bio',
    actionLabel: 'Update Bio',
    action: () => {},
  },
];

export default function OnboardingSteps({ stepsCompleted = 0 }) {
  if (stepsCompleted === steps.length) return null;

  return (
    <div className="bg-white rounded-2xl p-5 w-full max-w-2xl flex flex-col gap-11">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <span className="text-xs text-slate-500 font-[Jost]">Welcome Ted Lasso!</span>
        <h2 className="text-3xl font-[Literata] text-slate-600 font-semibold leading-[48px]">
          {stepsCompleted}/{steps.length} steps completed
        </h2>
        <p className="text-sm text-slate-600 font-[Montserrat]">
          Once your profile is complete, customers can book you.
        </p>
      </div>

      {/* Step List */}
      <div className="flex flex-col gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b border-slate-300 pb-5"
          >
            <div className="flex gap-4 items-start">
              <div className="p-2 rounded-full outline outline-1 outline-slate-500">
                {/* Placeholder icon block */}
                <div className="w-7 h-10 bg-slate-600" />
              </div>
              <div>
                <div className="font-[Literata] font-extrabold text-sm text-slate-600 leading-tight tracking-tight">
                  {step.title}
                </div>
                <div className="font-[Montserrat] text-sm text-slate-600 leading-tight tracking-tight">
                  {step.description}
                </div>
              </div>
            </div>
            <button
              onClick={step.action}
              className="px-3 py-2 bg-slate-600 text-neutral-50 text-sm font-medium font-[Montserrat] rounded-3xl"
            >
              {step.actionLabel}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
