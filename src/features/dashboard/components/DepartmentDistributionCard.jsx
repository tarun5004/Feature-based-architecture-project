import React from 'react';

const DepartmentDistributionCard = ({ departments }) => {
  return (
    <section className="rounded-[2rem] border border-slate-200/80 bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.06)]">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Departmental Distribution
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Full-time and contractor mix across active teams.
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
            <span>Full-Time</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span>Contractors</span>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-5">
        {departments.map((item) => (
          <div key={item.name} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <p className="font-medium text-slate-700">{item.name}</p>
              <p className="text-slate-500">{item.total} team members</p>
            </div>

            <div className="flex h-3 overflow-hidden rounded-full bg-slate-100">
              <div
                className="rounded-full bg-blue-600"
                style={{ width: `${item.fullTime}%` }}
              />
              <div
                className="rounded-full bg-slate-300"
                style={{ width: `${item.contractors}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs uppercase tracking-[0.16em] text-slate-400">
              <span>{item.fullTime}% Full-Time</span>
              <span>{item.contractors}% Contractors</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DepartmentDistributionCard;
