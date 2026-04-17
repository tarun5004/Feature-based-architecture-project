import React from 'react';
import ActiveHiresCard from '../components/ActiveHiresCard';
import DepartmentDistributionCard from '../components/DepartmentDistributionCard';
import HomeHeader from '../components/HomeHeader';
import RecentActivityCard from '../components/RecentActivityCard';
import StatCard from '../components/StatCard';
import {
  activitiesData,
  departmentsData,
  hiresData,
  statsData,
} from '../data/homePageData';

const OverviewIcon = () => (
  <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M4 19h16" />
    <path d="M7 16V9" />
    <path d="M12 16V5" />
    <path d="M17 16v-4" />
  </svg>
);

const HireIcon = () => (
  <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M20 21a8 8 0 0 0-16 0" />
    <circle cx="12" cy="8" r="4" />
    <path d="M19 8h4M21 6v4" strokeLinecap="round" />
  </svg>
);

const AttendanceIcon = () => (
  <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M16 3v4M8 3v4M3 10h18" />
    <path d="m9.5 15 1.7 1.7L15 13" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DepartmentIcon = () => (
  <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M4 20h16" />
    <path d="M6 20V7l6-3 6 3v13" />
    <path d="M9 10h.01M12 10h.01M15 10h.01M9 14h.01M12 14h.01M15 14h.01" strokeLinecap="round" />
  </svg>
);

const statsIcons = {
  overview: <OverviewIcon />,
  hire: <HireIcon />,
  attendance: <AttendanceIcon />,
  department: <DepartmentIcon />,
};

const HomePage = () => {
  return (
    <div className="space-y-6">
      <HomeHeader />

      <section className="grid gap-4 xl:grid-cols-4 md:grid-cols-2">
        {statsData.map((stat) => (
          <StatCard
            key={stat.label}
            {...stat}
            icon={statsIcons[stat.iconKey]}
          />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.7fr_1fr]">
        <DepartmentDistributionCard departments={departmentsData} />
        <RecentActivityCard activities={activitiesData} />
      </section>

      <ActiveHiresCard hires={hiresData} />
    </div>
  );
};

export default HomePage;
