import React from 'react';

const ChevronIcon = () => (
  <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CalendarIcon = () => (
  <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M16 3v4M8 3v4M3 10h18" />
  </svg>
);

const RegistrationFieldGrid = ({ fields }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {fields.map((field) => (
        <div key={field.id} className="space-y-2">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-slate-400">
            {field.label}
          </p>

          <div className="flex min-h-14 items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-600">
            <span>{field.value}</span>

            {field.type === 'select' && <ChevronIcon />}
            {field.id === 'date-of-birth' && <CalendarIcon />}
            {field.type === 'tag' && (
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-semibold text-blue-700">
                  {field.value}
                </span>
                <span className="text-xs font-medium text-slate-400">{field.note}</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RegistrationFieldGrid;
