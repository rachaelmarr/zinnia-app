import React from 'react';
import OnboardingSteps from '../../../components/OnboardingSteps';
import NewBookingsCard from '../../../components/NewBookingsCard';
import RevenueCard from '../../../components/RevenueCard';
import MyServicesCard from '../../../components/MyServicesCard';
import MyCalendarCard from '../../../components/MyCalendarCard';

export default function VendorDashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      <div className="col-span-2">
        <OnboardingSteps stepsCompleted={0} />
      </div>
      <MyCalendarCard />
      <NewBookingsCard />
      <RevenueCard />
      <MyServicesCard />
    </div>
  );
}
