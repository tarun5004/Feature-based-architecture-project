import React from 'react';

const RegistrationHeader = () => {
  return (
    <header className="space-y-3">
      <button
        type="button"
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-700"
      >
        <span className="text-base leading-none">←</span>
        <span>Back to Directory</span>
      </button>

      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Employee Registration
        </h1>
        <p className="mt-2 text-sm font-medium text-slate-500">
          Onboard a new digital architect to the Gaur ERP ecosystem.
        </p>
      </div>
    </header>
  );
};

export default RegistrationHeader;
