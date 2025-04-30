import React from 'react';
import OnboardingSteps from '../../../shared/components/OnboardingSteps';
import RevenueCard from '../../../shared/components/RevenueCard';
import MyServicesCard from '../../../shared/components/MyServicesCard';
import MyCalendarCard from '../../../shared/components/MyCalendarCard';
import NewBookingsCard from '../../../shared/components/NewBookingsCard';


export default function VendorDashboard() {
  const sampleBookings = [
    "Smith Wedding – Oct 12",
    "Lopez Reception – Nov 3",
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      <div className="col-span-2">
        <OnboardingSteps stepsCompleted={1} vendorName="Amal" />
      </div>

      <MyCalendarCard
        monthLabel="April 2025"
        daysInMonth={30}
        bookedDates={[4, 12, 23]}
        onManageClick={() => console.log('Go to availability settings')}
      />

      <NewBookingsCard bookings={sampleBookings} />

      <RevenueCard
        revenueTotal={25840}
        revenueByMonth={[2000, 3800, 4200, 5000, 2700, 2900, 2400, 840]}
      />

      <MyServicesCard
        serviceCount={2}
        viewsThisMonth={187}
        onManageClick={() => console.log('Navigate to services')}
      />
    </div>
  );
}
