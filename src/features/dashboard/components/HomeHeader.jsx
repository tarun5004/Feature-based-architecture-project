import React from 'react';

const HomeHeader = () => {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">
          Employee Overview
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-slate-900 sm:text-4xl">
          Workforce Command Center
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
          Operational insights, employee activity, and team performance in one
          streamlined dashboard.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-[0_14px_30px_rgba(15,23,42,0.06)] transition hover:border-slate-300"
        >
          Export Report
        </button>

        <button
          type="button"
          className="rounded-2xl bg-[#2155f5] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(33,85,245,0.28)] transition hover:bg-[#1849dd]"
        >
          + New Employee
        </button>
      </div>
    </div>
  );
};

export default HomeHeader;
