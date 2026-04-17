import React from 'react';

const TrendIcon = () => (
  <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m5 15 4-4 4 4 6-7" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 8h-5" strokeLinecap="round" />
  </svg>
);

const ActiveStaffCard = ({ total, label, helper }) => {
  return (
    <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,#0f9b8e_0%,#0a7a73_100%)] p-5 text-white shadow-[0_22px_50px_rgba(15,155,142,0.24)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-emerald-100/90">
            {label}
          </p>
          <p className="mt-3 text-4xl font-semibold tracking-tight">{total}</p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-white">
          <TrendIcon />
        </div>
      </div>

      <p className="mt-4 text-sm font-medium text-emerald-50/90">{helper}</p>
    </div>
  );
};

export default ActiveStaffCard;
