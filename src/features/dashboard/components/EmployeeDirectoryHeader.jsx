import React from 'react';

const ExportIcon = () => (
  <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 3v12" strokeLinecap="round" />
    <path d="m7 10 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 21h14" strokeLinecap="round" />
  </svg>
);

const PlusIcon = () => (
  <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
  </svg>
);

const EmployeeDirectoryHeader = () => {
  return (
    <section className="flex flex-col gap-5 rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] lg:flex-row lg:items-start lg:justify-between">
      <div>
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-slate-400">
          Organization / Employee Directory
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
          Personnel Directory
        </h1>
        <p className="mt-2 max-w-2xl text-sm font-medium leading-6 text-slate-500">
          Manage and monitor the organization&apos;s architectural and operational human capital.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-2xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
        >
          <ExportIcon />
          <span>Export</span>
        </button>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-2xl bg-[#2353df] px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(37,83,223,0.24)] transition hover:bg-[#1e48c4]"
        >
          <PlusIcon />
          <span>Add Employee</span>
        </button>
      </div>
    </section>
  );
};

export default EmployeeDirectoryHeader;
