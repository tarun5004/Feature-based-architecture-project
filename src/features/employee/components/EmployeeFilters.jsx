import React from 'react';

const SearchIcon = () => (
  <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="6" />
    <path d="m20 20-3.5-3.5" strokeLinecap="round" />
  </svg>
);

const ChevronIcon = () => (
  <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const EmployeeFilters = ({ options }) => {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
      <div className="flex min-h-14 flex-1 items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-500 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
        <SearchIcon />
        <span>Search by name, role, or department...</span>
      </div>

      <button
        type="button"
        className="flex min-h-14 min-w-[220px] items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-600 shadow-[0_12px_30px_rgba(15,23,42,0.04)]"
      >
        <span>{options[0]}</span>
        <ChevronIcon />
      </button>
    </div>
  );
};

export default EmployeeFilters;
