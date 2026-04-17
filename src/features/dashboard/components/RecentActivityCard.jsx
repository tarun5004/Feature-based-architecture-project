import React from 'react';

const RecentActivityCard = ({ activities }) => {
  return (
    <section className="rounded-[2rem] border border-slate-200/80 bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.06)]">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Recent Activity</h2>
          <p className="mt-1 text-sm text-slate-500">
            Latest team updates and approvals.
          </p>
        </div>

        <button
          type="button"
          className="text-sm font-semibold text-blue-600 transition hover:text-blue-700"
        >
          View All
        </button>
      </div>

      <div className="mt-6 space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 p-4"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 to-blue-800 text-sm font-semibold text-white">
              {activity.initials}
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-900">
                {activity.name}{' '}
                <span className="font-normal text-slate-500">{activity.action}</span>
              </p>
              <p className="mt-1 text-sm text-slate-500">{activity.meta}</p>
              <p className="mt-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-slate-400">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentActivityCard;
