import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../features/dashboard/components/Navbar';
import BreadSrucm from '../../shared/components/BreadSrucm';

const DashBoardLayout = () => {
  return (
    <div className="h-screen overflow-hidden bg-[linear-gradient(135deg,_#eef4ff_0%,_#e2e8f0_45%,_#f8fafc_100%)] p-3 sm:p-4 lg:p-5">
      <div className="grid h-full gap-3 lg:grid-cols-[280px_1fr] lg:gap-5">
        <Navbar />

        <main className="overflow-y-auto rounded-[2rem] border border-white/70 bg-white/80 px-4 py-4 shadow-[0_24px_70px_rgba(15,23,42,0.12)] backdrop-blur sm:px-6 sm:py-6">
          <div className="space-y-6">
            <BreadSrucm />
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashBoardLayout;
