import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../features/dashboard/components/Navbar';

const DashBoardLayout = () => {
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#eef4ff_0%,_#e2e8f0_45%,_#f8fafc_100%)] p-3 sm:p-4 lg:p-5">
      <div className="grid min-h-[calc(100vh-1.5rem)] gap-3 lg:grid-cols-[280px_1fr] lg:gap-5">
        <Navbar />

        <main className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 px-4 py-4 shadow-[0_24px_70px_rgba(15,23,42,0.12)] backdrop-blur sm:px-6 sm:py-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashBoardLayout;
