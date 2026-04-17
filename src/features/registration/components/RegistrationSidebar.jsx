import React from 'react';

const CameraIcon = () => (
  <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M4 8h3l1.5-2h7L17 8h3v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
    <circle cx="12" cy="13" r="3.5" />
  </svg>
);

const HelpIcon = () => (
  <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="9" />
    <path d="M9.1 9a3 3 0 1 1 4.8 2.4c-.9.68-1.4 1.18-1.4 2.1" strokeLinecap="round" />
    <path d="M12 17h.01" strokeLinecap="round" />
  </svg>
);

const RegistrationSidebar = ({ profilePreview, onboardingSteps }) => {
  return (
    <div className="space-y-5">
      <section className="rounded-[1.75rem] border border-slate-200/80 bg-gradient-to-b from-slate-50 to-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
        <div className="flex min-h-[220px] flex-col items-center justify-center rounded-[1.5rem] border border-dashed border-slate-300 bg-[#f7f9ff] text-center text-slate-400">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-slate-400 shadow-sm">
            <CameraIcon />
          </div>
          <p className="mt-5 text-base font-semibold text-slate-700">New Profile Preview</p>
          <p className="mt-2 max-w-[190px] text-sm leading-6">
            Employee photo will appear here after upload.
          </p>
        </div>

        <div className="mt-5 space-y-3 rounded-[1.5rem] bg-slate-950/[0.03] p-4">
          <div className="flex items-center justify-between rounded-2xl bg-white px-3 py-3">
            <div>
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-slate-400">
                {profilePreview.badge}
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900">{profilePreview.badgeValue}</p>
            </div>
            <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-emerald-700">
              Enabled
            </span>
          </div>

          <div className="flex items-center justify-between rounded-2xl bg-white px-3 py-3">
            <div>
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-slate-400">
                {profilePreview.accessLabel}
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900">{profilePreview.accessValue}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[1.75rem] border border-slate-200/80 bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
        <h3 className="text-base font-semibold text-slate-900">Onboarding Progress</h3>

        <div className="mt-5 space-y-4">
          {onboardingSteps.map((step, index) => (
            <div key={step} className="flex items-start gap-3">
              <span
                className={`mt-0.5 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                  index === 0
                    ? 'bg-blue-600 text-white'
                    : 'border border-slate-200 bg-white text-slate-400'
                }`}
              >
                {index + 1}
              </span>
              <div>
                <p className="text-sm font-medium text-slate-700">{step}</p>
                <p className="mt-1 text-xs text-slate-400">
                  {index === 0 ? 'Current active step' : 'Pending after previous approval'}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
            <span>Completion</span>
            <span>25%</span>
          </div>
          <div className="h-2 rounded-full bg-slate-100">
            <div className="h-2 w-1/4 rounded-full bg-blue-600" />
          </div>
        </div>
      </section>

      <section className="rounded-[1.75rem] bg-[#2353df] p-5 text-white shadow-[0_24px_55px_rgba(37,83,223,0.3)]">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15">
          <HelpIcon />
        </div>
        <h3 className="mt-5 text-lg font-semibold">Need Guidance?</h3>
        <p className="mt-2 text-sm leading-6 text-blue-100">
          Refer to the architect HR guidelines for document formatting and identity checks.
        </p>
        <button
          type="button"
          className="mt-5 rounded-2xl bg-white px-4 py-2.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
        >
          View Manual
        </button>
      </section>
    </div>
  );
};

export default RegistrationSidebar;
