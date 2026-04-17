import React from 'react';

const iconStyles = {
  blue: 'bg-blue-100 text-blue-600',
  green: 'bg-emerald-100 text-emerald-600',
  amber: 'bg-amber-100 text-amber-600',
  violet: 'bg-violet-100 text-violet-600',
};

const StatCard = ({ icon, iconTone = 'blue', label, value, helper }) => {
  return (
    <div className="rounded-[1.75rem] border border-slate-200/80 bg-white p-5 shadow-[0_20px_45px_rgba(15,23,42,0.06)]">
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${iconStyles[iconTone]}`}
      >
        {icon}
      </div>

      <p className="mt-5 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-slate-400">
        {label}
      </p>
      <p className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-900">
        {value}
      </p>
      <p className="mt-2 text-sm text-slate-500">{helper}</p>
    </div>
  );
};

export default StatCard;
