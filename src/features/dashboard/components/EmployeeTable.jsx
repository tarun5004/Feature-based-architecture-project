import React from 'react';

const EyeIcon = () => (
  <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M2 12s3.6-6 10-6 10 6 10 6-3.6 6-10 6S2 12 2 12Z" />
    <circle cx="12" cy="12" r="2.5" />
  </svg>
);

const EditIcon = () => (
  <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="m4 20 4.5-1 9-9a2.1 2.1 0 0 0-3-3l-9 9L4 20Z" />
    <path d="m13.5 6.5 4 4" />
  </svg>
);

const DeleteIcon = () => (
  <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M4 7h16" />
    <path d="M10 11v6M14 11v6" strokeLinecap="round" />
    <path d="M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12" />
    <path d="M9 7V4h6v3" />
  </svg>
);

const getInitials = (name) => {
  return name
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('');
};

const EmployeeTable = ({ employees }) => {
  return (
    <section className="rounded-[1.75rem] border border-slate-200/80 bg-white p-4 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:p-6">
      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-y-3">
          <thead>
            <tr className="text-left text-[0.7rem] font-bold uppercase tracking-[0.18em] text-slate-400">
              <th className="pb-2">Employee Name</th>
              <th className="pb-2">Role</th>
              <th className="pb-2">Department</th>
              <th className="pb-2">Status</th>
              <th className="pb-2">Joined Date</th>
              <th className="pb-2 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id} className="rounded-2xl bg-slate-50 text-sm text-slate-600">
                <td className="rounded-l-2xl px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#082146] text-xs font-bold text-white">
                      {getInitials(employee.name)}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{employee.name}</p>
                      <p className="mt-1 text-xs text-slate-400">{employee.email}</p>
                    </div>
                  </div>
                </td>

                <td className="px-4 py-4 font-medium text-slate-700">{employee.role}</td>

                <td className="px-4 py-4">
                  <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-bold uppercase tracking-[0.14em] text-blue-700">
                    {employee.department}
                  </span>
                </td>

                <td className="px-4 py-4">
                  <span
                    className={`inline-flex items-center gap-2 text-sm font-medium ${
                      employee.status === 'Active' ? 'text-emerald-600' : 'text-amber-500'
                    }`}
                  >
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                        employee.status === 'Active' ? 'bg-emerald-500' : 'bg-amber-400'
                      }`}
                    />
                    {employee.status}
                  </span>
                </td>

                <td className="px-4 py-4 font-medium text-slate-500">{employee.joinedAt}</td>

                <td className="rounded-r-2xl px-4 py-4">
                  <div className="flex justify-end gap-2 text-slate-500">
                    <button
                      type="button"
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white transition hover:border-slate-300 hover:text-slate-700"
                    >
                      <EyeIcon />
                    </button>
                    <button
                      type="button"
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white transition hover:border-slate-300 hover:text-slate-700"
                    >
                      <EditIcon />
                    </button>
                    <button
                      type="button"
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white transition hover:border-red-200 hover:text-red-500"
                    >
                      <DeleteIcon />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex flex-col gap-4 border-t border-slate-100 pt-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>Showing 1 to 4 of 142 results</p>

        <div className="flex items-center gap-2">
          <button type="button" className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white transition hover:bg-slate-50">
            ‹
          </button>
          <button type="button" className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2353df] text-white">
            1
          </button>
          <button type="button" className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white transition hover:bg-slate-50">
            2
          </button>
          <button type="button" className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white transition hover:bg-slate-50">
            3
          </button>
          <button type="button" className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white transition hover:bg-slate-50">
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default EmployeeTable;
