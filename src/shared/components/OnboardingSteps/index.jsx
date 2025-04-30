import React from 'react';
import { FiCalendar, FiDollarSign, FiUser, FiClipboard } from 'react-icons/fi';
import Button from '../Button'; // Adjust path if needed

const steps = [
  {
    title: 'Create your listing',
    description: 'Create your listing and add services',
    actionLabel: 'Create listing',
    action: () => {},
    icon: <FiClipboard className="w-5 h-5 text-slate-600" />,
  },
  {
    title: 'Set your availability',
    description: 'Set your availability so people can book you.',
    actionLabel: 'Set Availability',
    action: () => {},
    icon: <FiCalendar className="w-5 h-5 text-slate-600" />,
  },
  {
    title: 'Bank account and tax information',
    description: 'We’ll use Stripe to verify your information',
    actionLabel: 'Add Bank Info',
    action: () => {},
    icon: <FiDollarSign className="w-5 h-5 text-slate-600" />,
  },
  {
    title: 'Finalize your bio',
    description: 'Finalize your listing bio',
    actionLabel: 'Update Bio',
    action: () => {},
    icon: <FiUser className="w-5 h-5 text-slate-600" />,
  },
];


export default function OnboardingSteps({ stepsCompleted = 0, vendorName = 'there', className = '' }) {
  const incompleteSteps = steps.slice(stepsCompleted);

  if (stepsCompleted === steps.length) return null;

  return (
    <div className={`bg-white rounded-2xl p-5 w-full flex flex-col gap-11 shadow-sm ${className}`}>
      {/* Header */}
      <div className="flex flex-col gap-1">
        <span className="text-xs text-slate-500 font-[Montserrat]">Welcome {vendorName}!</span>
        <h2 className="text-3xl font-[Literata] text-slate-600 font-semibold leading-[48px]">
          {stepsCompleted}/{steps.length} steps completed
        </h2>
        <p className="text-sm text-slate-600 font-[Montserrat]">
          Once your profile is complete, customers can book you.
        </p>
      </div>

      {/* Incomplete Steps */}
      <div className="flex flex-col gap-6">
        {incompleteSteps.map((step, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b border-slate-300 pb-5"
          >
            <div className="flex gap-4 items-start">
              <div className="p-2 rounded-full outline outline-1 outline-slate-300 bg-slate-100 flex items-center justify-center">
                {step.icon || <div className="w-5 h-5" />} {/* fallback spacer */}
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
            <Button size="sm" onClick={step.action}>
              {step.actionLabel}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
