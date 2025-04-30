import React from 'react';
import OnboardingSteps from '../../../components/OnboardingSteps';
import NewBookingsCard from '../../../components/NewBookingsCard';
import RevenueCard from '../../../components/RevenueCard';
import MyServicesCard from '../../../components/MyServicesCard';
import MyCalendarCard from '../../../components/MyCalendarCard';

export default function VendorDashboard() {
  const sampleBookings = [
    "Smith Wedding – Oct 12",
    "Lopez Reception – Nov 3",
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      <div className="col-span-2">
        <OnboardingSteps stepsCompleted={0} />
      </div>

      <MyCalendarCard
        monthLabel="April 2025"
        daysInMonth={30}
        bookedDates={[4, 12, 23]}
        onManageClick={() => console.log('Go to availability settings')}
      />
      <OnboardingSteps
  stepsCompleted={1}
  vendorName="Amal"
/>

<RevenueCard
  revenueTotal={25840}
  revenueByMonth={[2000, 3800, 4200, 5000, 2700, 2900, 2400, 840]}
/>

      <NewBookingsCard bookings={sampleBookings} />

      <RevenueCard />

      <MyServicesCard
        serviceCount={2}
        viewsThisMonth={187}
        onManageClick={() => console.log('Navigate to services')}
      />
    </div>
  );
}
