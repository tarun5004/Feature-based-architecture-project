import React from 'react';

const ActiveHiresCard = ({ hires }) => {
  return (
    <section className="rounded-[2rem] border border-slate-200/80 bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.06)]">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Active Hires This Month
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Current hiring pipeline and upcoming joins.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600"
          >
            Filter
          </button>
          <button
            type="button"
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
          >
            View All
          </button>
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-100">
        <div className="grid grid-cols-[1.2fr_1fr_1fr] bg-slate-50 px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
          <p>Candidate</p>
          <p>Department</p>
          <p>Status</p>
        </div>

        {hires.map((hire) => (
          <div
            key={hire.id}
            className="grid grid-cols-[1.2fr_1fr_1fr] items-center border-t border-slate-100 px-4 py-4 text-sm"
          >
            <div>
              <p className="font-semibold text-slate-900">{hire.name}</p>
              <p className="mt-1 text-slate-500">{hire.role}</p>
            </div>
            <p className="text-slate-600">{hire.department}</p>
            <div>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                {hire.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActiveHiresCard;
