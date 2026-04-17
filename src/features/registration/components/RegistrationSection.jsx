import React from 'react';

const RegistrationSection = ({ icon, title, children }) => {
  return (
    <section className="rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-[#1d4ed8]">
          {icon}
        </div>
        <h2 className="text-base font-semibold text-slate-900">{title}</h2>
      </div>

      {children}
    </section>
  );
};

export default RegistrationSection;
